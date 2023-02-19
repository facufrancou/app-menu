<<<<<<< HEAD
import { useEffect, useState } from 'react';
=======
>>>>>>> 0d48d105ed5619d292448de499f5236b7b3dd231
import FoodItem from './FoodItem';

import '../../styles/foodsGroup.css';

<<<<<<< HEAD

const FoodsGroup = ({ title }) => {

    let [ foods, setFoods ] = useState( [] );

    useEffect(() => {

        const getFoods = async () => {

            let listFoods = [];

            await fetch('http://localhost:3030/foods')
                .then(( response ) => response.json())
                .then(( data ) => {
                    listFoods = data.foods;
                })
                .catch((e) => console.log(e));

            let foodsFilter = listFoods.filter( food => {
                return food.category.toLowerCase() === title.toLowerCase();
            });

            setFoods( foodsFilter );
        }

        getFoods();

    }, []);
=======
let dataFoods = require('../../data/menuFoods.json');


const FoodsGroup = ({ title }) => {

    let foodsFilter = dataFoods.filter( food => {
        return food.category.toLowerCase() === title.toLowerCase();
    });
>>>>>>> 0d48d105ed5619d292448de499f5236b7b3dd231

    let iconCategory = '';

    if ( title === 'Sandwiches' ) {
        iconCategory = 'fi-rr-sandwich' 
    } else if ( title === 'Papas' ) {
        iconCategory = 'fi-rr-french-fries' 
    } else if ( title === 'Pizzas' ) {
        iconCategory = 'fi-rr-pizza-slice' 
    } else {
        iconCategory = 'fi-rr-hamburger' 
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
                { foods.map( ({ id, title, price, description, image }) => {
=======
                { foodsFilter.map( ({ id, title, price, description, image }) => {
>>>>>>> 0d48d105ed5619d292448de499f5236b7b3dd231
                    return <FoodItem id={ id } 
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

export default FoodsGroup;