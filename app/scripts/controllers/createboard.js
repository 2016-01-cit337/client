'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:CreateboardCtrl
 * @description
 * # CreateboardCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CreateBoardCtrl', function ($scope, $http, $cookieStore) {

    $scope.createBoard = function(){
      $http.post('api/board/create', $scope.board)
        .error(function(data, status){
          if(status === 400) {
            $scope.err = data;
            console.log($scope.err);
          }
        })
        .success(function(data){
          $scope.err = false;
          console.log(data)
          //$window.location = '#/dashboard';
          //$window.location.reload();
        });
    };


  });
