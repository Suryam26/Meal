(function() {
'use strict';

angular.module('public')
.controller("MenuItemController", MenuItemController);

MenuItemController.$inject = ['menuItems', 'BaseApi']
function MenuItemController(menuItems, BaseApi) {
  var menuItemCtrl = this;

  menuItemCtrl.menuItems = menuItems;
  console.log(menuItemCtrl.menuItems);

  menuItemCtrl.link = BaseApi;
}


}());
