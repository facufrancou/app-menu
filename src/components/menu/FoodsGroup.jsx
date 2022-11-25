import FoodItem from './FoodItem';

import '../../styles/foodsGroup.css';

let dataFoods = require('../../data/menuFoods.json');


const FoodsGroup = ({ title }) => {

    let foodsFilter = dataFoods.filter( food => {
        return food.categorie.toLowerCase() === title.toLowerCase();
    });

    return (

        <>

            <h2 style={{ textTransform: 'uppercase' }}>{ title }</h2>

            <ul style={{ listStyle: 'none', padding: 0 }}>
                { foodsFilter.map( ({ title, id }) => {
                    return <FoodItem title={ title } id={ id } key={`${ title }-${ id }`} />
                }) }
            </ul>

        </>

    )

}

export default FoodsGroup;