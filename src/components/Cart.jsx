import { useEffect, useState } from 'react';

let dataFoods = require('../data/menuFoods.json');
let dataDrinks = require('../data/menuDrinks.json');


function Cart() {

    let [ name, setName ] = useState( false );
    let [ table, setTable ] = useState( false ); 
    let [ finalFoodsCart, setFinalFoodsCart ] = useState( [] );  
    let [ finalDrinksCart, setFinalDrinksCart ] = useState( [] );  

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
      
    }, [])
    

    return (

        <>
            <h1 style={{ color: 'white' }}>{ name }</h1>
            <p>Mesa: { table }</p>

            <ul>
                { finalFoodsCart.map( ({ title }) => {
                    return <li style={{ color: 'white' }} >{ title }</li>
                })}
            </ul>

            <ul>
                { finalDrinksCart.map( ({ title }) => {
                    return <li style={{ color: 'white' }}>{ title }</li>
                })}
            </ul>

        </>

    )
}

export default Cart;