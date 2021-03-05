'use strict';

/* CONTROLLERS */
furdzikApp.controller('pagesCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {

    $scope.widgetName = $routeParams.widgetName;
    $scope.widgetUrl = "pages/" + $routeParams.widgetName + ".html"

}]);

furdzikApp.controller('tabCtrl', ['$scope', '$location', function ($scope, $location) {

    $scope.getNumberActiveTab = function (path) {
        var location;
        if (path !== undefined) {
            location = path.replace('#', '').replace('/pages/', '');
        } else {
            location = $location.path().replace('/pages/', '');
        }

        var number;
        switch (location) {
            case '/':
                number = 1;
                break;
            case 'about-me':
                number = 2;
                break;
            case 'workshop':
                number = 3;
                break;
            case 'projects':
                number = 4;
                break;
            case 'friends':
                number = 5;
                break;
            case 'contact':
                number = 6;
                break;
            default:
                number = 1;
                break;
        }
        $scope.tabNumber = number;

    };
    $scope.getNumberActiveTab();

}]);

furdzikApp.controller('menuCtrl', ['$scope', '$location', function ($scope, $location) {

    // STEPS MENU
    $scope.menu = [
        { id: 1, name: "", url: "#/" },
        { id: 2, name: "About me", url: "#/pages/about-me" },
        { id: 3, name: "Workshop", url: "#/pages/workshop" },
        { id: 4, name: "Projects", url: "#/pages/projects" },
        { id: 5, name: "Friends", url: "#/pages/friends" },
        { id: 6, name: "Contact", url: "#/pages/contact" }
    ];

    $scope.getActiveClass = function (path) {
        path = path.replace('#', '');
        return path === $location.path();
    };

}]);



