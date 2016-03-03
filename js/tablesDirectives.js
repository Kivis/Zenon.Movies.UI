var app = angular.module('tablesDirectives', []);

app.directive('sideBar', function(){
	return {
		restrict: 'E',
		templateUrl: './side-bar.html'
	};
});

app.directive('genresTables', function(){
	return {
		restrict: 'E',
		templateUrl: './DataTables/genres-tables.html'
		//controller: function($scope, $http){
		//	this.getGenres = function(){
		//		$http.get('http://localhost:32520/api/genres')
		//			.success(function (response) {
		//				$scope.genres = response;
		//			});
		//	};
		//	this.getGenreById = function(){
		//		$http.get('http://localhost:32520/api/genres/'+$scope.search)
		//			.success(function (response) {
		//				$scope.specificGenre = response;
		//			});
		//	};
		//	this.insertGenre = function(){
		//		var data = {'Name': $scope.name};
		//		$http.post("http://localhost:32520/api/genres/", data);
		//	};
		//	},
		//	controllerAs: 'genresCtrl'
	};
});
app.directive('languagesTables', function(){
	return {
		restrict: 'E',
		templateUrl: './DataTables/languages-tables.html'
	};
});
app.directive('directorsTables', function(){
	return {
		restrict: 'E',
		templateUrl: './DataTables/directors-tables.html'
	};
});
app.directive('moviesTables', function(){
	return {
		restrict: 'E',
		templateUrl: './DataTables/movies-tables.html'
	};
});
app.directive('genresSearchTables', function(){
	return {
		restrict: 'E',
		templateUrl: './DataTables/genres-searchTables.html'
	};
});
app.directive('languagesSearchTables', function(){
	return {
		restrict: 'E',
		templateUrl: './DataTables/languages-searchTables.html'
	};
});
app.directive('directorsSearchTables', function(){
	return {
		restrict: 'E',
		templateUrl: './DataTables/directors-searchTables.html'
	};
});
app.directive('moviesSearchTables', function(){
	return {
		restrict: 'E',
		templateUrl: './DataTables/movies-searchTables.html'
	};
});