import { useState } from 'react';

import Button from 'react-bootstrap/Button';

import DrinkDetail from './DrinkDetail';

const DrinkItem = ({ title }) => {

    const [ quantity, setQuantity ] = useState( 0 );

    const [ modalShow, setModalShow ] = useState( false );

    let resQuantity = ( event ) => {
        event.preventDefault();
        setQuantity( quantity - 1 );
    }
    let sumQuantity = ( event ) => {
        event.preventDefault();
        setQuantity( quantity + 1 );
    }

    return (

        <>

            <Button variant="primary" className='item-drink' onClick={() => setModalShow(true)}>
                <div>
                    <h4>{ title }</h4>
                </div>
                <div className='drink-amount'>
                    <i className="fa-solid fa-minus" style={{ cursor: 'pointer' }} onClick={ resQuantity } />
                    <p className='drink-amount-number'>{ quantity }</p>
                    <i className="fa-solid fa-plus" style={{ cursor: 'pointer' }} onClick={ sumQuantity } />
                </div>
            </Button>

            <DrinkDetail
                show={ modalShow }
                onHide={() => setModalShow( false )}
                title={ title }
                quantity={ quantity }
            />

        </>

    )

}

export default DrinkItem;