let tab=document.getElementById("invoice")

let pEL=document.getElementById("sum")

function additem(){
    let newrow=tab.insertRow(-1);

    let c1=newrow.insertCell(0)
    let c2=newrow.insertCell(1)
    let c3=newrow.insertCell(2)

    c1.innerHTML="<input type='text'>"
    c2.innerHTML="<input type='text' class='qt'>"
    c3.innerHTML="<input type='text' class='pr'>"

    total()
}

function total(){
    let x=document.getElementsByClassName("qt")
    let y=document.getElementsByClassName("pr")
    let ans=0
    for(let i=0;i<x.length;i++){
        ans+=x[i].value*y[i].value
    }
    pEL.innerText="Total : Rs." + ans
}

function reset(){
    tab.innerHTML=""
    pEL.innerText="Total : Rs.0"
}