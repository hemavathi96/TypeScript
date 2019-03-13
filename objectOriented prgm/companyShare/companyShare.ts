/************************************************************
 * Execution    :   1. cmd> node companyShare.ts
 * Purpose      :   To add and remove the company info from the list of company shares.
 * @description :   List of CompanyShares in a Linked List and new CompanyShares can
 *                  be added or removed easily.
 * @file        :   companyShare.ts
 * @overview    :   To add and remove the company info from the list of company shares.
 * @author         : hemavathi B.V <<hemavathibv16@gmail.com>>
 *  @version     :   1.0
 * @since       :   12 march 2019
 *********************************************************/
import { companySharesLL } from "./companyShareObj";
var file = require("fs");
var read = require("readline-sync");
class companyShare {
    companyShares(): void {
        try {
            var companyJson = file.readFileSync("/home/bridgeit/typeScript/objectOriented prgm/companyShare/company.json")
            // var companyJson = file.readFileSync("/home/admin1/Anush/javaScript/Object Oriented Programs/companySharesLinkedList/comp.json");
             var companyObject = JSON.parse(companyJson);
            var com = new companySharesLL;
            /**
             * @description:Loop the company array objects and add it to linkedlist.
             */
            outer: while (true) {
                console.log("1. Add");
                console.log("2. Remove");
                console.log("3. Print");
                console.log("4. Save and exit");
                var num = read.questionInt("Enter your choice :");
                /**
                * @description:Switch to choose the case to add,remove and
                * print
                */
                switch (num) {
                    case 1:
                        com.addTolist();
                        break;
                    case 2:
                        com.removeFromList();
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
var comp = new companyShare
comp.companyShares()