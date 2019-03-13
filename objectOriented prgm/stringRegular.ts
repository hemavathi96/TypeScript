/************************************************************************************ 
execution   : 1.default node          :cmd>stringRegularExp.js
purpose         :To replace Name,username,phone number with given input from user. 
@Description    :Hello <<name>>, We have your full
                  name as <<full name>> in our system. your contact number is 91­xxxxxxxxxx.
                  Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016.
                  Use Regex to replace name, full name, Mobile#, and Date with proper value
@file           :stringRegularExp.js
@overview       :To replace Name,username,phone number using regex and to update current date.
@author         :hemavathi B.V.<hemavathibv16@gmail.com>
@version        :1.0
@since          :7 march 2019
***********************************************************************************/
import { exp } from "../Utility/utility";

const read = require('readline-sync')
// var access=new exp()
var access = new exp();
const fileStream = require('fs')
const stringObj = fileStream.readFileSync('sampleString.txt', 'utf8')

console.log(stringObj);

class stringReg {
     replace(): void {
          try {
               var name = read.question('enter name : ');
               /**
                *reading input from the user
                */
               while (!isNaN(name))
        /**
         *validating for the name it should be string not number
         */ {
                    console.log('enter valid name and alphabet only: ')
                    name = read.question('enter name : ');
                    /**
                     *reading input from the user
                     */
               }
               var fullName = read.question('enter fullname : ')
               while (!isNaN(fullName))
         /**
          *validating for the name it should be string not number
          */ {
                    console.log('enter valid fullName and alphabet only ')
                    fullName = read.question('enter your fullname : ')
                    /**
                     *reading input from the user
                     */
               }
               var num = read.question('enter phone number : ')
               while (isNaN(num) || (num.length != 10)) {
                    /**
                     *validating for the name it should be number not a string 
                     */
                    console.log('enter valid number with ten digits: ')
                    num = read.question('enter your phone number : ')
                    /**
                     *reading input data from the user
                     */
               }
               var date = new Date();
               /**
                *creating new object of date
                */
               var day = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

               var ans = access.replaceUsingRegex(name, fullName, num, day, stringObj)
               console.log(ans);

          }
          catch (e) {
               console.log(e.message);
          }

     }
}
var details = new stringReg()
details.replace();