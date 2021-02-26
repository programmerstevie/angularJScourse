(function() {
'use strict';

angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
;


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  const toBuy = this;

  toBuy.list = ShoppingListCheckOffService.toBuyList;

  toBuy.onClick = ShoppingListCheckOffService.buy;
};


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  const alrBought = this;

  alrBought.list = ShoppingListCheckOffService.boughtList;
};


function ShoppingListCheckOffService() {
  const service = this;
  service.toBuyList = [
    { name: "cookies", quantity: 10 },
    { name: "chips", quantity: 15 },
    { name: "donuts", quantity: 12 },
    { name: "icecream cones", quantity: 2 },
    { name: "eggs", quantity: 13 },
    { name: "jugs of milk", quantity: 4 }
  ];
  service.boughtList = [];

  service.buy = function(index) {
    service.boughtList.push(service.toBuyList[index]);
    service.toBuyList.splice(index, 1);
  }
}


})();