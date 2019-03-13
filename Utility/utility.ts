export class exp {

    inventoryDm(object) {
        try {
            var rice = object.Rice;
            var wheat = object.Wheat;
            var pulses = object.Pulses;
            for (let key in rice) {
                /**
                 *looping over each element that is in the rice
                 */
                console.log('\n');
                console.log("the total rate of", rice[key].Name, "is", rice[key].weight * rice[key].price);
                /**
                 *printing total amount
                 */
            }
            for (let key in wheat) {
                /**
                 *looping over each element that is in the wheat
                 */
                console.log('\n');
                console.log("the total rate of", wheat[key].Name, "is", wheat[key].weight * wheat[key].price);
                /**
                 *printing total amount
                 */
            }
            for (let key in pulses) {
                console.log('\n');
                console.log("the total rate of", pulses[key].Name, "is", pulses[key].weight * pulses[key].price);
            }
        }
        catch (e) {
            console.log(e.message);
        }
    }
    /****************************** Regular Expression Demonstration********************************************* 
         *stringRegularExp
         *********************************
         *@description :Hello <<name>>, We have your full
         *              name as <<full name>> in our system. your contact number is 91­xxxxxxxxxx.
         *              Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016.
         *              Use Regex to replace name, full name, Mobile#, and Date with proper value
         *@param       :name,fullname,num,date
         *@purpose     :To replace Name,username,phone number
         *@function    : To replace Name,username,phone number using regex and to update current date.
         *****************************************************************************************/

    replaceUsingRegex(name, fullName, num, day,stringObj) {


        try {

           stringObj = stringObj.replace(/<<name>>/g, name)//replace method will replace the 1st value with 2nd sec value
            stringObj = stringObj.replace(/<<fullname>>/g, fullName)//g reads global it will change all occurances in that file
            stringObj = stringObj.replace(/xxxxxxxxxx/g, num)//get the num from user
            stringObj = stringObj.replace(/xx-xx-xxxx/g, day);//get the date from user
            return stringObj;
        }
        catch (e) {
            console.log(e.message);
        }
    }

    /**************************************clinicManagmentObj**********************************
     *
    
     *@Purpose      : To add and edit all the details of the patients and 
     *               doctors into the file and giving appontment to the patients.
     *
     *@Use Library  : Java JSON Library
    
     *@description  :clinicManagment is used to manage a list of doctors associated with the clinic
     *                clinicque.It manages doctors by name,Id,Specialization and availability(AM,PM)
     *                users to search doctors by name,Id,specalization or availability.also the patients
     *                to take appointment with the doctor.
     *@function     :To add and edit all the details of the patients and doctors.
     *
     *@param       : person store the info of each person and perform opeartions.
     */
    /********************************************************************************************* */

    clinique() {
        var fs = require('fs');
        var data = fs.readFileSync('clinicManagment.json')
        var prompt1 = require('prompt-sync')();
        var clinique = JSON.parse(data);
        do {
            console.log("1. Add appointment");
            console.log("2. Print list");
            console.log("3. search");
            console.log("4. exit ");
            // console.log('test1');

            var option: any = prompt1("Enter the option : ");
            console.log('test2');
            switch (option) {
                case '1':
                    // console.log(" List of doctors avilable are : ");
                    // console.log(clinique.doctors);
                    var name = prompt1("Enter the name of patient: ");
                    var ID = Math.floor(Math.random() * 1000);
                    var mobNo = prompt1("Enter your mobile number");
                    var age = prompt1("Please Enter your age: ");
                    var appointment_To = prompt1("Enter the name of doctor you want appointment with : ");
                    clinique.Patient.push(
                        {
                            "Name": name,
                            "ID": ID,
                            "mobNo": mobNo,
                            "age": age,
                            "appoinntment_To": appointment_To
                        });
                    console.log(clinique.Patient);

                    console.log("Appointment added sucessfully!");

                    fs.writeFileSync('clinicManagment.json', JSON.stringify(clinique));

                    break;

                case '2':
                    console.log(clinique);
                    break;
                case '3':
                    console.log("   Search List   ");
                    console.log("1. Doctor \n 2.Patient");
                    var option2: any = prompt1('Enter Option: ')
                    if (option2 == 1) {
                        console.log("1. Search by Name \n2.Search ID \n3.Search by Specialization \n4.Search by Availability");
                        var option3: any = prompt1('Enter options: ');

                        if (option3 == 1) {
                            var i = prompt1('Name: ');
                            for (var key in clinique.Doctor) {
                                if (clinique.Doctor[key].Name == i) {
                                    console.log(" Doctor Details");
                                    console.log(clinique.Doctor[key]);
                                }
                            }
                        }
                        else if (option3 == 2) {
                            var i = prompt1('ID: ');
                            for (var key in clinique.Doctor) {
                                if (clinique.Doctor[key].ID == i) {
                                    console.log(" Doctor Details");
                                    console.log(clinique.Doctor[key]);
                                }
                            }
                        }
                        else if (option3 == 3) {
                            var i = prompt1('Specialization: ');
                            for (var key in clinique.Doctor) {
                                if (clinique.Doctor[key].Specialization == i) {
                                    console.log(" Doctor Details");
                                    console.log(clinique.Doctor[key]);
                                }
                            }
                        }
                        else if (option3 == 4) {
                            var i = prompt1('Availability: ');
                            for (var key in clinique.Doctor) {
                                if (clinique.Doctor[key].Availability == i) {
                                    console.log("Doctors Details");
                                    console.log(clinique.Doctor[key]);
                                }
                            }
                        }
                    }

                    if (option2 == 2) {
                        console.log("1.Search by Name\n2.Search by ID\n3.Search by mobNo\n4.Search by Age");
                        var option4: any = prompt('Enter option: ');
                        if (option4 == 1) {
                            var i = prompt1('Name: ');
                            for (var key in clinique.Patients) {
                                if (clinique.Patients[key].Name == i) {
                                    console.log(" Patients Details");
                                    console.log(clinique.Patients[key]);
                                }
                            }
                        }
                        else if (option4 == 2) {
                            var i = prompt1('ID: ');
                            for (var key in clinique.Patients) {
                                if (clinique.Patients[key].ID == i) {
                                    console.log("Patient Details");
                                    console.log(clinique.Patients[key]);
                                }
                            }
                        }
                        else if (option4 == 3) {
                            var i = prompt1('mobNo: ');
                            for (var key in clinique.Patients) {
                                if (clinique.Patients[key].mobNo == i) {
                                    console.log("Patient Details");
                                    console.log(clinique.Patients[key]);
                                }
                            }
                        }
                        else if (option4 == 4) {
                            var i = prompt1('Age: ');
                            for (var key in clinique.Patients) {
                                if (clinique.Patients[key].Age == i) {
                                    console.log("Patient Details");
                                    console.log(clinique.Patients[key]);
                                }
                            }
                        }
                    }
                    break;

                case '4':
                    break;

                default:
                    console.log("please enter valid input");

            }
        } while (option != '4');

    }
}
