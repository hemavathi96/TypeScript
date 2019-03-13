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
import { companySharesStack } from "./stockStakeObj";

//import{companySharesStack} from "./stockAccountObj"
var file = require("fs");
var read = require("readline-sync")
class Shares {
    companyShares(): void {
        try {
            var com = new companySharesStack()
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
        } catch (err) {
            console.log(err.message);
        }
    }
}
var share = new Shares()
share.companyShares()