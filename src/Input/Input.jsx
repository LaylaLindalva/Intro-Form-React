import './Input.css'

const Input = ({type, textoInput}) => {
    return(
        <input type={type} placeholder={textoInput} />
    )
}

export default Input;