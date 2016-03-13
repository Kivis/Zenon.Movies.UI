angular.module('myApp')
	.controller('GenresIndexController', function($http,$scope,  genresDataService){

		genresDataService.getAllGenres().success(function (data) {$scope.genres = data;});

		$scope.insertGenre = function(genre) {genresDataService.insertGenre(genre)};

		$scope.deleteGenre = function(genre) {genresDataService.deleteGenre(genre)};
		
	});