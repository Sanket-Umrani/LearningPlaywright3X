import log from "./logs/logger.js"; //this is default export so not necessary that exported name should be considered while importing
log("TID");
import  {logBetter}  from "./logs/logger.js"; //this is a named export so it is necessary that exported name be considered while importing
logBetter("UID");

// {} are used in the import for only named export