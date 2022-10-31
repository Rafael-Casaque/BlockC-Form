import Formulario from "./Formulario";
import Background from "./Background";

const containerStyle = {
    display: 'flex',    
    height: '100vh',
}

const divFormStyle = {
    width: "34%",
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
}

const h2Style = {
    fontSize: '6vh',
    textAlign: 'center',
}

const h3Style = {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: '3.25vh'
}

export default function ContainerForm(){
    return(
        <section style={containerStyle}>
            <div style={divFormStyle}>
                <h2 style={h2Style}>Cadastrar-se</h2>
                <Formulario/>
                <h3 style={h3Style}>Já possui cadastro? <a href="##">Faça Login</a></h3>                
            </div>
            <Background/>
        </section>
    )
}