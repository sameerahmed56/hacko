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
aap.controller("secondController", function ($scope, $http) {
    console.log('SVD')
    $scope.username = "";
    $scope.pswrd = "";


    $scope.pLogin = function (username, pswrd) {

        var data = {
            password: pswrd,
            username: username


        }
        console.log(data);
        // var patient_appoint = localStorage.getItem('api')
        // url_patient_appoint = patient_appoint + 'patient/register/'
        // $http.post(url_patient_appoint, JSON.stringify(data))
        $http.post("http://82b274a10bfe.ngrok.io/login/user/", JSON.stringify(data))
            .then(function (response) {
                console.log(response);
                console.log(response.data);
                var x = JSON.stringify(response.data);
                localStorage.setItem("patientId", x);
                window.location.href = "/landing-page.html/patient-dashboard.html";
            })
    }

})