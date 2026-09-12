let responseCode: number[] = [200, 201, 404, 500, 302, 403];

function getFailedCodes(codes: number[]): number[] {
    return codes.filter(function (code: number): boolean {
        return code >= 400;
    });
}

console.log("All Codes", responseCode);
console.log("Failed Codes", getFailedCodes(responseCode));

/**
 * filter() goes through every element and asks:

Should I keep this element?
Here call back is 

{
    return codes.filter(function (code: number): boolean {
        return code >= 400;
    });
    takes one code and returns either:

true  → keep it
false → don't keep it
 */