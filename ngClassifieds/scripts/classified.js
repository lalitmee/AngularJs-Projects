app.controller("ClassifiedCtrl", function($scope, $http, $mdSidenav, $mdToast, $mdDialog, $firebaseObject) {
  $http.get('scripts/classifieds.json').then(function(response) {
    $scope.classifieds = response.data;
    var categories = getCategories($scope.classifieds);
    // console.log(getCategories($scope.classifieds));
  });

    var ref = firebase.database().ref();


    var contact = {
      name: "Lalit Kumar",
      phone: "9712618438",
      email: "lalitkumar@gmail.com"
    };

    $scope.openSidenav = function () {
      $mdSidenav('left').open();
    };

    $scope.closeSidenav = function () {
      $mdSidenav('left').close();
    };

    $scope.saveClassified = function( classified ) {
      if(classified){
        classified.contact = contact;
        $scope.classifieds.push(classified);
        $scope.classified = {};
        $scope.closeSidenav();
        showToast("Classified Saved!");
      }
    }

    $scope.editClassified = function (classified) {
      $scope.editing = true;
      $scope.openSidenav();
      $scope.classified = classified;
    };

    $scope.saveEdit = function () {
      $scope.editing = false;
      $scope.classified = {};
      $scope.closeSidenav();
      showToast("Edit Saved!");
    };

    $scope.deleteClassified = function (event, classified) {
      var confirm = $mdDialog.confirm()
        .title("Are you sure you want to delete" + classified.title + "?")
        .ok("yes")
        .cancel("No")
        .targetEvent(event);
      $mdDialog.show(confirm).then(function () {
        var index = $scope.classifieds.indexOf(classified);
        $scope.classifieds.splice(index, 1);
      }, function () {

      });
    }

    function showToast(message) {
      $mdToast.show(
        $mdToast.simple()
          .content(message)
          .position('top, right')
          .hideDelay('3000')
      );
    }

    function getCategories(classifieds) {

      var categories = [];

      angular.forEach(classifieds, function(item) {
        angular.forEach(item.categories, function(category) {
          categories.push(category);
        });
      });
         // console.log(categories);

      $scope.categories = _.uniq(categories)
      // console.log("Hello I am here");
    };

});
