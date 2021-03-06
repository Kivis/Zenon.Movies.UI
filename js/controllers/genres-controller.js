angular.module('myApp')
	.controller(
		'GenresIndexController', 
		 GenresControllerFunction); 

function GenresControllerFunction(
	$http,
	$scope,
	genresDataService)
{
	genresDataService.getAllGenres()
		.success(function (data) 
		{
			$scope.genres = data;
		});

	$scope.getGenreById = function(genre) 
	{
		genresDataService.getGenreById(genre)
			.success(function (response) 
			{ 
				$scope.specificGenre = response; 
			});
	};

	$scope.insertGenre = function(genre) 
	{
		genresDataService.insertGenre(genre)
			.then(function()
			{
				genresDataService.getAllGenres()
					.success(function (data) 
					{
						$scope.genres = data;
					});
			});
	};

	$scope.deleteGenre = function(genre) 
	{
		genresDataService.deleteGenre(genre)
			.then(function()
			{
				genresDataService.getAllGenres()
					.success(function (data) 
					{
						$scope.genres = data;
					});
			});
	};
};