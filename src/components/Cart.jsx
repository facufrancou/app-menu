import { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';

import CartItem from './CartItem';

let dataFoods = require('../data/menuFoods.json');
let dataDrinks = require('../data/menuDrinks.json');


function Cart() {

    let [ name, setName ] = useState( false );
    let [ table, setTable ] = useState( false ); 
    let [ finalFoodsCart, setFinalFoodsCart ] = useState( [] );  
    let [ finalDrinksCart, setFinalDrinksCart ] = useState( [] );  
    let [ finalPrice, setFinalPrice ] = useState( 0 );  

    useEffect(() => {

        let cliente = localStorage.getItem('cliente');

        cliente = JSON.parse( cliente );
        
        setName( cliente.nombre );
        setTable( cliente.mesa );

        let cartFoods = JSON.parse( localStorage.getItem('cartFoods') );

        let cartDrinks = JSON.parse( localStorage.getItem('cartDrinks') );

        let lastFoodsCart = [];

        dataFoods.forEach( foodMenu => {
            cartFoods.forEach( foodSession => {
                
                if( foodMenu.id === foodSession.id ) {
                    lastFoodsCart.push({
                        ...foodMenu,
                        quantity: foodSession.quantity
                    })
                }
            })
        })

        setFinalFoodsCart( lastFoodsCart );

        let lastDrinksCart = [];

        dataDrinks.forEach( drinkMenu => {
            cartDrinks.forEach( drinkSession => {
                
                if( drinkMenu.id === drinkSession.id ) {
                    lastDrinksCart.push({
                        ...drinkMenu,
                        quantity: drinkSession.quantity
                    })
                }
            })
        })

        setFinalDrinksCart( lastDrinksCart );

        let priceFoods = lastFoodsCart.reduce( ( acum, food ) => {
            return acum + ( food.price * food.quantity );
        }, 0);

        let priceDrinks = lastDrinksCart.reduce( ( acum, drink ) => {
            return acum + ( drink.price * drink.quantity );
        }, 0);

        setFinalPrice( priceFoods + priceDrinks );
      
    }, [])
    

    return (

        <main className='py-5 px-3'>
            <h1 className='text-white fs-1' style={{ marginBottom: '2.5rem' }}>Mi pedido</h1>
            <p className='text-white text-start'>Comidas: { finalFoodsCart.length }</p>

            <ul className='text-start p-0 mb-4' style={{ listStyle: 'none' }}>
                { finalFoodsCart.map( ({ id, title, category, price, quantity }) => {
                    return <CartItem key={ id } title={ title } category={ category } price={ price } quantity={ quantity } />
                })}
            </ul>

            <p className='text-white text-start'>Bebidas: { finalDrinksCart.length }</p>

            <ul className='text-start p-0 mb-4' style={{ listStyle: 'none' }}>
                { finalDrinksCart.map( ({ id, title, category, price, quantity }) => {
                    return <CartItem key={ id } title={ title } category={ category } price={ price } quantity={ quantity } />
                })}
            </ul>

            <div className='mt-5 mx-3 mb-4'>

                <div className='d-flex justify-content-between mb-2'>
                    <p className='fw-semibold m-0'>Subtotal</p>
                    <p className='fw-bolder m-0'>${ finalPrice }</p>
                </div>
                <div className='d-flex justify-content-between mb-2'>
                    <p className='fw-semibold m-0'>IVA</p>
                    <p className='fw-bolder m-0'>${ finalPrice * 0.21 }</p>
                </div>
                <div className='d-flex justify-content-between pt-1 border-top border-white'>
                    <p className='fw-semibold' style={{ fontSize: '1.125rem' }}>Total</p>
                    <p className='fw-bolder text-warning' style={{ fontSize: '1.125rem' }}>${ finalPrice + ( finalPrice * 0.21 ) }</p>
                </div>

            </div>

            <Button variant='warning' className='fw-bold rounded-pill py-3' style={{ width: '160px' }}>Hacer pedido</Button>

        </main>

    )
}

export default Cart;