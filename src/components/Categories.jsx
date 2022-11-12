import React from 'react';

import Button from 'react-bootstrap/Button';

const Categories = () => {

    return (
        
        <main className='categories'>

            <h2>Hola nombre</h2>

            <p>Acá podes elegir que comer o que tomar...</p>

            <div className='container' >
                <Button className='container col-md-12' variant='success'>Menú de comidas</Button>
                <br />
                <br />
                <Button className='container col-md-12' variant='success'>Menú de bebidas</Button>
            </div>
            
        </main>

    )

}

export default Categories;