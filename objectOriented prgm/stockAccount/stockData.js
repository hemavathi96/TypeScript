"use strict";
exports.__esModule = true;
/*******************************************************************************
 *
 * @Purpose     :  To add and update the share info of customer and company.
 * @Use Library : Java JSON Library
 *@description : StockAccount implements a data type that might be used by a financial institution to keep track of customer information.
 *@function    : stockAccount keep the track of information about the company and the customer where customer can buy and sell the share .
 *@param       : object --> objects such as customer,company which are at  stockAccountObject.
 ************************************************************************/
var read = require('readline-sync');
var file = require('fs');
var s = 0;
var stockAccount = /** @class */ (function () {
    function stockAccount() {
    }
    /**
     *@description:stockCreate creates stock acoount with name,
     *id and share where id is generated unquie for each account.
     *@param:Taking the parse object from the user data
     *
     */
    stockAccount.prototype.stockCreate = function (data) {
        try {
            var name1 = read.question(" enter the name of the customer: ");
            var id1 = Math.floor(Math.random() * 100);
            var share1 = Math.floor(Math.random() * 100);
            console.log(id1);
            data.customer.push({
                name: name1,
                id: id1,
                share: share1
            });
            console.log(data.customer);
            var d = file.writeFileSync('customer.json', JSON.stringify(data));
        }
        catch (err) {
            console.log(err.message);
        }
    };
    /**
     *@description: Buy it adds to the stock account and
     * customer buys the share from the company.
     * @param:Taking the parse object from the user data,data1
     *
     */
    stockAccount.prototype.buy = function (data, data1) {
        try {
            var flag = false;
            console.log(data);
            var object = data.customer;
            var id1 = read.question(" enter the id : ");
            /**
             * @description:Loop the customer array object to find id of the customer want to buy.
             */
            for (var i in object) {
                if (object[i].id == id1) {
                    var index = data.customer.indexOf(data.customer[i]);
                    var customername = object[i].name;
                    console.log(" company information ");
                    console.log(data1);
                    var sym = read.question(" enter symbol of company share you want to buy : ");
                    var object1 = data1.company;
                    /**
                     * @description:loop over the company array object to buy the share from the company.
                     */
                    for (var i_1 in object1) {
                        if (object1[i_1].symbol == sym) {
                            console.log("company number of shares price of each share");
                            console.log(object1[i_1]);
                            var name10 = object1[i_1].name;
                            var sym10 = object1[i_1].symbol;
                            var shar = object1[i_1].share;
                            do {
                                var number = read.questionInt(" enter the number of shares you want to buy : ");
                                if (number > shar) {
                                    console.log(" Please enter the share number which less than company shares ");
                                }
                                else {
                                    flag = true;
                                }
                            } while (!flag);
                            var s = " customer name :  " + customername + "  and name of company  " + name10 + " & symbol " + sym10 + "  buy number of shares " + number;
                            console.log(s);
                            //this.stackps(s);
                            var time = new Date(Date.now());
                            var time1 = time.toTimeString();
                            //console.log(" Time of buying the share is " + Math.floor(time.getSeconds()) + " sec ")
                            var n = parseInt(data.customer[index].share);
                            var n11 = parseInt(data1.company[i_1].share);
                            var num = parseInt(number);
                            var n1 = n + num;
                            var n2 = n11 - num;
                            if (n11 > num) {
                                data.customer[index].share = n1;
                                data1.company[i_1].share = n2;
                                data.customer[index].recentTransaction = time1;
                                var d = file.writeFileSync('customer.json', JSON.stringify(data));
                                //console.log(d) 
                                var d1 = file.writeFileSync('company.json', JSON.stringify(data1));
                            }
                        }
                    }
                }
            }
        }
        catch (err) {
            console.log(err.message);
        }
    };
    /**
     * @description:Sell subtract the share from the stock account and sell the
     * share to company which user is interested.
     * @param:Taking the parse object from the user data,data1.
     */
    stockAccount.prototype.sell = function (data, data1) {
        try {
            console.log(data);
            var object = data.customer;
            var id1 = read.question(" enter the id : ");
            /**
             * Loop the customer array object to find id of the customer want to sell.
             */
            for (var i in object) {
                if (object[i].id == id1) {
                    var index = data.customer.indexOf(data.customer[i]);
                    var customername1 = object[i].name;
                    console.log(" company information ");
                    console.log(data1);
                    var sym12 = read.question(" enter symbol  of company you want to sell : ");
                    var object1 = data1.company;
                    /**
                      * loop over the company array object to sell the share from the company.
                      */
                    for (var i_2 in object1) {
                        if (object1[i_2].symbol == sym12) {
                            console.log("company number of shares and price of each share");
                            console.log(object1[i_2]);
                            var name11 = object1[i_2].name;
                            var sym13 = object1[i_2].symbol;
                            var number = read.questionInt("enter how many shares you want to sell :");
                            var s = " customer name :" + customername1 + " and name of company " + name11 + " & symbol  " + sym13 + " sell number of shares :" + number;
                            console.log(s);
                            //this.stackps(s);
                            var time = new Date(Date.now());
                            var time1 = time.toTimeString();
                            //this.queuetime(time1);
                            var n = parseInt(data.customer[index].share);
                            var n11 = parseInt(data1.company[i_2].share);
                            var num = parseInt(number);
                            var n1 = n - num;
                            var n2 = n11 + num;
                            data.customer[index].share = n1;
                            data1.company[i_2].share = n2;
                            data.customer[index].lastTransaction = time1;
                            var d = file.writeFileSync('customer.json', JSON.stringify(data));
                            var d1 = file.writeFileSync('company.json', JSON.stringify(data1));
                        }
                    }
                }
            }
        }
        catch (err) {
            console.log(err.message);
        }
    };
    /*
     * To print all the details of the customer and company.
     */
    stockAccount.prototype.print = function (data, data1) {
        try {
            console.log("customer shares information :");
            console.log(data);
            console.log("company shares information :");
            console.log(data1);
        }
        catch (err) {
            console.log(err.message);
        }
    };
    return stockAccount;
}());
exports.stockAccount = stockAccount;
