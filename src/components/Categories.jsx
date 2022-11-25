import { useEffect, useState } from 'react';

import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';

const Categories = () => {

    let [ nombre, setNombre ] = useState( false );

    useEffect(() => {

        let cliente = localStorage.getItem('cliente');

        cliente = JSON.parse( cliente );

        setNombre( cliente.nombre );

    }, []);

    const navigate = useNavigate();

    const nextPageFoods = () => {
        navigate("/foods");
    };

    const nextPageDrinks = () => {
        navigate("/drinks");
    };

    return (
        
        <main className='categories' style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

            <h2>Hola { nombre }</h2>

            <p>Acá podes elegir que comer o que tomar...</p>

            <div className='container' >
                <Button onClick={ nextPageFoods } className='container col-md-12' variant='warning'>Menú de comidas</Button>
                <br />
                <br />
                <Button onClick={ nextPageDrinks } className='container col-md-12' variant='warning'>Menú de bebidas</Button>
            </div>
            
        </main>

    )

}

export default Categories;