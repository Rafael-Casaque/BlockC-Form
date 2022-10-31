const validarForm = (e)=>{
    e.preventDefault()
    document.querySelectorAll("#form-signup>div>form>input").forEach(element => {
        if(element.value.length == 0){
            alert(`O campo ${element.getAttribute("name")} está vazio!`)
            return false
        }                
    })
}

const validarEmail = (e)=>{
    const emailRegex = /^[\w._-]+@[\w._-]+\.[a-z]+/gi;
    if(!emailRegex.test(document.querySelector("input[name='email']").value)){
        alert("Parece que isso não é um email")
        return false
    }    
}

document.querySelector("#form-signup>div>form").addEventListener("submit",(e)=>{
    if(validarForm(e)!=false && validarEmail(e)!=false)
        document.querySelectorAll("#form-signup>div>form>input").forEach(element => {element.value=''})      
})