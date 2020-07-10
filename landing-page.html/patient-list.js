var myApp = angular.module("myApp", []);

function patientDetail(value) {
    localStorage.setItem("manPatientId", value);
    console.log(value);
}

function goHome() {
    window.location.href = 'index.html'
}
myApp.controller("patientListDisplayController", function ($scope, $http) {
    $scope.$watch('$viewContentLoaded', function () {
        $http({
                method: 'GET',
                url: 'http://82b274a10bfe.ngrok.io/user/list/'
            })
            .then(function (response) {
                console.log(response);
                console.log(response.data);
                $scope.datas = response.data;
            });
    });
    $scope.sendPatiendId = function () {
        window.location.href = "patient-log.html";
    }


});