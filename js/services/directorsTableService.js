angular.module("myApp")
	.factory("directorsDataService", function DataFactory($http) {
		return {
			getAllDirectors: function() {
				return $http.get('http://localhost:32520/api/directors');
			},
			insertDirector: function(director) {
				return $http.post("http://localhost:32520/api/directors/", director);
			}
		}
	});