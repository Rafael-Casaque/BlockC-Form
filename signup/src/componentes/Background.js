import Sticker from "./sticker.jpg";

const backgroundStyle = {
    backgroundColor: "#05b4cd",
    width: "66%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
}
const h3Style = {
    fontWeight: "600",
    fontSize: "4vh"
}
const imgStyle = {
    width: "60vh",
}

export default function Background(){
    return(
        <div style={backgroundStyle}>
            <h3 style={h3Style}>Ame o que faz e seja mais produtivo!</h3>
            <img style={imgStyle} src={Sticker} alt="figura de um homem sentado a frente do computador"/>
        </div>
    )
}