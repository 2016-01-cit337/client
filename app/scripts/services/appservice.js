'use strict';

angular.module('clientApp').
service('appService', function($cookieStore, $http) {

  if($cookieStore.get('user')){
    $http.defaults.headers.common['X-AUTH-TOKEN'] = $cookieStore.get('user').token;
  }

  this.appData = {activeIndex: 0, sidebarIndex: 0};

  this.appData = function() {
    return this.appData;
  };

  this.setActiveIndex = function (index) {
    this.appData.activeIndex = index;
  };

  this.getActiveIndex = function () {
    return this.appData.activeIndex;
  };

  this.setSidebarIndex = function (index) {
    this.appData.activeIndex = index;
  };

  this.getSidebarIndex = function () {
    return this.appData.activeIndex;
  };
});
