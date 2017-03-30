angular.module('app.controllers', [])
  
.controller('courseCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

  $scope.course = 
  { 
    "name": "week01",
    "audio": "mp3/german01.mp3",
    "content": "week01 content here",
    "title": "Course Week 01"
  };


}])
   
.controller('week1Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('accountCtrl', ['$scope', '$stateParams','$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$http) {

	            this.doCheckout = function(token) {
            alert("Got Stripe token: " + token.id);
                // $http.post({
                //        "stripeToken" :token.id
                // },function(error,response){
                //     alert(response);
                // });
                // $http.post('http://localhost:1337/payment/charge', 
                // 	{"stripeToken" :token.id}
                // 	).then(function(response){
                //     alert(response);
                // }, function(error){
                //     alert(error);
                // });

                	    $http({
					        url: 'http://localhost:1337/payment/charge',
					        method: "POST",
					        data: {"stripeToken" :token.id},
					        headers: {'Content-Type': 'application/json' }
					    })
					    .then(function(response) {
					    	                    alert(response);
					            // success
					    }, 
					    function(response) { // optional
					            // failed
					                                alert(response);
					    });

          };

          // $scope.doCheckout = function(token) {
          //   alert("Got Stripe token: " + token.id);

          //       $http.post('http://localhost:1337/payment/charge', 
          //       	{"stripeToken" :token.id}
          //       	).then(function(response){
          //           alert(response);
          //       }, function(error){
          //           alert(error);
          //       });
          // };


}])
      
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 