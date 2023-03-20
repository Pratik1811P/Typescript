function chkprime(No : number) : boolean
{
    var flag : number = 0

    if (No==1 || No==0)
    {
        return false
    }
    
    for (var i = 2; i <= No; i++)
    {
        flag = 0
        if (No % i == 0)
        {
            flag = 1
        }
         
    }
    if (flag ==0)
    {
        return true
    }
   return false

}

var No : number = 11

chkprime(No)

console.log("It is a Prime Number")
