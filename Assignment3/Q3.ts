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
        let Ans : number = 0
        Ans = this.PI * this.Radius * this.Radius
        return Ans
    }
}

class CircleX extends Circle
{
    constructor(R : number)
    {
        super(R)
    }

    Circumfarance() : number
    {
        let Ans : number = 0
        Ans = 2 * this.PI * this.Radius
        return Ans
    }
}

var ObjCircleX1 = new CircleX(5)
var ObjCircleX2 = new CircleX(9)

var Ret : number = 0

// obj 1

Ret = ObjCircleX1.Area()
console.log("Area of First circle is : "+ Ret)

Ret = ObjCircleX1.Circumfarance()
console.log("Circumfarance of First circle is : "+Ret)

// obj 2

Ret = ObjCircleX2.Area()
console.log("\nArea of Second circle is : "+Ret)

Ret = ObjCircleX2.Circumfarance()
console.log("Circumfarance of Second circle is : "+Ret)