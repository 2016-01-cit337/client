'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:CreatePostCtrl
 * @description
 * # CreatePostCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CreatePostCtrl', function ($scope, $http, $location, $routeParams) {

    $scope.err = false;

    $scope.createPost = function(){
      $http.post('api/boards/' + $routeParams.boardId + '/post', $scope.post)
        .success(function(){
          $scope.err = false;
          $location.path('/boards/' + $routeParams.boardId);
        })
        .error(function(data, status){
          if(status === 400) {
            $scope.err = data;
          }
        });
    };


  });
