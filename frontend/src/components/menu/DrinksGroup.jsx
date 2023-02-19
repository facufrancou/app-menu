<<<<<<< HEAD
import { useEffect, useState } from 'react';
=======
>>>>>>> 0d48d105ed5619d292448de499f5236b7b3dd231
import DrinkItem from './DrinkItem';

import '../../styles/drinksGroup.css';

<<<<<<< HEAD

const DrinksGroup = ({ title }) => {

    let [ drinks, setDrinks ] = useState( [] );

    useEffect(() => {

        const getDrinks = async () => {

            let listDrinks = [];

            await fetch('http://localhost:3030/drinks')
                .then(( response ) => response.json())
                .then(( data ) => {
                    listDrinks = data.drinks;
                })
                .catch((e) => console.log(e));

            let drinksFilter = listDrinks.filter( drink => {
                return drink.category.toLowerCase() === title.toLowerCase();
            });

            setDrinks( drinksFilter );
        }

        getDrinks();

    }, []);
=======
let dataDrinks = require('../../data/menuDrinks.json');

const DrinksGroup = ({ title }) => {

    let drinksFilter = dataDrinks.filter( drink => {
        return drink.category.toLowerCase() === title.toLowerCase();
    });
>>>>>>> 0d48d105ed5619d292448de499f5236b7b3dd231

    let iconCategory = '';

    if ( title === 'Cocteles' ) {
        iconCategory = 'fi-rr-cocktail-alt' 
    } else if ( title === 'Cervezas' ) {
        iconCategory = 'fi-rr-beer' 
    } else if ( title === 'Vinos & Espumantes' ) {
        iconCategory = 'fi-rr-bottle' 
    } else {
        iconCategory = 'fi-rr-water-bottle'
    }

    return (

        <>

            <div className='d-flex flex-nowrap ps-3 mb-0'>
                <i className={`fi ${ iconCategory } text-warning`} style={{ fontSize: '1.5rem', marginRight: '0.625rem' }}></i>
                <h2 className='text-start fw-semibold' style={{ fontSize: '1.25rem' }}>{ title }</h2>
            </div>


            <ul style={{ 
                listStyle: 'none',
                marginBottom: '1.5rem',
                height: '27rem',
                width: 'calc(100% - 16px)',
                overflowX: 'scroll',
                whiteSpace: 'nowrap',
                padding: '1rem',
            }}>
<<<<<<< HEAD
                { drinks.map( ({ id, title, price, description, image }) => {
=======
                { drinksFilter.map( ({ id, title, price, description, image }) => {
>>>>>>> 0d48d105ed5619d292448de499f5236b7b3dd231
                    return <DrinkItem id={ id } 
                                    title={ title } 
                                    price={ price } 
                                    description={ description } 
                                    image={ image } 
                                    key={`${ title }-${ id }`} />
                }) }
            </ul>

        </>

    )

}

export default DrinksGroup;