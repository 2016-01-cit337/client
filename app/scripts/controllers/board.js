'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:BoardCtrl
 * @description
 * # BoardCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('BoardCtrl', function ($scope, $http, $routeParams, $location) {

    $scope.getBoard = function () {
      $http.get('api/boards/' + $routeParams.boardId, null)
        .success(function (data, status) {
          if(status === 200){
            $scope.board = data;
          }
        }).error(function () {
          console.log('Error requesting board');
      });
    };

    $scope.createPost = function(){
      $http.post('api/boards/' + $routeParams.boardId + '/post', $scope.post)
        .success(function(){
          $scope.err = false;
          $location.reload();
        })
        .error(function(data, status){
          if(status === 400) {
            $scope.err = data;
            console.log($scope.err);
          }
        });
    };

    $scope.getBoard();
  });
