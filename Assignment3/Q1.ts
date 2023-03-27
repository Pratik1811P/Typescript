
class Arithmatic
{
    Number1 : number
    Number2 : number

    constructor(No1 : number, No2 : number)
    {
        this.Number1 = No1
        this.Number2 = No2
    }

    Addition(): number
    {
        return this.Number1 + this.Number2;
    }

    Substraction(): number
    {
        return this.Number1 - this.Number2;
    }

    Multiplication() : number
    {
        return this.Number1 * this.Number2
    }

    Division()
    {
        return this.Number1 / this.Number2
    }

}

var obj1 = new Arithmatic(16,5)
var obj2 = new Arithmatic(31,16)

var Ret : number = 0

// Obj 1

Ret = obj1.Addition();
console.log("Addition of obj1 : "+Ret)

Ret = obj1.Substraction();
console.log("Substraction of obj1 : "+Ret)

Ret = obj1.Multiplication();
console.log("Multiplication of obj1 : "+Ret)

Ret = obj1.Division();
console.log("Division of obj1 : "+Ret)

// Obj 2

Ret = obj2.Addition();
console.log("\nAddition of obj2 : "+Ret)

Ret = obj2.Substraction();
console.log("Substraction of obj2 : "+Ret)

Ret = obj2.Multiplication();
console.log("Multiplication of obj2 : "+Ret)

Ret = obj2.Division();
console.log("Division of obj2 : "+Ret)