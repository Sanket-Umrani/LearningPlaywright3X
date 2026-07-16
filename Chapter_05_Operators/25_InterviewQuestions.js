let responseTime=850;
let sla=1000;
let slaStatus=responseTime<=sla ? "SLA PASSED" :"SLA FAILED";
console.log(`Response: ${responseTime} ms - ${slaStatus}`);
//Using Template Literal
console.log(`What is SLA Time ? ${sla}`);