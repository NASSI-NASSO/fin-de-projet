 const From =document.getElementById("frm");
 const inputs =From.querySelectorAll('input')
 

From.addEventListener('submit',Event)
function Event(e){
    e.preventDefault(); 
    inputs.forEach(input =>{
        if(input.value.trim()===""){
            input.nextElementSibling.textContent =`${input.dataset.type} is required`
        }
        else if(input.dataset.type ==="email" && !input.value.trim().includes('@gmail.com')){
            input.nextElementSibling.textContent = `email format invalid`
        }
        else{input.nextElementSibling.textContent=""}
    })
    
}
console.log(Event())