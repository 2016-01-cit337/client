'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('RegisterCtrl', function ($scope, $http, $window) {

    $scope.register = function(){
      console.log($scope.user);
      $scope.registerForm.$setPristine(true);
      $http.post('api/register', $scope.user)
        .error(function(data, status){
          if(status === 400) {
            $scope.err = data;
            console.log($scope.err);
          }
        })
        .success(function(){
          $window.location = '#/dashboard';
          $window.location.reload();
        });
    };
  });
