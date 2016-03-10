angular.module('myApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/genres', {
                templateUrl: 'templates/pages/genres/index.html',
                controller: 'LibraryIndexController'
            })
            .when('/directors', {
                templateUrl: 'templates/pages/directors/index.html',
                controller: 'LibraryIndexController'
            })
            .when('/languages', {
                templateUrl: 'templates/pages/languages/index.html',
                controller: 'LibraryIndexController'
            })
            .when('/movies', {
                templateUrl: 'templates/pages/movies/index.html',
                controller: 'LibraryIndexController'
            })
            .when('/', {
                templateUrl: 'templates/pages/movies/index.html',
                controller: 'LibraryIndexController'
            })
            .otherwise({redirectTo: '/'});
    });