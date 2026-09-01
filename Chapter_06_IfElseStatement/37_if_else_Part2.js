let username = "Dev";

let password = "secure123";

let isAccountLocked = true;

if ((username === "Dev" && password === "secure123") && !isAccountLocked) {

    console.log("Allowed to enter");

} else {

    console.log("not allwed to enter");

}

/**
 * The login is allowed only when the username matches AND the password matches AND the account is NOT locked (!isAccountLocked). 
 * Here isAccountLocked is true, so !isAccountLocked is false, and the whole condition fails, so it prints "not allwed to enter".
 */