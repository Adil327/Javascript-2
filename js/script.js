
// Clear Input Div
document.getElementById("clearInputBtn").onclick = function () {
    document.getElementById("inputDiv").innerHTML = " ";
}

// Clear Output Div
document.getElementById("clearOutputBtn").onclick = function () {
    document.getElementById("outputDiv").innerHTML = " ";
}

// Concatinate Strings
document.getElementById("concateBtn").onclick = function () {
    let text1 = "Hello";
    let text2 = "World";
    let banger = "!";
    let sum = (text1 + " " + text2 + banger);
    document.getElementById("inputDiv").innerHTML = '<p>"Hello" + "World" + "!"</p>';
    document.getElementById("outputDiv").innerHTML = sum;
}

// Ask Name from User
document.getElementById("askNameBtn").onclick = function () {
    let firstName = prompt("Please Enter Your First Name");
    let lastName = prompt("Please Enter Your Last Name");
    let fullName = `${firstName} ${lastName}`;
    document.getElementById("inputDiv").innerHTML = `firstName = ${firstName} <br> lastName = ${lastName} <br> fullName = firstName + lastName`;
    document.getElementById("outputDiv").innerHTML = fullName;
}

// Comparison Operators
document.getElementById("comparisonBtn").onclick = function () {
    let firstNumber = prompt("Please Enter the First Value");
    let secondNumber = prompt("Please Enter the Second Value");
    if (firstNumber == secondNumber) {
        document.getElementById("inputDiv").innerHTML = "firstNumber == secondNumber"
        document.getElementById("outputDiv").innerHTML = "<span class='text-success fw-bold'>Condition is true &#128522;<span/>"
    }
    else {
        document.getElementById("inputDiv").innerHTML = "firstNumber !== secondNumber"
        document.getElementById("outputDiv").innerHTML = "<span class = 'text-danger fw-bold'>Condition is False! &#128554;</span>"
    }
}

// if else if statement
document.getElementById("ifElseBtn").onclick = function () {
    let marks = prompt("Please Enter Your Total Marks")
    if (marks > 100) {
        document.getElementById("inputDiv").innerHTML = "Enter Marks Out of 100";
        document.getElementById("outputDiv").innerHTML = "<span class = 'text-warning fw-bold'> Not Valid Marks!"
    }
    else if (marks >= 90) {
        document.getElementById("inputDiv").innerHTML = `${marks}`;
        document.getElementById("outputDiv").innerHTML = "<span class = 'text-success fw-bold'> Congratulations!</span> <br> You got A+ Grade"
    }

    else if (marks >= 80) {
        document.getElementById("inputDiv").innerHTML = `${marks}`;
        document.getElementById("outputDiv").innerHTML = "<span class = 'text-success fw-bold'> Congratulations!</span> <br> You got A Grade"
    }

    else if (marks >= 70) {
        document.getElementById("inputDiv").innerHTML = `${marks}`;
        document.getElementById("outputDiv").innerHTML = "<span class = 'text-info fw-bold'> Passed!</span> <br> You got B Grade"
    }

    else if (marks >= 60) {
        document.getElementById("inputDiv").innerHTML = `${marks}`;
        document.getElementById("outputDiv").innerHTML = "<span class = 'text-secondary fw-bold'> Passed!</span> <br> You got C Grade"
    }

    else if (marks < 60) {
        document.getElementById("inputDiv").innerHTML = `${marks}`;
        document.getElementById("outputDiv").innerHTML = "<span class = 'text-danger fw-bold'> Failed!</span> <br> Better Luck Next Time"
    }

    else {
        document.getElementById("inputDiv").innerHTML = `${marks}`;
        document.getElementById("outputDiv").innerHTML = "<span class = 'text-warning fw-bold'>Wrong Value! </span>"
    }
}

// Testing Sets of Conditions
document.getElementById("testingBtn").onclick = function () {
    let age = prompt("Please Enter Your Age")
    let weight = prompt("Please Enter Your Weight")
    if (age <= 13 && weight <= 30) {
        document.getElementById("inputDiv").innerHTML = `Age = ${age} <br> Weight = ${weight} <br> BMI = Age + Weight`;
        document.getElementById("outputDiv").innerHTML = "<span class = 'text-secondary fw-bold'>You are a Baby </span>"
    }
    else if (age <= 22 && weight <= 40) {
        document.getElementById("inputDiv").innerHTML = `Age = ${age} <br> Weight = ${weight} <br> BMI = Age + Weight`;
        document.getElementById("outputDiv").innerHTML = "<span class = 'text-success fw-bold'>You are an Underweight Teen</span>"
    }
    else if (age <= 32 && weight <= 70) {
        document.getElementById("inputDiv").innerHTML = `Age = ${age} <br> Weight = ${weight} <br> BMI = Age + Weight`;
        document.getElementById("outputDiv").innerHTML = "<span class = 'text-success fw-bold'>You are a Healthy Youngman</span>"
    }
    else if (age <= 42 && weight <= 85) {
        document.getElementById("inputDiv").innerHTML = `Age = ${age} <br> Weight = ${weight} <br> BMI = Age + Weight`;
        document.getElementById("outputDiv").innerHTML = "<span class = 'text-info fw-bold'>You are a Fatty man </span>"
    }
    else if (age <= 60 && weight <= 100) {
        document.getElementById("inputDiv").innerHTML = `Age = ${age} <br> Weight = ${weight} <br> BMI = Age + Weight`;
        document.getElementById("outputDiv").innerHTML = "<span class = 'text-warning fw-bold'>You are an Overweight Oldman</span>"
    }
    else {
        document.getElementById("inputDiv").innerHTML = `Age = ${age} <br> Weight = ${weight} <br> BMI = Age + Weight`;
        document.getElementById("outputDiv").innerHTML = "<span class = 'text-danger fw-bold'>You are an Overweight Senior Citizen</span>"
    }
}

// if statement nested 
document.getElementById("ifNestedBtn").onclick = function () {
    document.getElementById("inputDiv").innerHTML = " ";
    let userName = prompt("Please Enter User Name")
    if (userName === "admin") {
        let password = prompt("Please Enter Password")
        if (password == 123) {
            document.getElementById("outputDiv").innerHTML = "<span class ='text-success fw-bold text-capitalize'>you are successfully logged in</span>"
        }
        else {
            document.getElementById("outputDiv").innerHTML = `<span class='text-danger fw-bold'>${password}</span> is incorrect password. <br> correct password is <span class='text-success'>123</span>`
        }
    }
    else {
        document.getElementById("outputDiv").innerHTML = `<span class='text-danger fw-bold'>${userName} </span> is incorrect user name. <br> correct user name is <span class='text-success'> "admin"</span>`
    }
}

// login 
document.getElementById("loginBtn").onclick = function () {
    document.getElementById("inputDiv").innerHTML = " ";
    let userName = prompt("Please Enter User Name")
    let passWord = +prompt("Please Enter Password")
    if (userName === "admin" && passWord === 123) {
        document.getElementById("outputDiv").innerHTML = `<span class='text-success fw-bold'>${userName}</span>`
        document.getElementById("outputDiv").innerHTML = `<span class='text-success text-capitalize fw-bold'>you are successfully logged in</span>`
    }
    else {
        document.getElementById("outputDiv").innerHTML = "Try using username = admin <br> password = 123"
    }

}