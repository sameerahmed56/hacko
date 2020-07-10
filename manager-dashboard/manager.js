var myApp = angular.module("myApp", ['ui.router']);
myApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('patient-rqst', {
            url: '/first',
            templateUrl: '/manager-dashboard/patient-rqst/patient-rqst.html',
            controller: 'firstController'
        })
        .state('news', {
            url: '/second',
            templateUrl: '/manager-dashboard/news/news.html',
            controller: 'secondController'
        })
        .state('queries', {
            url: '/third',
            templateUrl: '/manager-dashboard/queries/queries.html',
            controller: 'thirdController'
        })
        .state('query-reply', {
            url: '/fourth',
            templateUrl: '/manager-dashboard/queries/reply/reply.html',
            controller: 'fourthController'
        })
        .state('manager-home', {
            url: '/fifth',
            templateUrl: '/manager-dashboard/manager-home/manager-home.html',
            // controller :'fifthController'
        })
        // .state('manager-login', {
        //     url: '/sixth',
        //     templateUrl:'LOGIN/manager-login.html',
        //     controller :'sixthController'
        // })
        // .state('doctor-registration', {
        //     url: '/seventh',
        //     templateUrl:'/registration/doctor-registration.html',
        //     controller :'seventhController'
        // })
        // .state('patient-appoinment', {
        //     url: '/eight',
        //     templateUrl:'/pages/appoinment.html',
        //     controller :'eightController'
        // })

        .state('root', {
            url: '/manager-dashboard/manager-home/manager-home.html',
            templateUrl: ""
        })
    $urlRouterProvider.otherwise('/');

});
// -------------------------------------------patient-registration-----------------------------------------
myApp.controller("secondController", function ($scope, $http) {
    console.log('SVD')
    $scope.newsTitle = "";
    $scope.newsBody = "";
    $scope.newsUrl = "";


    $scope.onSend = function (newsTitle, newsBody, newsUrl) {

        var data = {
            title: newsTitle,
            body: newsBody,
            url: newsUrl

        }
        var a = onNewsSubmit();
        if (a == true) {
            console.log(data);
            // var patient_appoint = localStorage.getItem('api')
            // url_patient_appoint = patient_appoint + 'news/create/'
            // $http.post(url_patient_appoint, JSON.stringify(data))
            $http.post("http://82b274a10bfe.ngrok.io/news/create/ ", JSON.stringify(data))
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

})

function queryId(value) {
    localStorage.setItem('ID', value);
    // alert('er')
    // var lnam = localStorage.getItem('ID')
}

function SendacptId(value) {
    localStorage.setItem('acptId', value);
}

function SendrgtId(value) {
    localStorage.setItem('rgtId', value);
}
// -----------------------------------------Query-reply-----------------------------------------------------
myApp.controller("fourthController", function ($scope, $http) {
    console.log('SVD')
    $scope.pregmail = "";
    $scope.pregmob = "";
    $scope.pregpswrd = "";
    $scope.pregage = "";
    $scope.pregfnam = "";
    $scope.preglnam = "";
    $scope.preggender = "";
    $scope.pregaddress = "";


    $scope.replySend = function (replyBody, replyUrl, replyRF) {

        var data = {
            reply: replyBody,
            reply_url: replyUrl,
            // password: replyTitle,
            is_fake: replyRF,
            id: localStorage.getItem('ID')


        }
        var a = onQreplySubmit();
        if (a == true) {
            console.log(data);
            // var patient_appoint = localStorage.getItem('api')
            // url_patient_appoint = patient_appoint + 'patient/register/'
            // $http.post(url_patient_appoint, JSON.stringify(data))
            $http.post("http://82b274a10bfe.ngrok.io/stranger/reply_query/ ", JSON.stringify(data))
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

})
myApp.controller("acptController", function ($scope, $http) {


    $scope.acptRqst = function () {

        var data = {
            id: localStorage.getItem('acptId'),
            status: 'Accept'


        }
        console.log(data);
        // var patient_appoint = localStorage.getItem('api')
        // url_patient_appoint = patient_appoint + 'patient/register/'
        // $http.post(url_patient_appoint, JSON.stringify(data))
        $http.post("http://82b274a10bfe.ngrok.io/log/reply/", JSON.stringify(data))
            .then(function (response) {
                console.log(response);
                console.log(response.data);
                alert('successfully accepted')
                // window.location.href = "/index.html";

            })
    }

})
myApp.controller("rgtController", function ($scope, $http) {


    $scope.rejectRqst = function () {

        var data = {
            id: localStorage.getItem('rgtId'),
            status: 'Reject'

        }
        console.log(data);
        // var patient_appoint = localStorage.getItem('api')
        // url_patient_appoint = patient_appoint + 'patient/register/'
        // $http.post(url_patient_appoint, JSON.stringify(data))
        $http.post("http://82b274a10bfe.ngrok.io/log/reply/ ", JSON.stringify(data))
            .then(function (response) {
                console.log(response);
                console.log(response.data);
                alert('successfully rejected')
                // window.location.href = "/index.html";

            })
    }

})
// ---------------------------Patient-Rqst----------------------------------------
myApp.controller("firstController", function ($scope, $http) {
    $scope.shortColumn = 'id';
    // var user_api = localStorage.getItem('api')
    // url_doc_approveed_list = user_api + 'reception/rejecteddoctorlist/'
    $http.get('http://82b274a10bfe.ngrok.io/log/requests/')
        .then(function (response) {
            $scope.employees = response.data;
            console.log($scope.employees)
        })
});

// ---------------------------------query----------------------------
myApp.controller("thirdController", function ($scope, $http) {
    $scope.shortColumn = 'id';
    // var user_api = localStorage.getItem('api')
    // url_doc_approveed_list = user_api + 'reception/rejecteddoctorlist/'
    $http.get('http://82b274a10bfe.ngrok.io/stranger/pending_query/')
        .then(function (response) {
            $scope.employees = response.data;
            console.log($scope.employees)
        })
});


// --------------------------------validation-News--------------------------------------
function fnewsTitle() {
    var name = document.getElementById('tittle').value;
    // const namValue = name.trim();
    var alphabet = /^[A-Za-z0-9-@]+$/;
    if (name.match(alphabet)) {
        document.getElementById('fnewsTitleMsg').innerHTML = "";
        return true;
    } else {
        document.getElementById('fnewsTitleMsg').innerHTML = "Enter Valid title";
    }
}

function fnewsBody() {
    var name = document.getElementById('newsBody').value;
    // const namValue = name.trim();
    var alphabet = /^[A-Za-z0-9-@]+$/;
    if (name.match(alphabet)) {
        document.getElementById('fnewsBodyMsg').innerHTML = "";
        return true;
    } else {
        document.getElementById('fnewsBodyMsg').innerHTML = "Enter Valid Body Input";
    }
}

function newsurl() {
    var name = document.getElementById('url').value;
    // const namValue = name.trim();
    var alphabet = /^[A-Za-z0-9-@./:]+$/;
    if (name.match(alphabet)) {
        document.getElementById('newsUrlMsg').innerHTML = "";
        return true;
    } else {
        document.getElementById('newsUrlMsg').innerHTML = "Enter Valid URL";
    }
}

function onNewsSubmit() {
    if ((fnewsTitle() == true) && (fnewsBody() == true) && (newsurl() == true)) {
        return true;
    } else {
        return false;
    }
}
// ------------------------validation-Query-Reply----------------------------
function replyBodys() {
    var name = document.getElementById('replyBodys').value;
    // const namValue = name.trim();
    var alphabet = /^[A-Za-z0-9-@]+$/;
    if (name.match(alphabet)) {
        document.getElementById('replyBodyMsg').innerHTML = "";
        return true;
    } else {
        document.getElementById('replyBodyMsg').innerHTML = "Enter Valid Body input";
    }
}

function replyhttps() {
    var name = document.getElementById('replyhttp').value;
    // const namValue = name.trim();
    var alphabet = /^[A-Za-z0-9-@./:]+$/;
    if (name.match(alphabet)) {
        document.getElementById('replyhttpMsg').innerHTML = "";
        return true;
    } else {
        document.getElementById('replyhttpMsg').innerHTML = "Enter Valid URL";
    }
}

function onQreplySubmit() {
    // alert('ed')
    if ((replyBodys() == true) && (replyhttps() == true)) {
        return true;
    } else {
        return false;
    }
}