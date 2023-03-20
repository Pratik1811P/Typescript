function Max1 (N1 : number, N2 : number, N3 : number) : number
{
    if(N1 > N2 && N1 > N3)
    {
        return N1
    }
    else if(N2 > N1 && N2 > N3)
    {
        return N2
    }
    else
    {
        return N3
    }
}

var N1 : number = 23

var N2 : number = 89

var N3 : number = 6

var Ret : number = 0

Ret = Max1(N1, N2,N3)

console.log( "Maximum number is :" + Ret )
