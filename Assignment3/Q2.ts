
class Circle
{
    Radius : number
    PI : number 

    constructor(R : number)
    {
        this.Radius = R
        this.PI = 3.14
    }

    Area() : number
    {
        console.log("\nRadius of Circle is:"+ this.Radius)
        return this.PI * this.Radius * this.Radius
    }
}
var First_Circle = new Circle(7)
var Second_Circle = new Circle(4)

var Ret : number = 0

Ret = First_Circle.Area();
console.log("Area of First Circle : "+Ret)

Ret = Second_Circle.Area();
console.log("Area of Second Circle : "+Ret)

