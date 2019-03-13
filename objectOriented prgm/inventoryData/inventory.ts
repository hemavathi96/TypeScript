/************************************************************************************ 
*execution   : 1.default node          :cmd>inventory.ts
*@purpose     : to create a file having inventory details of rice,pulses and wheat
*                with properties such as name,weight,price per kg.  
* @Description
* @file           :inventory.ts
* @overview       :declaring the function and parsing the user input as argument.
* @author         :hemavathi B.V.<hemavathibv16@gmail.com>
* @version        :1.0
* @since          :8 march 2019
***********************************************************************************/

import { exp } from "../../Utility/utility";
var filestream =require('fs');
var data = filestream.readFileSync('inventory.json')

var object=JSON.parse(data)
var access=new exp()
class inventory {
    invDataManagement():void
    {
            
          access.inventoryDm(object)
    }
}
var inventer=new inventory
inventer.invDataManagement()