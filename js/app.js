var app = angular.module('myApp', ['tablesDirectives']);

app.controller('library', function($scope, $http)
{
		$http.get('http://localhost:32520/api/movies')
			.success(function (response) {
				$scope.movies = response;
			});
		
        $http.get('http://localhost:32520/api/genres')
			.success(function (response) {
				$scope.genres = response;
		
			});
		
		$http.get('http://localhost:32520/api/directors')
		.success(function (response) {
			$scope.directors = response;
			
		});
	
		$http.get('http://localhost:32520/api/languages')
		.success(function (response) {
			$scope.languages = response;
			
		});
	
		function insertGenreInner() {
			var data = {'Name': $scope.name};
			$http.post("http://localhost:32520/api/genres/", data);
		};
		$scope.insertGenre = insertGenreInner;
		
		function insertDirectorInner() {
			$http.post("http://localhost:32520/api/directors/", {'FirstName': $scope.FirstName , 'LastName': $scope.LastName});

		};
		$scope.insertDirector = insertDirectorInner;
		
		function insertLanguageInner() {
			$http.post("http://localhost:32520/api/languages/", {'Name': $scope.name});

		};
		$scope.insertLanguage = insertLanguageInner;
		
		function getDataInner(){
			$http.get('http://localhost:32520/api/movies/'+$scope.search)
				.success(function (response) {
					$scope.specificMovie = response;
				});
				
			$http.get('http://localhost:32520/api/genres/'+$scope.search)
				.success(function (response) {
					$scope.specificGenre = response;
				});
				
			$http.get('http://localhost:32520/api/directors/'+$scope.search)
				.success(function (response) {
					$scope.specificDirector = response;
				});
				
			$http.get('http://localhost:32520/api/languages/'+$scope.search)
				.success(function (response) {
					$scope.specificLanguage = response;
				});
		};
	
		$scope.getData = getDataInner;

});