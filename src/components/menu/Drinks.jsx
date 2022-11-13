import React from 'react';

import Button from 'react-bootstrap/Button';

import DrinksGroup from './DrinksGroup';

let categories = require('../../data/categoriesDrinks.json');


const Drinks = () => {

    return (

        <main className='drinks-page' bg='success'>

            <div className='drinks-button' style={{ margin: '1rem 0' }}>
                <Button variant='warning'>Ir al menú de COMIDAS</Button>
            </div>

            <div className='drinks-page-content'>
                {
                    categories.map( categoria => {
                        return <div className='drinks-group'><DrinksGroup title={ categoria } /></div>
                    })
                }
            </div>

            <div className='drinks-checkout-button' style={{ margin: '1rem 0' }}>
                <Button variant='warning'>Facturar pedido</Button>
            </div>

        </main>

    )

}

export default Drinks;