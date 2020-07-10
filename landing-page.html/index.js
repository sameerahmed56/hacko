var myApp = angular.module("myApp", []);
myApp.controller("covidCasesController", function ($scope, $http) {

    $scope.$watch('$viewContentLoaded', function () {
        $http({
                method: 'GET',
                url: 'https://api.covid19india.org/data.json'
            })
            .then(function (response) {
                console.log(response);
                console.log(response.data.statewise[0]);
                $scope.covidTotalData = response.data.statewise[0]
                console.log(response.data.tested[1]);
                var num = response.data.cases_time_series.length;
                console.log(response.data.cases_time_series[num - 1]);
                $scope.covidData = response.data.cases_time_series[num - 1];
                console.log(response.data.cases_time_series[num - 1].totalconfirmed);
            });

    });
});

function patientList() {
    window.location.href = 'patient-list.html';
}


// $scope.$on('$stateChangeSuccess', function () {
//     $http({
//             method: 'GET',
//             url: 'https://d378b5057702.ngrok.io/manager/pending_appointments/'
//         })
//         .then(function (response) {
//             console.log(response);
//             console.log(response.data);
//             $scope.datas = response.data;
//         });
// });

// $scope.approveappointment = function () {
//     $http({
//             method: 'GET',
//             url: 'https://d378b5057702.ngrok.io/manager/assign_department/'
//         })
//         .then(function (response) {
//             var departmentData = JSON.stringify(response.data);
//             localStorage.setItem("departmentData", departmentData);
//             window.location.href = "approve-appointment.html";
//         });
// }
// $scope.modifyappointment = function () {
//     window.location.href = "modify-appointment.html";

//     $http({
//             method: 'GET',
//             url: 'https://d378b5057702.ngrok.io/manager/assign_department/'
//         })
//         .then(function (response) {
//             console.log(response.data);
//             var departmentData2 = JSON.stringify(response.data);
//             localStorage.setItem("departmentData2", departmentData2);
//             window.location.href = "modify-appointment.html";
//         });
// }
// $scope.rejectappointment = function () {
//     var id = $scope.idData;
//     console.log(id);
//     var data = {
//         patient_id: id,
//         activity: "rejected"
//     }
//     console.log(data);
//     $http.post("https://d378b5057702.ngrok.io/manager/reject_appointment/", JSON.stringify(data))
//         .then(function (res) {
//             console.log(res);
//             console.log(res.data);
//         })
// }


// var data = {
//     id: docIdJson
// }
// console.log(data);
// $http.post("https://d378b5057702.ngrok.io/manager/see_details_patient/", JSON.stringify(data))
//     .then(function (response) {
//         console.log(response.data);
//         console.log(response.data.basic_data);
//         $scope.profile = response.data.basic_data[0];
//         $scope.appointments = response.data.all_appointments
//         // console.log($scope.profile);
//     })

$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        document.getElementById('navbar-box').style.height = '7vh';
        document.getElementById('navbar-box').style.background = '#ffffff';
        document.getElementById('navlink1').style.color = '#000000';
        // document.getElementById('navlink2').style.color = '#ffffff';
        // document.getElementById('navlink3').style.color = '#ffffff';
        // document.getElementById('navlink4').style.color = '#ffffff';
        // document.getElementById('navlink5').style.color = '#ffffff';
        // document.getElementById('navlink6').style.color = '#ffffff';
        // document.getElementsById('navlink7').style.color = '#ffffff';

    } else {
        document.getElementById('navbar-box').style.height = '11vh';
        document.getElementById('navbar-box').style.background = '#ffffff';
        document.getElementById('navlink1').style.color = '#444444';
        // document.getElementById('navlink2').style.color = '#444444';
        // document.getElementById('navlink3').style.color = '#444444';
        // document.getElementById('navlink4').style.color = '#444444';
        // document.getElementById('navlink5').style.color = '#444444';
        // document.getElementById('navlink6').style.color = '#444444';
    }
});