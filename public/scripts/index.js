var searchResults;

$(document).ready(function () {
    populateSearchCriteriaDropdownList();
    searchStudentDatabase();
    $(btnSearch).click(function () {
        searchStudentDatabase();
    });
    $(btnAddStudent).click(function () {
        openAddStudentPage();
    });
});

function searchStudentDatabase() {
     const key = $("#txtSearch").val().trim();
     const searchCriteria = $("#btnCriteriaDropdown").text().trim();
     $("#search_ul").empty();
     const body = {
        search_query: key, 
        search_criteria: searchCriteria,
    };
    $.post("/search/", body, function (response) {
        searchResults = response;
        generateListings(response);
    });
}

function generateListings(studentList) {
    studentList.forEach(student => {
        $('.search_ul').append(
            '<li class="search_li">' +       
            '<img src="/images/avatar.jpeg" class="avatar_icon">' + '</img>' +
            '<h3 class="li_title">' + student.firstname + ' ' +  student.lastname + '</h3>' +
            '<h6 class="li_title">' + 'SFSU ID: '  + student.studentid + '</h6>' +
            '<h6 class="li_title">' + 'Email: ' + student.email + '</h6>' +
            '<h6 class="li_title">' + 'Address: '  + student.address + '</h6>' +
            '<h6 class="li_title">' + 'GPA: '  + student.gpa + '</h6>' +
            '<img src="/images/trash.png" class="trash_icon">' + '</img>' +
            '</li>'
        );
    });
    setUpListingListeners(studentList);
}

function populateSearchCriteriaDropdownList() {
    var criteriaDropdownList = document.getElementById('criteriaDropdown');
    let anchorElement = document.createElement('a');
        anchorElement.setAttribute('class', 'dropdown-item');
        anchorElement.setAttribute('onmouseover', '');
        anchorElement.setAttribute('style', 'cursor: pointer;');
        anchorElement.innerHTML = 'First-Name';
        anchorElement.addEventListener("click", function (event) {
            $("#btnCriteriaDropdown").text('First-Name');
            $("#btnCriteriaDropdown").val('First-Name');
        });
        criteriaDropdownList.appendChild(anchorElement);
        let anchorElement2 = document.createElement('a');
        anchorElement2.setAttribute('class', 'dropdown-item');
        anchorElement2.setAttribute('onmouseover', '');
        anchorElement2.setAttribute('style', 'cursor: pointer;');
        anchorElement2.innerHTML = 'Last-Name';
        anchorElement2.addEventListener("click", function (event) {
            $("#btnCriteriaDropdown").text('Last-Name');
            $("#btnCriteriaDropdown").val('Last-Name');
        });
        criteriaDropdownList.appendChild(anchorElement2);
        let anchorElement3 = document.createElement('a');
        anchorElement3.setAttribute('class', 'dropdown-item');
        anchorElement3.setAttribute('onmouseover', '');
        anchorElement3.setAttribute('style', 'cursor: pointer;');
        anchorElement3.innerHTML = 'Student-ID';
        anchorElement3.addEventListener("click", function (event) {
            $("#btnCriteriaDropdown").text('Student-ID');
            $("#btnCriteriaDropdown").val('Student-ID');
        });
        criteriaDropdownList.appendChild(anchorElement3);
    return anchorElement;
}

function setUpListingListeners(studentList) {
    $('.trash_icon').click(function () {
        let index = $(this).parent().index();
        let student = studentList[index];
        confirmDelete(student);
    });
}

function confirmDelete(student) {
    if (confirm("Are you sure you want to delete this student's record ?")) {
        const body = {
            studentid: student.studentid, 
        };
        $.post("/deletestudent/", body, function (response) {
            if (response=='true') {
                window.alert('Student record deleted successfully!!');
                window.location.reload(true);
            } else {
                window.alert('Failed to delete student record !!');
            }
        });
    } else {
        //Do nothing
    }
}

function openAddStudentPage(argument) {
    window.location.href='/addnewstudent'
}
