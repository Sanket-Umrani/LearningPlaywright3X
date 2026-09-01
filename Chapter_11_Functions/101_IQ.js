var a="Sanket";
if(true)
{
    console.log(a);
    var a="temp";
    console.log(a);
}
/**
 * as var is function scoped then there is only one a exist so ,
 * var a;
 * a="Sanket";
 * if(true)
 * {
 * console.log(a);
 * a="temp";
 * console.log(a);
 * }
 */