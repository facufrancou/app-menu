import React from 'react';

import Button from 'react-bootstrap/Button';

import FoodsGroup from './FoodsGroup';

let categories = require('../../data/categories.json')

/* let sandwich = datafoods.filter((data)=>{
    return data.categorie === "Sandwiches"
}) 

let papas = datafoods.filter((data)=>{
    return data.categorie === "Papas" 
})

let pizza = datafoods.filter((data)=>{
    return data.categorie === "Pizzas"
})

let burger = datafoods.filter((data)=>{
    return data.categorie === "Burgers"
})
*/

/* function filtrar(categoria) {
    let filtrado = datafoods.filter((food) => {
        return food.categorie === categoria
    })
    return filtrado
} */




const Foods = ({name}) => {

    return (

        <main className='foods-page' bg='success'>

            <div className='foods-button' style={{ margin: '1rem 0' }}>
                <Button variant='warning'>Ir al menú de BEBIDAS</Button>
            </div>

            <div className='foods-page-content'>
                {
                    categories.map( category => {
                        return <div key={category} className='foods-group'><FoodsGroup title={ category } /></div>
                    })
                }
            </div>

            <div className='foods-checkout-button' style={{ margin: '1rem 0' }}>
                <Button variant='warning'>Facturar pedido</Button>
            </div>

        </main>

    )

}

export default Foods