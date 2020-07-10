var aap = angular
    .module("myApp3",[]);
    aap.controller("myCtrl",function($scope, $http){
        $http.get('http://5e369ca11455.ngrok.io/appointment/receptionpending/')
            .then(function(response){
                $scope.employees = response.data;
                console.log($scope.employees)
                console.log($scope.employees)
            })
    }); 
    aap.controller("newsController", function ($scope, $http) {
        // $scope.shortColumn = 'id';
        // var user_api = localStorage.getItem('api')
        // url_doc_approveed_list = user_api + 'reception/rejecteddoctorlist/'
        $http.get('http://2abbdcb55866.ngrok.io/news/show/')
            .then(function (response) {
                $scope.employees = response.data;
                console.log($scope.employees)
            })
    });
    aap.controller("askController", function ($scope, $http) {
        console.log('SVD')
        $scope.queBody = "";
        $scope.quetitle = "";
        $scope.queUrl = "";

    
        $scope.queAsk = function (queNam, queBody, quetitle, queUrl) {
           
                var data = {
                    name: queNam,
                    body: queBody,
                    title: quetitle,
                    url: queUrl

                    
                }
                console.log(data)
                var a = onAskSubmit();
        if( a == true){
                // console.log(data);
                // var patient_appoint = localStorage.getItem('api')
                // url_patient_appoint = patient_appoint + 'patient/register/'
                // $http.post(url_patient_appoint, JSON.stringify(data))
                $http.post("http://2abbdcb55866.ngrok.io/stranger/ask_query/", JSON.stringify(data))
                    .then(function (response) {
                        console.log(response);
                        console.log(response.data);
                        alert('successfully Registered')
                        // window.location.href = "/index.html";

                    })
                }
                else{
                    alert('Fill all fields')
                }
            }
    
        });
     
    // -----------------ask-validation-------------------------------
    function askNam() {
        var name = document.getElementById('askNam').value;
        // const namValue = name.trim();
        var alphabet = /^[A-Za-z0-9-@]+$/;
        if (name.match(alphabet)) {
            document.getElementById('askNamMsg').innerHTML = "";
            return true;
        } else {
            document.getElementById('askNamMsg').innerHTML = "Enter Valid Name";
        }
    }
    function askTitle() {
        var name = document.getElementById('askTitle').value;
        // const namValue = name.trim();
        var alphabet = /^[A-Za-z0-9]+$/;
        if (name.match(alphabet)) {
            document.getElementById('askTitleMsg').innerHTML = "";
            return true;
        } else {
            document.getElementById('askTitleMsg').innerHTML = "Enter Valid Title";
        }
    }
    function askBody() {
        var name = document.getElementById('askBody').value;
        // const namValue = name.trim();
        var alphabet = /^[A-Za-z0-9-@]+$/;
        if (name.match(alphabet)) {
            document.getElementById('askBodyMsg').innerHTML = "";
            return true;
        } else {
            document.getElementById('askBodyMsg').innerHTML = "Enter Valid Body Input";
        }
    }
    function onAskSubmit(){
        if((askNam() == true) && (askBody() == true) && (askTitle() == true)){
            return true;
        }
    else{
        return false;
    }
    }