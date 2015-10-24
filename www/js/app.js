// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.controller('ListCtrl', function ($scope, $ionicListDelegate, $cordovaDialogs, items) {
  $scope.items = items;

  

});

// $scope.purchaseItem = function(item) {
//   var 
//   $scope.item['status'] =
// }
// code to add an item to the list
$scope.addItem = function() {
  var name = prompt('What do you need to buy!');
  if (num) {
    $scope.items.push ({name: 'name'});
  }
}

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});