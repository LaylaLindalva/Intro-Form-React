import './Button.css'

const Button = ({text, subTexto, span, color}) => {
    return(
        <>
        <button>{text}</button>
        <p className='para'>{subTexto}<span style={{color: color}}>{span}</span></p>
        </>
    )
} 

export default Button;