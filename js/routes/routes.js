angular.module('myApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/genres', {
                templateUrl: 'templates/pages/genres/genres-controller.html',
                controller: 'GenresIndexController'
            })
            .when('/directors', {
                templateUrl: 'templates/pages/directors/directors-controller.html',
                controller: 'DirectorsController'
            })
            .when('/languages', {
                templateUrl: 'templates/pages/languages/languages-controller.html',
                controller: 'LanguagesIndexController'
            })
            .when('/movies', {
                templateUrl: 'templates/pages/movies/movies-controller.html',
                controller: 'MoviesIndexController'
            })
            .when('/', {
                templateUrl: 'templates/pages/movies/movies-controller.html',
                controller: 'MoviesIndexController'
            })
            .otherwise({redirectTo: '/'});
    });