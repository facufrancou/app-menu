import React from 'react';

import Button from 'react-bootstrap/Button';

import FoodsGroup from './FoodsGroup';



const Foods = () => {

    return (

        <main className='foods-page' bg='success'>

            <div className='foods-button'>
                <Button variant='warning'>Ir al menú de BEBIDAS</Button>
            </div>

            <div className='foods-page-content'>

                <div className="foods-group">
                    <FoodsGroup title= 'Sandwiches' />
                </div>

                <div className="foods-group">
                    <FoodsGroup title= 'Papas' />
                </div>

                <div className="foods-group">
                    <FoodsGroup title= 'Pizzas' />
                </div>

                <div className="foods-group">
                    <FoodsGroup title= 'Burgers' />
                </div>

            </div>

            <div className='foods-checkout-button'>
                <Button variant='warning'>Facturar pedido</Button>
            </div>

        </main>

    )

}

export default Foods