function Fibonacci (Num : number) : void

{
    var No1 : number = 1
    var No2 : number = 1
    var No3 : number = 0
    for (var i = 0; i<=Num && No3<= Num; i++)
    {
        No1 = No2
        No2 = No3
        No3 = No1 + No2

        if (No3 <= Num)
        {
            console.log(No3)
        }
        
    }
}

var Num : number = 21
Fibonacci (Num)

