var myApp = angular.module("myApp", []);

function goToList() {
    window.location.href = "patient-list.html"
}
myApp.controller("patientListDisplayController", function ($scope, $http) {
    $scope.$watch('$viewContentLoaded', function () {
        var patIdJson = localStorage.getItem('manPatientId');
        var data = {
            user_id: patIdJson,

        }
        console.log(data);
        $http.post("http://82b274a10bfe.ngrok.io/log/details/", JSON.stringify(data))
            .then(function (response) {
                console.log(response);
                $scope.datas = response.data;
            })

    });



});