angular.module('myApp')
	.controller(
		'MoviesIndexController',
		 MoviesControllerFunction);

function MoviesControllerFunction(
	$http,
	$scope,
	moviesDataService,
	genresDataService,
	directorsDataService,
	languagesDataService)
{
	moviesDataService.getAllMovies()
		.success(function (data) 
		{
			$scope.movies = data;
		});

	genresDataService.getAllGenres()
		.success(function (data) 
		{
			$scope.genres = data;
		});

	directorsDataService.getAllDirectors()
		.success(function (data) 
		{
			$scope.directors = data;
		});

	languagesDataService.getAllLanguages()
		.success(function (data) 
		{
			$scope.languages = data;
		});
	
	$scope.getMovieById = function(movie) 
	{
		moviesDataService.getMovieById(movie)
			.success(function (response) 
			{ 
				$scope.specificMovie = response; 
			});
	};

	$scope.insertMovie = function(movie) 
	{
		moviesDataService.insertMovie(movie)
			.then(function()
			{
				moviesDataService.getAllMovies()
					.success(function (data) 
					{
						$scope.movies = data;
					});
			});
	};

	$scope.deleteMovie = function(movie) 
	{
		moviesDataService.deleteMovie(movie)
			.then(function()
			{
				moviesDataService.getAllMovies()
					.success(function (data) 
					{
						$scope.movies = data;
					});
			});
	};

};