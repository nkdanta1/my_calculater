function dis(val)
{
document.getElementById("ep").value+=val
}
//function for evaluation
function solve()
{
let x = document.getElementById("ep").value
let y = eval(x)
document.getElementById("ep").value = y
}
//function for clearing the display
function clr()
{
document.getElementById("ep").value = ""
}