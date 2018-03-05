

  app.controller('aboutCtrl', ['$scope', '$http',
    function($scope, $http) {
      $http.get('json/about.json').then(function(response) {
        // console.log(response);
        $scope.aboutData = response.data;
      })
    }
  ]);
