$(document).ready(function () {
    $("#btnAddStudent").click(function () {
        submitStudentInfo();
    });
});

function submitStudentInfo() {
	const studentid = $("#studentid").val().trim();
    const firstname = $("#firstname").val().trim();
    const lastname = $("#lastname").val().trim();
    const email = $("#email").val().trim();
    const address = $("#address").val().trim();
    const gpa = $("#gpa").val().trim();
	const body = {
        studentid: studentid, 
        firstname: firstname,
        lastname: lastname,
        email: email,
        address: address,
        gpa: gpa
    };
    $.post("/addnewstudent/", body, function (response) {
        if (response=='true') {
        	window.alert('Successfully Added new student !!');
        	window.location.href='/';
        } else {
			window.alert('Failed to add new student to database');
        }
    });
}