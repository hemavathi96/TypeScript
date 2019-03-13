"use strict";
exports.__esModule = true;
/**************************Inventory Management Program***********************************************
   *
   * @Purpose   : To creat a file having Inventory Details for Rice, Pulses and Wheats
   *              with properties such as name, weight, price per kg.
   * @Use Library : Java JSON Library
   * @description: Declaring the function and passing the userinput as argument.
   * @function: diplayname takes the userinput and print it with some sentence.
   * @param : object --> objects such as Rice, Wheats and Pulse which are at inventory
   *********************************************************************************************/
var read = require('readline-sync');
var file = require('fs');
var Stock = /** @class */ (function () {
    function Stock(name, share, price) {
        this.name = name;
        this.shares = share;
        this.price = price;
    }
    Stock.prototype.valueOfStock = function () {
        return this.shares * this.price;
    };
    return Stock;
}());
exports.Stock = Stock;
var inventoryManage = /** @class */ (function () {
    function inventoryManage() {
    }
    /**
     * @description:Add method to add the name,share,price to the JSON and write it to the file.
     * @param:Taking the parse object from the user data.
     *
     */
    inventoryManage.prototype.add = function (data) {
        try {
            var name = read.question("Enter the name of the stock to add :");
            var shares = read.questionInt("Enter number of shares :");
            var quantity = read.questionInt("Enter the price of the shares :");
            data.Stock.push({
                shareName: name,
                noOfshares: shares,
                price: quantity
            });
            var d = file.writeFileSync('inventoryManagment.json', JSON.stringify(data));
        }
        catch (err) {
            console.log(err.message);
        }
    };
    /**
     * @description:Remove method to remove the share from the JSON and write it to the file.
     * @param:Taking the parse object from the user data.
     *
     */
    inventoryManage.prototype.remove = function (data) {
        try {
            var name = read.question("Enter the name of the stock want to remove :");
            for (var i = 0; i < data.Stock.length; i++) {
                if (data.Stock[i].shareName == name) {
                    var index = data.Stock.indexOf(data.Stock[i]);
                    data.Stock.splice(index, 1);
                }
                var d = file.writeFileSync('inventoryManagment.json', JSON.stringify(data));
            }
        }
        catch (err) {
            console.log(err.message);
        }
    };
    /**
     *
     * @description:Print to print all the shares by looping the number of the stocks in the JSON.
     * @param:Taking the parse object from the user data.
     */
    inventoryManage.prototype.print = function (data) {
        try {
            var stock = data.Stock;
            for (var key in stock) {
                console.log(stock[key]);
            }
        }
        catch (err) {
            console.log(err.message);
        }
    };
    /**
     *
     * @description:Edit method to edit the sharename,shares,price from the JSON and write to file.
     * @param:Taking the parse object from the user data.
     */
    inventoryManage.prototype.edit = function (data) {
        try {
            var stock = data.Stock;
            var name = read.question("Enter the stock name to edit :");
            var sharess = read.question("Enter noofShares to edit : ");
            var money = read.question("Enter the shares price :");
            for (var key in stock) {
                if (stock[key].shareName == name)
                    var value = key;
                if (stock[key].noOfshares == sharess)
                    var value1 = key;
                if (stock[key].price == money)
                    var value2 = key;
            }
            var name1 = read.question("Enter the new name of the share :");
            stock[value].shareName = name1;
            var name2 = read.question("Enter the new noofShares :");
            stock[value1].noOfshares = name2;
            var name3 = read.question("Enter  the new price of the shares :");
            stock[value2].price = name3;
            var d = file.writeFileSync('inventoryManagment.json', JSON.stringify(data));
        }
        catch (err) {
            console.log(err.message);
        }
    };
    inventoryManage.prototype.calculateValue = function (data) {
        try {
            var totalValue = 0;
            var stock = data.Stock;
            for (var i in stock) {
                var hold = stock[i];
                var st = new Stock(hold.shareName, hold.noOfshares, hold.price);
                var report = st.valueOfStock();
                console.log(" Value of stock : " + hold.shareName + " : " + report + " Rs");
                totalValue = totalValue + report;
            }
            console.log("Total value of all the stocks :" + totalValue + " Rs ");
        }
        catch (err) {
            console.log(err.message);
        }
    };
    return inventoryManage;
}());
exports.inventoryManage = inventoryManage;
