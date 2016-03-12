angular.module("myApp")
	.factory("moviesDataService", function DataFactory($http) {
		return {
			getAllMovies: function() {
				return $http.get('http://localhost:32520/api/movies');
			},
			insertMovie: function(movie) {
				return $http.post("http://localhost:32520/api/movies/", movie);
			}
		}
	});