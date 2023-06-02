// your code here
function fuc1()
{
    let url=document.getElementById("url")
    let name=document.getElementById("name")
    let year=document.getElementById("year")
    let submit=document.getElementById("submit")

    console.log(name.value)
    
    if(name.value=="")
    {
    
    }
    else
    {
        url.innerText=url.innerText+"name="+name.value
        if(year.value!="")
        {
            url.innerText=url.innerText+"&year="+year.value
        }
    }
}