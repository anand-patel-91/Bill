let tab=document.getElementById("invoice")

let pEL=document.getElementById("sum")

function additem(){
    let newrow=tab.insertRow(-1);

    let c1=newrow.insertCell(0)
    let c2=newrow.insertCell(1)
    let c3=newrow.insertCell(2)
    let c4=newrow.insertCell(3)

    c1.innerHTML=`<input type="text" autocomplete=on>`
    c2.innerHTML=`<input type="number" class="qt" required onkeyup="total()">`
    c3.innerHTML=`<input type="number" class="pr" required onkeyup="total()">`
    c4.innerHTML=`<button class="rem"  onclick="deleteRow(this)"">Remove</button>`
}

function total(){
    let x=document.getElementsByClassName("qt")
    let y=document.getElementsByClassName("pr")
    let ans=0
    for(let i=0;i<x.length;i++){
        ans+=x[i].value*y[i].value
    }
    pEL.innerText=`Total : Rs. ${ans}`
}

function reset(){
    tab.innerHTML=""
    pEL.innerText=`Total: Rs.0`
}

function deleteRow(el){
    if(confirm("Are you sure you want to delete the row?")){
        (tab.parentNode).deleteRow(el.parentNode.parentNode.rowIndex)
    }
    total()
}