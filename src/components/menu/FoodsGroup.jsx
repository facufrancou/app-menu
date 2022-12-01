import FoodItem from './FoodItem';

import '../../styles/foodsGroup.css';

let dataFoods = require('../../data/menuFoods.json');


const FoodsGroup = ({ title }) => {

    let foodsFilter = dataFoods.filter( food => {
        return food.category.toLowerCase() === title.toLowerCase();
    });

    return (

        <>

            <h2 style={{ textTransform: 'uppercase' }}>{ title }</h2>

            <ul style={{ listStyle: 'none', padding: 0 }}>
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