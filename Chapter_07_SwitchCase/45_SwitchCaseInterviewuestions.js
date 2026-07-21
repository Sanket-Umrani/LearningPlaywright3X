let testScore=85;
switch(true)
{
    case (testScore>=95):
        console.log("Outsyanding-Top Performer");
        break;
    case (testScore>=85 && testScore<95):
        console.log("Excellent-Performer");
        break;
    case (testScore>=75 && testScore<85):
        console.log("Good-Performer");
        break;  
    case (testScore>=65 && testScore<75):
        console.log("Average-Performer");
        break;  
    case (testScore>=50 && testScore<65):
        console.log("Below Average-Performer");
        break;  
    case (testScore<50):
        console.log("Poor-Performer");
        break;  
        default:
            console.log("Unsatisfactory-Requires Training");
            
}