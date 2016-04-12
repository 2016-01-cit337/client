'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:BoardsCtrl
 * @description
 * # BoardsCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('BoardsCtrl', function ($scope, $http) {

    $scope.getBoards = function () {
      $http.get('api/boards', null)
        .success(function (data, status) {
          if(status == 200){
            $scope.boards = data;
          }
        }).error(function (data, status) {
          console.log("Error requesting boards");
      });
    };



    $scope.getBoards();
  });
