'use strict';

var furdzikApp = angular.module('furdzikApp', [
    'furdzikApp.directives',
    'ngRoute'
]);

furdzikApp.config(['$interpolateProvider', '$routeProvider', function ($interpolateProvider, $routeProvider) {

    $interpolateProvider.startSymbol('[[').endSymbol(']]');

    $routeProvider.when('/', {
        templateUrl:    'pages/home.html'
    });

    // pages
    $routeProvider.when('/pages/:widgetName', {
        templateUrl:    'pages/components/_pages.html',
        controller:     'pagesCtrl'
    });

    // 404
    $routeProvider.when('/404', {
        templateUrl:    'pages/components/404.html'
    });
    $routeProvider.otherwise({
        redirectTo:     '/404'
    });

}]);

