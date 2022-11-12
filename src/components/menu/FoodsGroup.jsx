/* import { useState } from 'react'; */

import '../../styles/foodsGroup.css';

let dataFoods = require('../../data/menuFood.json');

const FoodsGroup = ({ title }) => {

    /* const [quantity, setQuantity] = useState( 1 ); */
    let quantity = 1;

    let foodsFilter = dataFoods.filter( food => {
        return food.categorie.toLowerCase() === title.toLowerCase();
    });

    /* let sumProduct = () => {
        setQuantity( quantity + 1 )
    } 

    let resProduct = () => {
        setQuantity( quantity - 1 )
    } */

    return (

        <>

            <h2 style={{ textTransform: 'uppercase' }}>{ title }</h2>

            <ul style={{ listStyle: 'none', padding: 0 }}>
                { foodsFilter.map( ({ title, id }) => {
                    return (
                        <li key={ id } className='item-food'>
                            <h4>{ title }</h4>
                            <div className='food-amount'>
                                <i className="fa-solid fa-minus" style={{ cursor: 'pointer' }} /* onClick={ resProduct } */></i>
                                <p className='food-amount-number'>{ quantity }</p>
                                <i className="fa-solid fa-plus" style={{ cursor: 'pointer' }} /* onClick={ sumProduct } */></i>
                            </div>
                        </li>
                    )
                }) }
            </ul>

            {/* <ul>
                <li>
                    <h4>Del Campo</h4>
                    <div className='food-amount'>
                        <i>+</i>
                        <p>1</p>
                        <i>-</i>
                    </div>
                </li>

                <li>
                    <h4>Lomito</h4>
                    <div className='food-amount'>
                        <i>+</i>
                        <p>1</p>
                        <i>-</i>
                    </div>
                </li>

                <li>
                    <h4>Jon Snow</h4>
                    <div className='food-amount'>
                        <i>+</i>
                        <p>1</p>
                        <i>-</i>
                    </div>
                </li>

                <li>
                    <h4>Milanesa</h4>
                    <div className='food-amount'>
                        <i>+</i>
                        <p>1</p>
                        <i>-</i>
                    </div>
                </li>

            </ul> */}

        </>

    )

}

export default FoodsGroup;