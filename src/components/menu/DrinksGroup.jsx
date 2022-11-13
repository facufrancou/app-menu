import '../../styles/drinksGroup.css';

let dataDrinks = require('../../data/menuDrinks.json');

const DrinksGroup = ({ title }) => {

    let quantity = 1;

    let drinksFilter = dataDrinks.filter( drink => {
        return drink.categorie.toLowerCase() === title.toLowerCase();
    });

    return (

        <>

            <h2 style={{ textTransform: 'uppercase' }}>{ title }</h2>

            <ul style={{ listStyle: 'none', padding: 0 }}>
                { drinksFilter.map( ({ title, id }) => {
                    return (
                        <li key={ id } className='item-drink'>
                            <h4>{ title }</h4>
                            <div className='drink-amount'>
                                <i className="fa-solid fa-minus" style={{ cursor: 'pointer' }} />
                                <p className='drink-amount-number'>{ quantity }</p>
                                <i className="fa-solid fa-plus" style={{ cursor: 'pointer' }} />
                            </div>
                        </li>
                    )
                }) }
            </ul>

        </>

    )

}

export default DrinksGroup;