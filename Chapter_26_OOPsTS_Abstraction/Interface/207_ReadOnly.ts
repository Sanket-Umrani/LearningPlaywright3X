// Readonly


interface Point{
    readonly x:number;
    readonly y:number;
}

const point: Point = {
    x:10,
    y:20
};
console.log(point.x);
console.log(point.y);
//point.x = 5; // con't modify if readonly keyword used
console.log(point.x);