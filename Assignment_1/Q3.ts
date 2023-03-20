function Factor (N1 : number) : void
{
    let cnt : number = 0

    for( cnt = 1; cnt  < N1; cnt++ )
    {
        if( N1 % cnt == 0 )
        console.log( cnt )
    }
}

var No1 : number = 20;
Factor (No1)
