// Interface are used in API Testing

interface APIResponse{
    statuscode:number;
    body: string;
    headers?: object;
    responseTime: number;
}

//Creating first API response
let responseData: APIResponse = {
    statuscode:200,
    body: "{}",
    responseTime: 200
}
//Notice that headers is missing.
/**
 * Why is this allowed?

Because you declared:
headers?: object;
The ? makes the property optional.
 */

console.log("Status:", responseData.statuscode);
console.log("Body:", responseData.body);

//Creating second  API response
let responseData2: APIResponse = {
    statuscode:200,
    body: "{}",
    headers: {},
    responseTime: 200
}
console.log("Headers:",responseData2.headers);
console.log("ResponseTime:",responseData2.responseTime);
//Creating third API response
let responseData3: APIResponse = {
    statuscode: "200", // Error
    body: "{}",
    responseTime: 200
};
console.log("StatusCodes: ",responseData3.statuscode);