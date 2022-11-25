import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import DrinksGroup from './DrinksGroup';

let categories = require('../../data/categoriesDrinks.json');


const Drinks = () => {

    const navigate = useNavigate();

    const nextPageFoods = () => {
        navigate("/foods");
    };

    const nextPageCart = () => {
        navigate("/cart");
    };

    return (

        <main className='drinks-page' bg='success'>

            <div className='drinks-button' style={{ margin: '1rem 0' }}>
                <Button onClick={ nextPageFoods } variant='warning'>Ir al menú de COMIDAS</Button>
            </div>

            <div className='drinks-page-content'>
                {
                    categories.map( categoria => {
                        return <div className='drinks-group' key={ categoria }><DrinksGroup title={ categoria } /></div>
                    })
                }
            </div>

            <div className='drinks-checkout-button' style={{ margin: '1rem 0' }}>
                <Button onClick={ nextPageCart } variant='warning'>Facturar pedido</Button>
            </div>

        </main>

    )

}

export default Drinks;