angular.module('myApp')
	.controller('LibraryInsertController', function($http,$scope){
		$scope.insertData = function(genre) {
		$http.post("http://localhost:32520/api/genres/", data: genre);
		}
	});