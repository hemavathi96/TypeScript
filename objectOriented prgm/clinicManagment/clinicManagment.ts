/******************************************************************************
 *  Execution       :   1. default node          : cmd> node clinicManagment.js
 *  @purpose        : To add and edit all the details of the patients and 
 *                     doctors into the file and giving appontment to the patients.
 *  @description    :clinicManagment is used to manage a list of doctors associated with the clinic
 *                    clinicque.It manages doctors by name,IdSpecialization and availability(AM,PM)
 *                    users to search doctors by name,Id,specalization or availability.also the patients
 *                    to take appointment with the doctor.
 *  @file           : clinicManagment.js
 *  @overview       : To add and edit all the details of the patients and doctors.
 *  @author         : hemavathi B.V <<hemavathibv16@gmail.com>>
 *  @version        : 1.0
 *  @since          : 13-march-2019
 ******************************************************************************/
import { exp } from "../../Utility/utility";
//created object of utility using new keyword.
var utility = new exp
class cliniqueManagement {

    cmanagement()

    {
       utility.clinique();
    }

}
//created object of cliniquemanagement using new keyword.
var cm = new cliniqueManagement();
cm.cmanagement();