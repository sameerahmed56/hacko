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
aap.controller("thirdController", function ($scope, $http) {
    console.log('SVD')
    $scope.username = "";
    $scope.pswrd = "";


    $scope.mLogin = function (username, pswrd) {

        var data = {
            password: pswrd,
            username: username


        }
        console.log(data);
        // var patient_appoint = localStorage.getItem('api')
        // url_patient_appoint = patient_appoint + 'patient/register/'
        // $http.post(url_patient_appoint, JSON.stringify(data))
        $http.post("http://82b274a10bfe.ngrok.io/login/manager/", JSON.stringify(data))
            .then(function (response) {
                console.log(response);
                console.log(response.data);
                alert('successfully Registered')
                // window.location.href = "/index.html";

            })
    }

})