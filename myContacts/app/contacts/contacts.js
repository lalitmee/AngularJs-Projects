'use strict';

angular.module('myContacts.contacts', ['ngRoute', 'firebase'])

.config(['$routeProvider', function ($routeProvider, $firebase) {
  $routeProvider.when('/contacts',{
    templateUrl: 'contacts/contacts.html',
    controller: 'ContactsCtrl'
  })
}])

.controller('ContactsCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {

  var rootRef = firebase.database().ref();


  $scope.contacts = $firebaseArray(rootRef);
  // console.log($scope.contacts);
  // $scope.addFormShow = false;
  $scope.showAddForm = function(){
    $scope.addFormShow = true;
  };

  $scope.hide = function() {
    $scope.addFormShow = false;
  };

  $scope.addFormSubmit = function() {
    console.log("Adding Contact");

    if($scope.name){ var name = $scope.name } else {var name = null}
    if($scope.email){ var email = $scope.email } else {var email = null}
    if($scope.company){ var company = $scope.company } else {var company = null}
    if($scope.work_phone){ var work_phone = $scope.work_phone } else {var work_phone = null}
    if($scope.mobile_phone){ var mobile_phone = $scope.mobile_phone } else {var mobile_phone = null}
    if($scope.home_phone){ var home_phone = $scope.home_phone } else {var home_phone = null}
    if($scope.street_address){ var street_address = $scope.street_address } else {var street_address = null}
    if($scope.city){ var city = $scope.city } else {var city = null}

    $scope.contacts.$add({
      name: name,
      email: email,
      company: company,
      phones: [
        {
          work: work_phone,
          mobile: mobile_phone,
          home: home_phone
        }
      ],
      address: [
        {
          street_address: street_address,
          city: city,
          state: state,
          pin: pin
        }
      ]
    }).then(function(rootRef) {
      var id = rootRef.key();
      console.log("Added contact with id"+id);

      clearFields();
      $scope.addFormShow = false;
      $scope.msg = "Contact Added";
    });
  }

  function clearFields() {
    console.log("clearing all fields");
    $scope.name = "";
    $scope.email = "";
    $scope.company = "";
    $scope.work_phone = "";
    $scope.mobile_phone = "";
    $scope.home_phone = "";
    $scope.street_address = "";
    $scope.city = "";
    $scope.state = "";
    $scope.pin = "";
  }

}]);
