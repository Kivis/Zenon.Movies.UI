angular.module("myApp")
	.factory("genresDataService", function DataFactory($http) {
		return {
			getAllGenres: function() {
				return $http.get('http://localhost:32520/api/genres');
			},
			insertGenre: function(genre) {
				return $http.post("http://localhost:32520/api/genres/", genre);
			},
			deleteGenre: function(genreid) {
				return $http.delete("http://localhost:32520/api/genres/", genre);
			}
		}
	});