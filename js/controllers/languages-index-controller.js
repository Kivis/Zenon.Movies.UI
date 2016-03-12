angular.module('myApp')
	.controller('LanguagesIndexController', function($http,$scope, languagesDataService){

		languagesDataService.getAllLanguages().success(function (data) {$scope.languages = data;});

		$scope.insertLanguage = function(language) {languagesDataService.insertLanguage(language)};
		
	});