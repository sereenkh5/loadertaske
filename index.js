
function abeer(){

const clic =document.querySelector(".clic");
clic.onclick=(e)=>{
    const cl=document.querySelector(".overlay").classList.remove("d-non");
    
    
    
}
const wrong=document.querySelector(".wrong");
wrong.onclick=(e)=>{
    const cl=document.querySelector(".overlay").classList.add("d-non");
    
    
}


}
abeer();