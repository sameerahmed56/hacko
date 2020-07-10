var aap = angular
    .module("myApp", []);
aap.controller("myCtrl", function ($scope, $http) {
    $http.get('http://82b274a10bfe.ngrok.io/appointment/receptionpending/')
        .then(function (response) {
            $scope.employees = response.data;
            console.log($scope.employees)
            console.log($scope.employees)
        })
});
aap.controller("firstController", function ($scope, $http) {
    console.log('SVD')
    $scope.name = "";
    $scope.uNam = "";
    $scope.Mail = "";
    $scope.pNum = "";
    $scope.pswrd = "";
    $scope.disease = "";
    $scope.appointDate = "";
    $scope.address = "";
    $scope.bGroup = "";
    $scope.gender = "";


    $scope.patientRegisteration = function (name, uNam, address, Mail, pNum, pswrd, disease, appointDate, gender, bGroup) {
        console.log(appointDate)
        var d = new Date(appointDate)
        var year = d.getFullYear();
        var month = d.getMonth();
        if (month < 10) {
            months = '0' + month;
        } else {
            months = month;
        }
        var date = d.getDate();
        if (date < 10) {
            dates = '0' + date;
            console.log(dates)
        } else {
            dates = date;
        }
        var dates = year + '/' + months + '/' + dates

        console.log(dates)
        var data = {
            name: name,
            username: uNam,
            email: Mail,
            phone_no: pNum,
            password: pswrd,
            disease: disease,
            dob: dates,
            address: address,
            blood_group: bGroup,
            gender: gender


        }
        var a = onSubmit();
        if (a == true) {
            console.log(data);
            // var patient_appoint = localStorage.getItem('api')
            // url_patient_appoint = patient_appoint + 'patient/register/'
            // $http.post(url_patient_appoint, JSON.stringify(data))
            $http.post("http://82b274a10bfe.ngrok.io/user/registration/", JSON.stringify(data))
                .then(function (response) {
                    console.log(response);
                    console.log(response.data);
                    alert('successfully Registered')
                    // window.location.href = "/index.html";

                })
        } else {
            alert('Fill all fields')
        }
    }

});

function firstNameRegDoc() {
    var name = document.getElementById('firstNameRegDoc').value;
    // const namValue = name.trim();
    var alphabet = /^[A-Za-z]+$/;
    if (name.match(alphabet)) {
        document.getElementById('docFnamMsg').innerHTML = "";
        $("#first_name").css("border", "1px solid green");
        return true;
    } else {
        document.getElementById('docFnamMsg').innerHTML = "Enter Valid Name";
        $("#first_name").css("border", "2px solid red");
    }
}

function userName() {
    var name = document.getElementById('userName').value;
    // const namValue = name.trim();
    var alphabet = /^[A-Za-z0-9-@]+$/;
    if (name.match(alphabet)) {
        document.getElementById('userNameMsg').innerHTML = "";
        $("#first_name").css("border", "1px solid green");
        return true;
    } else {
        document.getElementById('userNameMsg').innerHTML = "Enter Valid Name";
        $("#first_name").css("border", "2px solid red");
    }
}

