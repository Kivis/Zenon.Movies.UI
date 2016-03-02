var app = angular.module('tablesDirectives', []);

app.directive('genresTables', function(){
	return {
		restrict: 'E',
		templateUrl: './DataTables/genres-tables.html'
		controller: function($scope, $http){
			this.getGenres = function(){};
			this.getGenreById = function(){};
			this.insertGenre = function(){};
		},
		controllerAs: 'genres'
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