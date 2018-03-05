
  app.controller('servicesCtrl', ['$scope', '$http',
    function($scope, $http) {
      $http.get('json/services.json').then(function(response) {
        // console.log(response);
        $scope.services = response.data;
      })
    }
  ]);
