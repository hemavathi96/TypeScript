"use strict";
exports.__esModule = true;
/******************************************************************************
 *  Execution       : 1.default node          : cmd> node inventoryManagment.ts
 *  @purpose         :To create inventory object from JSON and to calculate the value for every inventory.
 *  @description    : To create a JSON file having Inventory Details fo Stock
 *                     with properties stockname, shares, price.
    @file           : inventoryManagment.ts
 *  @overview       : To calculate the total cost of each object in inventory for given quantity.
 *  @author         : hemavathi B.V <<hemavathibv16@gmail.com>>
 *  @version        : 1.0
 *  @since          : 09 march 2019
 ***************************************************************************/
var inventoryManagObj_1 = require("./inventoryManagObj");
var read = require('readline-sync');
var fileRead = require('fs');
var data = fileRead.readFileSync('inventoryManagment.json', 'utf8');
var inventory = /** @class */ (function () {
    function inventory() {
    }
    inventory.prototype.inventoryManageshares = function () {
        try {
            var data1 = JSON.parse(data);
            var object = new inventoryManagObj_1.inventoryManage;
            /**
             * While loop to loop over the menu to choose by user.
             */
            here: while (ch != 6) {
                console.log("Press 1 to add :");
                console.log("Press 2 to remove :");
                console.log("Press 3 to edit :");
                console.log("Press 4 to print:");
                console.log("Press 5 to calculateValue :");
                console.log("Press 6 to exit :");
                var ch = read.questionInt("Enter the number :");
                /**
                 * Switch case to choose one method depending on the user input.
                 */
                switch (ch) {
                    case 1:
                        object.add(data1);
                        break;
                    case 2:
                        object.remove(data1);
                        break;
                    case 3:
                        object.edit(data1);
                        break;
                    case 4:
                        object.print(data1);
                        break;
                    case 5:
                        object.calculateValue(data1);
                        break;
                    case 6:
                        break;
                    default:
                        console.log("Please enter the correct number ");
                        break here;
                }
            }
        }
        catch (err) {
            console.log(err.message);
        }
    };
    return inventory;
}());
var invt = new inventory;
invt.inventoryManageshares();
