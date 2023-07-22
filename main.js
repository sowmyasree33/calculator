let inpu1=document.querySelector("#fno")
let inpu2=document.querySelector("#sno")
let addBtn=document.querySelector(".addbtn")
let subBtn=document.querySelector(".subbtn")
let mulBtn=document.querySelector(".mulbtn")
let divBtn=document.querySelector(".divbtn")
let remBtn=document.querySelector(".rembtn")
 result=document.querySelector(".result")
//find and display
addBtn.addEventListener("click", () => {
    let fno=inpu1.value;
    let sno=inpu2.value;
    //sum
    let sum=(+fno)+(+sno);
   result.textContent=sum;
})
subBtn.addEventListener("click", () => {
    let fno=inpu1.value;
    let sno=inpu2.value;
    //diff
    let diff=(+fno)-(+sno);
   result.textContent=diff;
})
mulBtn.addEventListener("click", () => {
    let fno=inpu1.value;
    let sno=inpu2.value;
    //multiplication
    let m=(+fno)*(+sno);
   result.textContent=m;
})
divBtn.addEventListener("click", () => {
    let fno=inpu1.value;
    let sno=inpu2.value;
    //division
    let div=(+fno)/(+sno);
   result.textContent=div;
})
remBtn.addEventListener("click", () => {
    let fno=inpu1.value;
    let sno=inpu2.value;
    //remainder
    let r=(+fno)%(+sno);
   result.textContent=r;
})
