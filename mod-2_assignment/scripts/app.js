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

  toBuy.list = ShoppingListCheckOffService.getToBuyList();

  toBuy.onClick = ShoppingListCheckOffService.buy;
};


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  const alrBought = this;

  alrBought.list = ShoppingListCheckOffService.getBoughtList();
};


function ShoppingListCheckOffService() {
  const service = this;
  let toBuyList = [
    { name: "cookies", quantity: 10 },
    { name: "chips", quantity: 15 },
    { name: "donuts", quantity: 12 },
    { name: "icecream cones", quantity: 2 },
    { name: "eggs", quantity: 13 },
    { name: "jugs of milk", quantity: 4 }
  ];
  let boughtList = [];

  service.getToBuyList = function() {
    return toBuyList;
  };
  service.getBoughtList = function() {
    return boughtList;
  };

  service.buy = function(index) {
    boughtList.push(toBuyList.splice(index, 1)[0]);
  };
}


})();