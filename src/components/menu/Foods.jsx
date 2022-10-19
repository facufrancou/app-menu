import React from 'react';

import Button from 'react-bootstrap/Button';

import FoodsGroup from './FoodsGroup';

import MenuCard from './menuCard';


/* let datafoods = require('../../data/menuFood')

function filtrar(parametro){
    datafoods.filter((data)=>{
        return data.categorie === parametro
    })
}
 */

const Foods = () => {

    return (

        <main className='foods-page' bg='success'>

            <div className='foods-button'>
                <Button variant='warning'>Ir al menú de BEBIDAS</Button>
            </div>

            <div className='foods-page-content'>

                <div className="foods-group">
                    <FoodsGroup title='Sandwiches' />
                    <MenuCard title="comida" price="1" description="descripcion"/>
                </div>

                <div className="foods-group">
                    <FoodsGroup title='Papas' />
                </div>

                <div className="foods-group">
                    <FoodsGroup title='Pizzas' />
                </div>

                <div className="foods-group">
                    <FoodsGroup title='Burgers' />
                </div>

            </div>

            <div className='foods-checkout-button'>
                <Button variant='warning'>Facturar pedido</Button>
            </div>

        </main>

    )

}

export default Foods