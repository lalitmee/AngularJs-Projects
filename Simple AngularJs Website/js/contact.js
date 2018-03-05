

  app.controller('contactCtrl', ['$scope', '$http',
    function($scope, $http) {
      $http.get('json/contact.json').then(function(response) {
        // console.log(response);
        $scope.contactData = response.data;
      })
    }
  ]);
