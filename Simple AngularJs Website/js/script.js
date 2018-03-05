

  var app = angular.module('computer', ["ui.router"]);

    app.config(function($stateProvider, $urlRouterProvider){

      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/main");

      $stateProvider
        .state('main', {
            url: "/main",
            templateUrl: "templates/main.html",
            controller: 'mainCtrl'
        })
        .state('about', {
              url: "/about",
              templateUrl: "templates/about.html",
              controller: "aboutCtrl"
          })

        .state('services', {
            url: "/services",
            templateUrl: "templates/services.html",
            controller: 'servicesCtrl'
        })
        .state('contact', {
              url: "/contact",
              templateUrl: "templates/contact.html",
              controller: "contactCtrl"
          })
    });
