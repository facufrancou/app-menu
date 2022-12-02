import DrinkItem from './DrinkItem';

import '../../styles/drinksGroup.css';

let dataDrinks = require('../../data/menuDrinks.json');

const DrinksGroup = ({ title }) => {

    let drinksFilter = dataDrinks.filter( drink => {
        return drink.category.toLowerCase() === title.toLowerCase();
    });

    let iconCategory = '';

    if ( title === 'Cocteles' ) {
        iconCategory = 'fa-martini-glass-citrus' 
    } else if ( title === 'Cervezas' ) {
        iconCategory = 'fa-beer-mug-empty' 
    } else if ( title === 'Vinos & Espumantes' ) {
        iconCategory = 'fa-wine-glass' 
    } else {
        iconCategory = 'fa-bottle-water' 
    }

    return (

        <>

            <div className='d-flex flex-nowrap ps-3 mb-0'>
                <i className={`fa-solid ${ iconCategory } text-warning`} style={{ fontSize: '1.5rem', marginRight: '0.625rem' }}></i>
                <h2 className='text-start fw-semibold' style={{ fontSize: '1.25rem' }}>{ title }</h2>
            </div>


            <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                marginBottom: '1.5rem',
                height: '27rem',
                width: 'calc(100% - 16px)',
                overflowX: 'scroll',
                whiteSpace: 'nowrap',
                padding: '1rem',
            }}>
                { drinksFilter.map( ({ id, title, price, description, image }) => {
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