const decrement =document.getElementById("decrementBtn")
const incerment =document.getElementById("incrementBtn")
const displayValue =document.getElementById("displayValue")
const resetValue =document.getElementById("resetValue")


decrement.addEventListener("click", ()=>{

    const value =Number(displayValue.innerText);
    if(value>0){
        displayValue.innerText=value-1
    } else{
        alert("Negative value not allowed")
    }
});


incerment.addEventListener("click",()=>{
    const value =Number(displayValue.innerText);
    if(value>=10){
        alert("10 + value are not allowed")
    }
    else{
        displayValue.innerText =value+1
    }
})


resetValue.addEventListener("click",()=>{
    displayValue.innerText=0;
})