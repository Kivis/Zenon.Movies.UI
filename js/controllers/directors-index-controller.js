angular.module('myApp')
	.controller('DirectorsIndexController', function($http,$scope, directorsDataService){

		directorsDataService.getAllDirectors().success(function (data) {$scope.directors = data;});

		$scope.insertDirector = function(director) {directorsDataService.insertDirector(director)};

	});