angular.module('myApp')
	.controller('LanguagesIndexController', function($http,$scope, languagesDataService){

		languagesDataService.getAllLanguages().success(function (data) {$scope.languages = data;});

		$scope.getLanguageById = function(language) {languagesDataService.getLanguageById(language)
				.success(function (response) { $scope.specificLanguage = response; });
		};

		$scope.insertLanguage = function(language) {languagesDataService.insertLanguage(language)};

		$scope.deleteLanguage = function(language) {languagesDataService.deleteLanguage(language)
				.then(function(){
					languagesDataService.getAllLanguages().success(function (data) {$scope.languages = data;});
				});
		};
		
	});