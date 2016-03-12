angular.module('myApp')
	.controller('MoviesIndexController', function($http,$scope,  moviesDataService, genresDataService, directorsDataService, languagesDataService){
		
		moviesDataService.getAllMovies().success(function (data) {$scope.movies = data;});
		genresDataService.getAllGenres().success(function (data) {$scope.genres = data;});
		directorsDataService.getAllDirectors().success(function (data) {$scope.directors = data;});
		languagesDataService.getAllLanguages().success(function (data) {$scope.languages = data;});
		
		$scope.insertMovie = function(movie) {moviesDataService.insertMovie(movie)};

	});