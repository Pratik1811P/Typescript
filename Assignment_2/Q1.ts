function Maximum( A : number[]) : number
{
    var Max : number = 0

    var i : number = 0

    for( i=0; i<A.length; i++)
    {
        if(A[i]>Max)
        {
            Max = A[i]
        }
    }
    return Max
}

var A : number[] = [ 23 , 89 , 6 , 29 , 56 , 45 , 77 , 32 ]

var Max : number = 0

Max = Maximum(A)

console.log("Maximum number is: "+Max) 
