$(function () {
  $(".navbar-toggler").blur(function(event) {
      $("#navbarSupportedContent").collapse('hide');
  });
});

(function() {
'use strict';

angular.module('restaurant', ['public'])
.config(config);

config.$inject = ['$urlRouterProvider'];
function config($urlRouterProvider) {

  $urlRouterProvider.otherwise('/');
}

}());
