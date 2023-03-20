function ChkString(str : String) : boolean
{
    if(str.match("Marvellous"))
    {
        return true
    }
    else
    {
        return false
    }
}

var string : String = "Pune Kothrud Marvellous Infosystems"

if(ChkString(string))
{
    console.log("String contains Marvellous in it.")
}
else
{
    console.log("String doesn't contain Marvellous in it.")
}
