angular.module("myApp")
	.factory("moviesDataService", function DataFactory($http) {
		return {
			getAllMovies: function() {
				return $http.get('http://localhost:32520/api/movies');
			},
			insertMovie: function(movie) {
				return $http.post("http://localhost:32520/api/movies/", movie);
			},
			deleteMovie: function(movieid) {
				return $http.delete("http://localhost:32520/api/movies/" + movieid);
			},
			getMovieById: function(movieid) {
			return $http.get("http://localhost:32520/api/movies/" + movieid);
			}
		}
	});