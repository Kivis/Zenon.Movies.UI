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
		$scope.insertGenre = function(genre) {Data.insertGenre(genre)};
		$scope.insertMovie = function(movie) {Data.insertMovie(movie)};
		$scope.insertDirector = function(director) {Data.insertDirector(director)};
		$scope.insertLanguage = function(language) {Data.insertLanguage(language)};
	});