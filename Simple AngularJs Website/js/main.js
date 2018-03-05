

  app.controller('mainCtrl', ['$scope', '$http',
    function($scope, $http) {
      $http.get('json/main.json').then(function(response) {
        console.log(response);
        $scope.mainData = response.data;
      })
    }
  ]);
