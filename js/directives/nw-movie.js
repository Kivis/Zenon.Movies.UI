angular.module("myApp")
	.directive("nwMovie", function(){
		return {
			restrict: "E",
			templateUrl: './templates/directives/nw-movie.html'
		};
});