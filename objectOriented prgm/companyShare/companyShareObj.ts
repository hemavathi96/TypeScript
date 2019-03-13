/*************************companyShare***************************
 * @Purpose     :  To add and update the share info of company.
 * @Use Library : Java JSON Library
   @description : companyShares implements a data type that might be used by a financial institution to keep track of customer information.
 * @function    : companyShares keep the track of information about the  company where company can buy and sell the share .
 * @param       : object --> objects such as company which are at  companyShares.
 ****************************************************************************************************/

import { LinkedList } from "../../../JavaScript/Utility/utilDataStructure"
var read = require("readline-sync");
var file = require("fs");
export class companySharesLL {
    stock
    constructor() {
        this.stock = new LinkedList
        try {
            var data = JSON.parse(
                file.readFileSync("/home/bridgeit/typeScript/objectOriented prgm/companyShare/company.json")
                    );
            console.log("-------------",data);           
            for (let j = 0; j < data.company.length; j++) {
                this.stock.add(data.company[j]);
            }
        } catch (err) {
            console.log("File not found");
        }
    }
    /**
     * @description:addToList to add the info about the company name,share and price
     * using linkedlist and add it to list. 
     */
    addTolist() {
        try {
            var flag = false;
            do {
                var name = read.question("Enter the name want to add : ");
                if (!isNaN(name)) {
                    console.log("Please enter alphabetics only ......!");
                } else {
                    flag = true;
                }
            } while (!flag);
            do {
                var symbol = read.question("Enter the symbol :")
                if (!isNaN(symbol)) {
                    console.log("Please enter alphabetics only ......!");
                } else {
                    flag = true;
                }
            } while (!flag);
            var share = read.questionInt("Enter the share :");
            var price = read.questionInt("Enter the price :");

            this.stock.add({
                name: name,
                symbol: symbol,
                share: share,
                price: price
            });
            console.log("Elemets after adding to list :");
            console.log(this.stock.printShares());
        } catch (err) {
            console.log(err.message);
        }
    }
    /**
     * @description:removeFromList to remove the info about the company name,share and price
     * using linkedlist and add it to list. 
     */
    removeFromList() {
        try {
            console.log(this.stock.printShares());
            var symbol = read.question("Enter company symbol: ");
            this.stock.removeStock(symbol);
            console.log(this.stock.printShares());
        } catch (err) {
            console.log(err.message);
        }
    }
    /**
     * @description:To print all the details of the company using printlist method.
     */
    print() {
        try {
            console.log(this.stock.printShares());
        } catch (err) {
            console.log(err.message);
        }
    }
    /**
     * @description:writeStock is to save the info about company.
     */
    writeStock() {
        try {
            file.writeFileSync("/home/bridgeit/typeScript/objectOriented prgm/companyShare/company.json",
                JSON.stringify(this.stock.printShares()),
                function (err) {
                    if (err) {
                        throw err;
                    }
                }
            );
        } catch (err) {
            console.log(err.message);
        }
    }
}