angular.module("myApp")
	.factory("Data", function DataFactory($http) {
		return {
			getAllMovies: function() {
				return $http.get('http://localhost:32520/api/movies');
			},
			getAllGenres: function() {
				return $http.get('http://localhost:32520/api/genres');
			},
			getAllDirectors: function() {
				return $http.get('http://localhost:32520/api/directors');
			},
			getAllLanguages: function() {
				return $http.get('http://localhost:32520/api/languages');
			},

			insertGenre: function(genre) {
				return $http.post("http://localhost:32520/api/genres/", genre);
			},
			insertMovie: function(movie) {
				return $http.post("http://localhost:32520/api/movies/", movie);
			},
			insertDirector: function(director) {
				return $http.post("http://localhost:32520/api/directors/", director);
			},
			insertLanguage: function(language) {
				return $http.post("http://localhost:32520/api/languages/", language);
			},
		}
	});