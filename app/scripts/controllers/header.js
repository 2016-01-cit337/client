'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('HeaderCtrl', function ($scope, $log, $cookieStore, $location, appService, $http) {
    $scope.user = $cookieStore.get('user');

    $scope.links= [
      {name: 'Home', url:'#/', cond: true},
      {name: 'About', url:'#/about', cond: true},
      {name: 'Contact', url:'#/contact', cond: true},
      {name: 'Login', url:'#/login', cond: '!user'},
      {name: 'Register', url:'#/register', cond: '!user'}
    ];

    $scope.selected = appService.getActiveIndex();
    $scope.select = function (index) {
      appService.setActiveIndex(index);
    };

    $scope.logout = function () {
      $http.get('/api/logout', null).then(logoutSuccess, logoutSuccess);
    };

    var logoutSuccess = function () {
      $cookieStore.remove('user');
      $scope.user = null;
      $location.path('/');
      appService.setActiveIndex(0);
    };

    $scope.$on('onLogin', function() {
      $scope.user = $cookieStore.get('user');
    });
  });
