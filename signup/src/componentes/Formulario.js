import Campos from './Campos';

const formStyle = {
    margin: '0 5%',
    width: '90%',
}

const buttonStyle = {
    backgroundColor: '#107cc8',
    color: 'white',
    borderRadius: '5px',
    width: '95%',
    border: '1px solid rgb(156, 156, 156)',
    fontSize: '4vh',
    fontWeight: 'bold',
    padding: '1.5vh 0',
    marginTop: '5%',
}

const validarForm = (e)=>{
    e.preventDefault()
    document.querySelectorAll("input").forEach(element => {
        if(element.value.length === 0){
            alert(`O campo ${element.getAttribute("name")} está vazio!`)
            return false
        }                
    })
}

const validarEmail = (e)=>{
    e.preventDefault()
    const emailRegex = /^[\w._-]+@[\w._-]+\.[a-z]+/gi;
    if(!emailRegex.test(document.querySelector("input[name='email']").value)){
        alert("Parece que isso não é um email")
        return false
    }    
}

export default function Formulario() {
    return(
        <form style={formStyle} onSubmit={(e)=>{if(validarForm(e)!==false && validarEmail(e)!==false){document.querySelectorAll("input").forEach(element => {element.value=''})}}}>
            <Campos for="nome" name="nome" type="text" label="Nome Completo"/>
            <Campos for="email" name="email" type="text" label="E-mail"/>
            <Campos for="senha" name="senha" type="password" label="Senha"/>
            <Campos for="senha2" name="senha2" type="password" label="Repita a Senha"/>
            <button style={buttonStyle}>Efetuar Cadastro</button>
        </form>
    )
}