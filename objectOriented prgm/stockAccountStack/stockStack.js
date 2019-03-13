"use strict";
exports.__esModule = true;
/************************************************************
 * Execution    : 1.default node               :cmd> node stockStack.ts
 *@Purpose     : To add and remove the company info from the list of company shares.
 *@description : List of CompanyShares in a Linked List and new CompanyShares can
 *                be added or removed easily.
 * @file        : stockStack.ts
 * @overview    : To add and remove the company info from the list of company shares.
 * @author      : Hemavathi B.V <hemavathibv16@gmail.com>
 * @version     : 1.0
 * @since       : 12 march 2019
 *
 * **********************************************************/
var stockStakeObj_1 = require("./stockStakeObj");
//import{companySharesStack} from "./stockAccountObj"
var file = require("fs");
var read = require("readline-sync");
var Shares = /** @class */ (function () {
    function Shares() {
    }
    Shares.prototype.companyShares = function () {
        try {
            var com = new stockStakeObj_1.companySharesStack();
            /**
             * Loop the company array objects and add it to stack.
             */
            outer: while (true) {
                console.log("1. Add");
                console.log("2. Remove");
                console.log("3. Print");
                console.log("4. Save and exit");
                var num = read.questionInt("Enter valid choice :");
                /**
                 * Switch to choose the case to add,remove and
                 * print
                 */
                switch (num) {
                    case 1:
                        com.addToStack();
                        break;
                    case 2:
                        com.removeFromStack();
                        break;
                    case 3:
                        com.print();
                        break;
                    case 4:
                        com.writeStock();
                        break outer;
                    default:
                        console.log("Please enter valid number ");
                        break;
                }
            }
        }
        catch (err) {
            console.log(err.message);
        }
    };
    return Shares;
}());
var share = new Shares();
share.companyShares();
