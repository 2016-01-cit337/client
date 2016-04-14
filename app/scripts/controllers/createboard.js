'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:CreateBoardCtrl
 * @description
 * # CreateboardCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CreateBoardCtrl', function ($scope, $http, $cookieStore, $location) {

    $scope.createBoard = function(){
      $http.post('api/boards/create', $scope.board)
        .success(function(data, status) {
          $scope.err = false;
          if (status === 201) {
            $location.path('/boards/' + data.id);
          }
        })
        .error(function(data, status){
          if(status === 400) {
            $scope.err = data;
            console.log($scope.err);
          }
        });
    };


  });
