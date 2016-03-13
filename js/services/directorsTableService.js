angular.module("myApp")
	.factory("directorsDataService", function DataFactory($http) {
		return {
			getAllDirectors: function() {
				return $http.get('http://localhost:32520/api/directors');
			},
			insertDirector: function(director) {
				return $http.post("http://localhost:32520/api/directors/", director);
			},
			deleteDirector: function(directorid) {
				return $http.delete("http://localhost:32520/api/directors/" + directorid);
			},
			getDirectorById: function(directorid) {
				return $http.get("http://localhost:32520/api/directors/" + directorid);
			}
		}
	});