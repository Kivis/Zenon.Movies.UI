angular.module('myApp')
	.controller('LibraryIndexController', function($http,$scope, Data){
		Data.getAllMovies()
			.success(function (data) {
				$scope.movies = data;
			});
		Data.getAllGenres()
			.success(function (data) {
				$scope.genres = data;
			});
		Data.getAllDirectors()
		.success(function (data) {
			$scope.directors = data;
			
		});
		Data.getAllLanguages()
		.success(function (data) {
			$scope.languages = data;
			
		});
	});