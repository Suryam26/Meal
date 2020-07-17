(function() {
'use strict';

angular.module('common', [])
.constant('BaseApi', 'https://meal-restaurant.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');

}


}());
