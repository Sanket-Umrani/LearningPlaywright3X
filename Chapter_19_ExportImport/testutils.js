export let BASE_URL = "https://app.vwo.com";
//let BASE_URL = "https://app.vwo.com": creates a variable that belongs to this module
//By adding export:you are saying:"Other JavaScript files are allowed to import this variable."
export function formatUpperCaseString(sname) {
    //Again, export makes this function available to other modules
    return sname.toUpperCase();
}

let fname = "Sanket";
//This variable exists inside this module, but because there is no export:another file cannot directly import it.So import { fname } from "./utils.js"; will not work