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
    const [isValidInput, msg] = validateInputFields(studentid, firstname, lastname, email, address, gpa);
    if (!isValidInput) {
        window.alert('Invalid data entered !\n' + msg);
    } else {
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
}

function validateInputFields(studentid, firstname, lastname, email, address, gpa) {
    if (studentid.length != 9) {
        console.log('Error: Student ID should be 9 characters long!');
        return [false, 'Error: Student ID should be 9 characters long!'];
    }
    if (firstname.length==0 || firstname.length>20) {
        console.log('Error: Length of first name should be between 1 and 20 !');
        return [false,'Error: Length of first name should be between 1 and 20 !'];
    }
    if (lastname.length==0 || lastname.length>20) {
        console.log('Error: Length of last name should be between 1 and 20 !');
        return [false, 'Error: Length of last name should be between 1 and 20 !'];
    }
    if (!validateEmail(email)) {
        console.log('Invalid email !');
        return [false, 'Invalid email !'];
    }
    if (address.length==0 || address.length>40) {
        console.log('Error: Length of address should be between 1 and 40 !');
        return [false, 'Error: Length of address should be between 1 and 40 !'];
    }
    if (!isNumeric(gpa)) {
        console.log('Error: Invalid GPA entered !');
        return [false, 'Error: Invalid GPA entered !'];
    }
    return [true, 'all fields are valid'];
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n) && n<=4;
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}