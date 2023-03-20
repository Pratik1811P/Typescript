function Area( R : number , Pi : number ) : number
{
    let Ans : number = 0

    Ans = Pi * ( R * R )

    return Ans

}

var R : number = 5

var Pi : number = 3.14

var Ans : number = 0

Ans = Area( R, Pi ) 

console.log ( "Area of Circle : " + Ans )

