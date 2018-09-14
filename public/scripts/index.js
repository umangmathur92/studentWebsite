var searchResults;

$(document).ready(function () {
    populateSearchCriteriaDropdownList();
    $(btnSearch).click(function () {
        searchStudentDatabase();
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

// function searchMovieDatabase() {
//     const key = $("#txtSearch").val().trim();
//     const year = $("#btnYearDropdown").text().trim();
//     const rating = $("#btnPopularityDropdown").text().trim().charAt(0);
//     var sortOrder = $("#btnSortingDropdown").text().trim();
//     sortOrder = (sortOrder=='Ascending') ? 'ASC' : 'DESC';
//     $("#search_ul").empty();
//     const body = {
//         search_query: key, 
//         order_by: sortOrder,
//         year: year,
//         rating: rating
//     };
//     $.post("/search/", body, function (response) {
//         searchResults = response;
//         generateListings(response);
//     });
// }

function generateListings(studentList) {
    studentList.forEach(student => {
        $('.search_ul').append(
            '<li class="search_li">' +       
            '<img src="/images/avatar.jpeg">' + '</img>' +
            '<h3 class="li_title">' + student.firstname + ' ' +  student.lastname + '</h3>' +
            '<h6 class="li_title">' + 'Email: ' + student.email + '</h6>' +
            '<h6 class="li_title">' + 'Address: '  + student.address + '</h6>' +
            '<h6 class="li_title">' + 'GPA: '  + student.gpa + '</h6>' +
            '</li>'
        );
    });
    //setUpListingListeners(studentList);
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

function populateRatingSelectionDropdownList() {
    var popularityDropdownList = document.getElementById('popularityDropdown');
    let anchorElement = document.createElement('a');
        anchorElement.setAttribute('class', 'dropdown-item');
        anchorElement.setAttribute('onmouseover', '');
        anchorElement.setAttribute('style', 'cursor: pointer;');
        anchorElement.innerHTML = '-';
        anchorElement.addEventListener("click", function (event) {
            $("#btnPopularityDropdown").text('-');
            $("#btnPopularityDropdown").val('-');
        });
        popularityDropdownList.appendChild(anchorElement);
    for (let num = 1; num <= 5; num++) {
        let anchorElement = document.createElement('a');
        anchorElement.setAttribute('class', 'dropdown-item');
        anchorElement.setAttribute('onmouseover', '');
        anchorElement.setAttribute('style', 'cursor: pointer;');
        anchorElement.innerHTML = num + ' Stars or Greater';
        anchorElement.addEventListener("click", function (event) {
            $("#btnPopularityDropdown").text(num + ' Stars or Greater');
            $("#btnPopularityDropdown").val(num + ' Stars or Greater');
        });
        popularityDropdownList.appendChild(anchorElement);
    }
    return anchorElement;
}

// function populateYearSelectionDropdownList() {
//     var yearDropdownList = document.getElementById('yearDropdown');
//     let anchorElement = document.createElement('a');
//         anchorElement.setAttribute('class', 'dropdown-item');
//         anchorElement.setAttribute('onmouseover', '');
//         anchorElement.setAttribute('style', 'cursor: pointer;');
//         anchorElement.innerHTML = '-';
//         anchorElement.addEventListener("click", function (event) {
//             $("#btnYearDropdown").text('-');
//             $("#btnYearDropdown").val('-');
//         });
//         yearDropdownList.appendChild(anchorElement);
//     for (let yr = 2000; yr <= 2018; yr++) {
//         let anchorElement = document.createElement('a');
//         anchorElement.setAttribute('class', 'dropdown-item');
//         anchorElement.setAttribute('onmouseover', '');
//         anchorElement.setAttribute('style', 'cursor: pointer;');
//         anchorElement.innerHTML = yr;
//         anchorElement.addEventListener("click", function (event) {
//             $("#btnYearDropdown").text(yr);
//             $("#btnYearDropdown").val(yr);
//         });
//         yearDropdownList.appendChild(anchorElement);
//     }
//     return anchorElement;
// }

function populateSortingSelectionDropdownList() {
    var yearDropdownList = document.getElementById('sortingDropdown');
    let anchorElement = document.createElement('a');
        anchorElement.setAttribute('class', 'dropdown-item');
        anchorElement.setAttribute('onmouseover', '');
        anchorElement.setAttribute('style', 'cursor: pointer;');
        anchorElement.innerHTML = 'Ascending';
        anchorElement.addEventListener("click", function (event) {
            $("#btnSortingDropdown").text('Ascending');
            $("#btnSortingDropdown").val('Ascending');
        });
        yearDropdownList.appendChild(anchorElement);
        let anchorElement2 = document.createElement('a');
        anchorElement2.setAttribute('class', 'dropdown-item');
        anchorElement2.setAttribute('onmouseover', '');
        anchorElement2.setAttribute('style', 'cursor: pointer;');
        anchorElement2.innerHTML = 'Descending';
        anchorElement2.addEventListener("click", function (event) {
            $("#btnSortingDropdown").text('Descending');
            $("#btnSortingDropdown").val('Descending');
        });
        yearDropdownList.appendChild(anchorElement2);
    return anchorElement;
}

function getFormattedDateString(inputDateStr) {
    //Input date string format: YYYY-MM-DDTHH:MM:SSZ
    var date = Date.parse(inputDateStr); 
    return moment(date).format('MMMM DD, YYYY');
}

function setUpListingListeners(movieList) {
    $('.search_li').click(function () {
        let index = $(this).index();
        let movie = movieList[index];
        window.open('/moviedetails' + '/' + movie.mid);
    });
}