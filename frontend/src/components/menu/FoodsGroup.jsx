import FoodItem from './FoodItem';

import '../../styles/foodsGroup.css';

let dataFoods = require('../../data/menuFoods.json');


const FoodsGroup = ({ title }) => {

    let foodsFilter = dataFoods.filter( food => {
        return food.category.toLowerCase() === title.toLowerCase();
    });

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
                { foodsFilter.map( ({ id, title, price, description, image }) => {
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