function mailRegDoc() {
    var email = document.getElementById('mailregDoc').value;
    var emailValue = email.trim();
    var arr = emailValue.split("@");
    var alphabet = /^[A-Za-z0-9@|.]+$/;

    if (emailValue.match(alphabet)) {
        if (emailValue == "") {
            document.getElementById('docMailMsg').innerHTML = "Enter Valid Email";
            $("#email").css("border", "2px solid red");
        } else if ((emailValue.indexOf('@') == 0) || (emailValue.indexOf('.') == 0)) {
            document.getElementById('docMailMsg').innerHTML = "Enter Valid Email";
            $("#email").css("border", "2px solid red");
        } else if ((emailValue.charAt(0) == 9) || (emailValue.charAt(0) == 8) || (emailValue.charAt(0) == 7) || (emailValue.charAt(0) == 6) || (emailValue.charAt(0) == 5) || (emailValue.charAt(0) == 4) || (emailValue.charAt(0) == 3) || (emailValue.charAt(0) == 2) || (emailValue.charAt(0) == 1) || (emailValue.charAt(0) == 0)) {
            document.getElementById('docMailMsg').innerHTML = "Enter Valid Email";
            $("#email").css("border", "2px solid red");
        } else if (arr.length > 2) {
            document.getElementById('docMailMsg').innerHTML = "Enter Valid Email";
            $("#email").css("border", "2px solid red");
        } else if (emailValue.lastIndexOf('.') - emailValue.indexOf('@') < 5) {
            document.getElementById('docMailMsg').innerHTML = "Enter Valid Email";
            $("#email").css("border", "2px solid red");
        } else if (emailValue.lastIndexOf('.') >= (emailValue.length - 2)) {
            document.getElementById('docMailMsg').innerHTML = "Enter Valid Email";
            $("#email").css("border", "2px solid red");
        } else if ((emailValue.indexOf('@') == -1) || (emailValue.indexOf('.') == -1)) {
            document.getElementById('docMailMsg').innerHTML = "Enter Valid Email";
            $("#email").css("border", "2px solid red");
        } else {
            document.getElementById('docMailMsg').innerHTML = "";
            $("#email").css("border", "1px solid green");
            return true;
        }
    } else {
        document.getElementById('docMailMsg').innerHTML = "Enter Valid Email";
        $("#email").css("border", "2px solid red");
    }
}

function docRegMobNo() {
    var mobileNumber = document.getElementById('mobRegDoc').value;
    const mobileNumberValue = mobileNumber.trim();
    if (mobileNumberValue == "") {
        document.getElementById("docmobMsg").innerHTML = "Enter Your Mobile Number";
        $("#mobile_number").css("border", "2px solid red");
    } else if ((mobileNumberValue.charAt(0) != 9) && (mobileNumberValue.charAt(0) != 8) && (mobileNumberValue.charAt(0) != 7) && (mobileNumberValue.charAt(0) != 6)) {
        document.getElementById("docmobMsg").innerHTML = "Mobile No.start with 6,7,8,9";
        $("#mobile_number").css("border", "2px solid red");
    } else if (mobileNumberValue.length != 10) {
        document.getElementById("docmobMsg").innerHTML = "Must be of 10 digits";
        $("#mobile_number").css("border", "2px solid red");
    } else {
        document.getElementById("docmobMsg").innerHTML = "";
        $("#mobile_number").css("border", "1px solid green");
        return true;
    }
}

function pswrdRegDoc1() {
    var password = document.getElementById('pswrdRegDoc1').value;

    if (password == "") {
        document.getElementById('docpassMsg1').innerHTML = "Enter Your Password";
        $("#password").css("border", "2px solid red");
    } else if (password.length < 6) {
        $("#password").css("border", "2px solid red");
        document.getElementById('docpassMsg1').innerHTML = "Password must be of 6 digits";
    } else {
        document.getElementById('docpassMsg1').innerHTML = "";
        $("#password").css("border", "1px solid green");

        return true;
    }

}

function disease() {
    var name = document.getElementById('disease').value;
    // const namValue = name.trim();
    var alphabet = /^[A-Za-z,-]+$/;
    if (name.match(alphabet)) {
        document.getElementById('diseaseMsg').innerHTML = "";
        $("#first_name").css("border", "1px solid green");
        return true;
    } else {
        document.getElementById('diseaseMsg').innerHTML = "Enter Valid Disease";
        $("#first_name").css("border", "2px solid red");
    }
}

function address() {
    var name = document.getElementById('address').value;
    // const namValue = name.trim();
    var alphabet = /^[A-Za-z0-9-,/]+$/;
    if (name.match(alphabet)) {
        document.getElementById('addressMsg').innerHTML = "";
        $("#first_name").css("border", "1px solid green");
        return true;
    } else {
        document.getElementById('addressMsg').innerHTML = "Enter Valid address";
        $("#first_name").css("border", "2px solid red");
    }
}

function onSubmit() {
    if ((firstNameRegDoc() == true) && (userName() == true) && (mailRegDoc() == true) && (docRegMobNo() == true) && (pswrdRegDoc1() == true) && (disease() == true) && (disease() == true)) {
        return true;
    } else {
        return false;
    }
}