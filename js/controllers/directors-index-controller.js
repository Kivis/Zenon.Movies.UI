angular.module('myApp')
	.controller('DirectorsIndexController', function($http,$scope, directorsDataService){

		directorsDataService.getAllDirectors().success(function (data) {$scope.directors = data;});

		$scope.getDirectorById = function(director) {directorsDataService.getDirectorById(director)
				.success(function (response) { $scope.specificDirector = response; });
		};

		$scope.insertDirector = function(director) {directorsDataService.insertDirector(director)};

		$scope.deleteDirector = function(director) {directorsDataService.deleteDirector(director)
			.then(function(){
				directorsDataService.getAllDirectors().success(function (data) {$scope.directors = data;});
			});
		};

	});