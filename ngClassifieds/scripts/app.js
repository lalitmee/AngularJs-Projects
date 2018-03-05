var app = angular.module("ngClassifieds", ["ngMaterial", "firebase"]);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
  .primaryPalette('teal')
  .accentPalette('orange')
});

app.directive("helloWorld", function () {
  return {
    template: "<h1>{{ msg }}</h1>"
  };
});
