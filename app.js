(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;
        toBuy.items = ShoppingListCheckOffService.getToBuyItems();

        toBuy.buyItem = function (index) {
            ShoppingListCheckOffService.buyItem(index);
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;
        bought.items = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService() {
        var service = this;
        
        var toBuyItems = [
            { name: "🍪 Cookies", quantity: 10 },
            { name: "🥛 Milk", quantity: 2 },
            { name: "🍞 Bread", quantity: 1 },
            { name: "🧀 Cheese", quantity: 5 },
            { name: "🍎 Apples", quantity: 6 }
        ];
        
        var boughtItems = [];

        service.buyItem = function (index) {
            var item = toBuyItems.splice(index, 1)[0];
            boughtItems.push(item);
        };

        service.getToBuyItems = function () {
            return toBuyItems;
        };

        service.getBoughtItems = function () {
            return boughtItems;
        };
    }
})();