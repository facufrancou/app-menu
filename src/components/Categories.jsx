import React from 'react';
import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';

const Categories = () => {
    const navigate = useNavigate();
    const nextPage = () => {
        navigate("/foods");
    };
    

    return (
        
        <main className='categories'>

            <h2>Hola nombre</h2>

            <p>Acá podes elegir que comer o que tomar...</p>

            <div className='container' >
                <Button onClick={nextPage} className='container col-md-12' variant='success'>Menú de comidas</Button>
                <br />
                <br />
                <Button className='container col-md-12' variant='success'>Menú de bebidas</Button>
            </div>
            
        </main>

    )

}

export default Categories;