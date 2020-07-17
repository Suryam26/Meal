(function() {
'use strict';

angular.module('public')
.controller('MenuController', MenuController);

MenuController.inject = ['categories'];
function MenuController(categories) {
  var menuCtrl = this;

  menuCtrl.category = categories;
  console.log(menuCtrl.category);
}

}());
