'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:SidebarCtrl
 * @description
 * # SidebarCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('SidebarCtrl', function ($scope, $cookieStore, appService) {
    $scope.user = $cookieStore.get('user');

    $scope.links= [
      {name: 'Boards', url:'#/boards', cond: true},
      {name: 'Upcoming Events', url:'#/', cond: true},
      {name: 'Current Events', url:'#/', cond: true}
    ];

    $scope.selected = appService.getActiveIndex();
    $scope.select = function (index) {
      appService.setActiveIndex(index);
    };
  });
