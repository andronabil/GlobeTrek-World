let btnCard = document.querySelectorAll(".btn");
let bigContainer=document.getElementById("bigContainer")
let  paymentNow= document.getElementById("paymentNow")
let exitButton=document.getElementById("exitButton")
let successMade=document.getElementById("successMade")
console.log(successMade)


btnCard.forEach(eo => {
    eo.addEventListener("click", () => {
        bigContainer.classList.remove("display-none")    
    });
});
exitButton.addEventListener("click",()=>{
    bigContainer.classList.add("display-none")  
})
paymentNow.addEventListener("click",()=>{
    setTimeout((eo) => {
        bigContainer.classList.add("display-none")
    }, 2000);
})



