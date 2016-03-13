angular.module("myApp")
	.factory("languagesDataService", function DataFactory($http) {
		return {
			getAllLanguages: function() {
				return $http.get('http://localhost:32520/api/languages');
			},
			insertLanguage: function(language) {
				return $http.post("http://localhost:32520/api/languages/", language);
			},
			deleteLanguage: function(languageid) {
				return $http.delete("http://localhost:32520/api/languages/" + languageid);
			},
			getLanguageById: function(languageid) {
			return $http.get("http://localhost:32520/api/languages/" + languageid);
			}
		}
	});