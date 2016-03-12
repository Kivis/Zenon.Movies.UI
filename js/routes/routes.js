angular.module('myApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/genres', {
                templateUrl: 'templates/pages/genres/index.html',
                controller: 'GenresIndexController'
            })
            .when('/directors', {
                templateUrl: 'templates/pages/directors/index.html',
                controller: 'DirectorsIndexController'
            })
            .when('/languages', {
                templateUrl: 'templates/pages/languages/index.html',
                controller: 'LanguagesIndexController'
            })
            .when('/movies', {
                templateUrl: 'templates/pages/movies/index.html',
                controller: 'MoviesIndexController'
            })
            .when('/', {
                templateUrl: 'templates/pages/movies/index.html',
                controller: 'MoviesIndexController'
            })
            .otherwise({redirectTo: '/'});
    });