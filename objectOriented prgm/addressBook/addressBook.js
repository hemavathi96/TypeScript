"use strict";
exports.__esModule = true;
var addressBookObj_1 = require("./addressBookObj");
var prompt = require('prompt-sync')();
function address() {
    var a = new addressBookObj_1.Address();
    console.log("ADDRESS BOOK");
    console.log("1: Update address book");
    console.log("2: Open Address Book");
    console.log("3: Exit");
    var choice1 = prompt("Please enter your choice: ");
    switch (choice1) {
        case '1':
            a.createAddress();
            break;
        case '2':
            a.openProfile();
            break;
        case '3':
            console.log("Exit!");
            break;
        default:
            console.log("Please enter a valid option!!");
    }
}
address();
