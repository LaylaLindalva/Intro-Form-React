import Button from '../Button/Button';
import Input from '../Input/Input';
import Texto from '../Texto/Texto';
import Titulo from '../Titulo/Titulo';
import './App.css'

const App = () => {
    return(
        <section className='principal'>
            <div className='div-1'>
            <Titulo titulo="Lear to code by watching others"/>
            <Texto texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptatem sit incidunt placeat laborum deserunt reiciendis quaerat porro! Sunt quo explicabo repellendus voluptates porro"/></div>
            <div>
            <article className='info'>
                 <Texto texto="Try it free 7 days the $20/mo. thereafter"/>   
                </article>
            <section className='container'>
                <Input type="text" textoInput="Name"/>
                <Input type="text" textoInput="Last Name"/>
                <Input type="email" textoInput="Email Address"/>
                <Input type="password" textoInput="Password"/>
                <Button text="CLAIM YOUR FREE TRIAL" subTexto="By clicking tho button
                , you are agreeing to our" span="Terms and Services" color="red"/>
            </section>
            </div>
        </section>
    )
}

export default App;