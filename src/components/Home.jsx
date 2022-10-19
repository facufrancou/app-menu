import React from 'react';
import { useNavigate } from 'react-router-dom';

import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import logo from '../assets/logoTL.svg';


const Home = () => {

    const navigate = useNavigate();

    const nextPage = () => {
        navigate('/categories');
    }
    
    const [values, setValues] = React.useState({
        name: "",
        table: "",
    })

    return (

        <main className='home' bg='secondary'>
            
            <div className="img">
                <Image src={ logo } alt="Logo del bar" width={ 250 } height={ 200 } />
            </div>

            <div className="container">

                <h1>Bienvenid@!</h1>
                <p>Para continuar, debes ingresar tu nombre y el número de mesa</p>

                <Form className='container col-md-3 form-home'>
                    <Form.Control type="text" name="name" id="name" placeholder='Nombre' />
                    <br/>
                    <Form.Control type="text" name="table" id="table" placeholder='Número de mesa' />
                    <br/>
                </Form>

            </div>

            <div className="button">
                <Button variant="success" onClick={ nextPage }>Continuar</Button>
            </div>

        </main>

    )

}

export default Home;