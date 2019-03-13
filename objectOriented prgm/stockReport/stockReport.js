/******************************************************************************
 *  Execution       : 1. default node          : cmd> node stockReport.js
 *  purpose         : To  Print a Stock Report with total value of each Stock and the total value of Stock.
 *  @description    : A program to read in Stock Names, Number of Share, Share Price.
 *                    Print a Stock Report with total value of each Stock and the total value of Stock.
 *  @file           : stockReport.js
 *  @overview       : To calculate total cost for number of shares.
 *  @author         :hemavathi B.V <hemavathibv16@gmail.com>
 *  @version        : 1.0
 *  @since          : 08 march 2019
 *
 ******************************************************************************/
var read = require('readline-sync');
var input = require('fs');
var data = input.readFileSync('stockReport.json', 'utf8');
var object = JSON.parse(data);
var sum = 0;
var stocks = object.Stock;
var stocksReport = /** @class */ (function () {
    function stocksReport() {
    }
    stocksReport.prototype.report = function () {
        try {
            /**
             * Loop the stocks and calculate the total value of share and price.
             */
            for (var key in stocks) {
                var name = stocks[key].stockName;
                var share = stocks[key].shares;
                var price = stocks[key].price;
                var total = share * price;
                console.log("\n The total value  of " + stocks[key].stockName + " share is " + total);
                sum = sum + total;
            }
            console.log("\n sum  of all companies stock value :" + sum + "\n");
        }
        catch (err) {
            console.log(err.message);
        }
    };
    return stocksReport;
}());
var report = new stocksReport;
report.report();
