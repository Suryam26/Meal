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

  service.getMenuItems = function (category) {
      var config = {};
      if (category) {
        config.params = {'category': category};
      }

      return $http.get(BaseApi + '/menu_items.json', config)
      .then(function (response) {
        return response.data;
      });
  };

}

}());
