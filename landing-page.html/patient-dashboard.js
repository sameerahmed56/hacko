var doctorJson = localStorage.getItem("patientId");
var myApp = angular.module("myApp", ['ui.router']);
myApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('dashboardmessage', {
            // url: '/dashboard/:e/:f',
            url: '/',
            templateUrl: "patient-pages/dashboard.html",
            controller: 'thirdController'
        })
        .state('profilemessage', {
            url: '/profile/:a/:b',
            templateUrl: 'patient-pages/log.html',
            controller: 'firstController'

        })
        .state('reviewmessage', {
            url: '/review/:c/:d',
            templateUrl: 'review.html',
            controller: 'secondController'

        })
        .state('topprojectsmessage', {
            url: '/topprojects/:g/:h',
            templateUrl: 'topprojects.html',
            controller: 'fourthController'

        })
    // .state('root', {
    //     url: '/',
    //     template: "YOU ARE AT ROOT"
    // })

    $urlRouterProvider.otherwise('/');

});

myApp.controller('firstController', function ($scope, $stateParams) {
    $scope.a = $stateParams.a,
        $scope.b = $stateParams.b
})

myApp.controller('secondController', function ($scope, $stateParams) {
    $scope.c = $stateParams.c,
        $scope.d = $stateParams.d,
        $scope.rate = '';

})
myApp.controller('thirdController', function ($scope, $stateParams) {
    $scope.e = $stateParams.e,
        $scope.f = $stateParams.f
})
myApp.controller('fourthController', function ($scope, $stateParams) {
    $scope.g = $stateParams.g,
        $scope.h = $stateParams.h
})



myApp.controller('docDisplayController', function ($scope, $http) {
    $scope.$on('$stateChangeSuccess', function () {
        var data = {
            id: doctorJson
        }
        console.log(data);
        $http.post("https://3815e3a0f72a.ngrok.io/user/details/", JSON.stringify(data))
            .then(function (response) {
                console.log(response.data[0]);
                // console.log(response.data.data[0]);
                $scope.data = response.data[0];
            })
    });

    // $scope.$on('$stateChangeSuccess', function () {
    //     var data = {
    //         id: doctorJson.id
    //     }
    //     console.log(data);
    //     $http.post("https://d378b5057702.ngrok.io/doctor/report_list/", JSON.stringify(data))
    //         .then(function (response) {
    //             console.log(response.data);
    //             // console.log(response.data.data[0]);
    //             $scope.data = response.data;
    //         })
    // });
})

myApp.controller('logController', function ($scope, $http) {
    var daylog = [];
    daylog[0] = "Start";
    $scope.dayno = 1;

    $scope.nextday = function (loginfo) {
        var loginput = document.getElementById('loginput').value;
        console.log(loginput);
        if (loginput != "") {
            var data = {
                user_id: doctorJson,
                body: loginput,
                day: $scope.dayno
            }
            console.log(data);
            $http.post("https://3815e3a0f72a.ngrok.io/log/create/", JSON.stringify(data))
                .then(function (response) {
                    console.log(response);
                })
            console.log(loginput);
            daylog[$scope.dayno] = loginput;
            document.getElementById('loginput').value = "";
            $scope.dayno++;
        } else {
            swal("Nothing in Log!", "Log Field Is Empty!", "error");
        }
    }

    $scope.previousday = function () {
        if ($scope.dayno > 1) {
            $scope.dayno--;
            var x = daylog[$scope.dayno];
            document.getElementById('loginput').value = x;
            console.log(x);
        } else {
            swal("Can't Go Back", "It's First Day!", "warning");

        }
    }

    $scope.skipday = function () {
        if (daylog.length > $scope.dayno) {
            document.getElementById('loginput').value = "";
            $scope.dayno++;
        } else {
            console.log(daylog.length);
            console.log($scope.dayno);
            swal("Can't Skip!", "Can't skip day without Writing Log!", "warning");
        }
    }

    $scope.submitlog = function () {
        var loginput = document.getElementById('loginput').value;
        if (loginput != "") {
            var data = {
                user_id: doctorJson,
                body: loginput,
                day: $scope.dayno
            }
            console.log(data);
            $http.post("https://3815e3a0f72a.ngrok.io/log/create/", JSON.stringify(data))
                .then(function (response) {
                    console.log(response);
                })
            console.log(loginput);
            daylog[$scope.dayno] = loginput;
            document.getElementById('loginput').value = "";
            $scope.dayno++;
        } else {
            swal("Nothing in Log!", "Log Field Is Empty!", "error");
        }
        if (daylog.length < 2) {
            swal("Empty Log!", "Daily Log Is Empty!", "error");
        } else {
            document.getElementById('outData').innerHTML = daylog;
            console.log(daylog);

        }
    }
})

// -----
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    // document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    // document.getElementById("main").style.marginLeft= "0";
}
//   ----
$(document).ready(function () {
    $(".gear-btn").click(function () {
        $(".logout-panel").fadeToggle("slow");
    });
});
// ------
function logOut() {
    window.location = "LogInPRS.html";
}
// -------