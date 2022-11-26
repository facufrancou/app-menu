import DrinkItem from './DrinkItem';

import '../../styles/drinksGroup.css';

let dataDrinks = require('../../data/menuDrinks.json');

const DrinksGroup = ({ title }) => {

    let drinksFilter = dataDrinks.filter( drink => {
        return drink.category.toLowerCase() === title.toLowerCase();
    });

    return (

        <>

            <h2 style={{ textTransform: 'uppercase' }}>{ title }</h2>

            <ul style={{ listStyle: 'none', padding: 0 }}>
                { drinksFilter.map( ({ title, id }) => {
                    return <DrinkItem title={ title } id={ id } key={`${ title }-${ id }`} />
                }) }
            </ul>

        </>

    )

}

export default DrinksGroup;