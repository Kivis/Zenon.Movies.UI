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
			}
		}
	});