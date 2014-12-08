var MyApp = angular.module('myApp', []);
MyApp.controller('MyController', ['$scope', '$location', 'UserService', function($scope, $location, UserService){
		$scope.service = function(){ 
			console.log(UserService.getUser());
			UserService.getUser()
				.then(function(data){
					console.log(data);
				}, function(error){
					console.log(error);
				})
		}
			
}]);

MyApp.factory('UserService',  ['$http','$q', function($http, $q){
	
	return {
		getUser: function(){
			return $http.get('http://localhost/AngularAuth/api/Login/')
				.then(function(response){					
					if (typeof response.data === Object) {
							return response.data;
					} else {
						return $q.reject(response.data);
					}
					
					return response.data;
				}, function(response){
					return $q.reject(response.data);
				});	
		}

	}


}]);