(function() {
'use strict';

angular.module('public')
  .config(routeConfig);

routeConfig.$inject = ['$stateProvider'];
function routeConfig($stateProvider) {

  $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: 'src/public/public.html'
    })

    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })

    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        categories: ['MenuService', function (MenuService) {
          return MenuService.getCategory();
        }]
      }
    })

    .state('public.menuItems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menuItems/menu-items.html',
      controller: 'MenuItemController',
      controllerAs: 'menuItemCtrl',
      resolve: {
        menuItems: ['$stateParams', 'MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    });
}
}());
