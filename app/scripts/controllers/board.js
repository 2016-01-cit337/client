'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:BoardCtrl
 * @description
 * # BoardCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('BoardCtrl', function ($scope, $http, $routeParams, $cookieStore) {

    $scope.boardId = $routeParams.boardId;
    $scope.user = $cookieStore.get('user');

    $scope.getBoard = function () {
      $http.get('api/boards/' + $scope.boardId, null)
        .success(function (data, status) {
          if(status === 200){
            $scope.board = data;
          }
        }).error(function () {
          console.log('Error requesting board');
      });
    };

    $scope.getBoard();
  });
