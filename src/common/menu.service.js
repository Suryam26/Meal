(function() {
'use strict';

angular.module('common')
.service('MenuService', MenuService);

MenuService.$inject = ['$http', 'BaseApi'];
function MenuService($http, BaseApi) {
  var service = this;

  service.getCategory = function () {
      return $http({
        url: (BaseApi + '/categories.json')
      })
      .then(function (response) {
        return response.data;
      });
  };

}

}());
