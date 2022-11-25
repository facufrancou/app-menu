import React from 'react';

import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import FoodsGroup from './FoodsGroup';

let categories = require('../../data/categoriesFoods.json')


const Foods = () => {

    const navigate = useNavigate();

    const nextPageDrinks = () => {
        navigate("/drinks");
    };

    const nextPageCart = () => {
        navigate("/cart");
    };

    return (

        <main className='foods-page' bg='success'>

            <div className='foods-button' style={{ margin: '1rem 0' }}>
                <Button onClick={ nextPageDrinks } variant='warning'>Ir al menú de BEBIDAS</Button>
            </div>

            <div className='foods-page-content'>
                {
                    categories.map( category => {
                        return <div key={ category } className='foods-group'><FoodsGroup title={ category } /></div>
                    })
                }
            </div>

            <div className='foods-checkout-button' style={{ margin: '1rem 0' }}>
                <Button onClick={ nextPageCart } variant='warning'>Facturar pedido</Button>
            </div>

        </main>

    )

}

export default Foods