export default function Campos(props){

    const labelStyle = {
        display: 'block',
        fontWeight: 'bold',
        fontSize: '3.5vh'
    }

    const InputStyle = {
        width: '95%',
        height: '4.5vh',
        borderRadius: '5px',
        border: '1px solid rgb(156, 156, 156)',
        marginBottom: '5%',
        padding: '0 2.5%',
    }

    return(
        <>
            <label style={labelStyle} for={props.for}>{props.label}:</label>
            <input style={InputStyle} id={props.for} type={props.type} name={props.name}></input>
        </>
    )
}