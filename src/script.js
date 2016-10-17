/**
 * You must include the dependency on 'ngMaterial' 
 */
/* global angular */
angular.module('BlankApp', ['ngMaterial'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('teal')
    .accentPalette('purple', { default: '700' });
})
.controller('AppCtrl',['$scope','$mdSidenav',function($scope, $mdSidenav) {
  $scope.toggleNav = function() { $mdSidenav('left').toggle(); };


  $scope.lineup = [
    {
      numberOfPeople: 2,
      partyName: 'smith'
    },
    {
      numberOfPeople: 2,
      partyName: 'jones',
    }
  ];
  
  $scope.tables = [1,2,3,4,5,6];
  
  $scope.menu = [
    {
      menuId: 'pancake',
      description: 'Stack of Pancakes',
      stock: 50,
      price: 1.99
    },
    {
      menuId: 'fruitbowl',
      description: 'Bowl of fresh fruit',
      stock: 10,
      price: 3.50
    },
    {
      menuId: 'eggsbenny',
      description: 'Eggs Benedict',
      stock: 50,
      price: 4.95
    },
    {
      menuId: 'hashbrowns',
      description: 'Crispy Golden Hashbrowns',
      stock: 10,
      price: 2.5
    }
  ];
}]);
