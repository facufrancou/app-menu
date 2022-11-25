import { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';

import DrinkDetail from './DrinkDetail';

const DrinkItem = ({ title, id }) => {

    const [ quantity, setQuantity ] = useState( 0 );

    const [ modalShow, setModalShow ] = useState( false );

    useEffect(() => {
        let arrayCart = localStorage.getItem('cartDrinks');
    
        arrayCart = arrayCart ? JSON.parse( arrayCart ) : [];
    
        let itemSelected = arrayCart ? arrayCart.find( itemArray => itemArray.id === id ) : null;
    
        itemSelected = itemSelected ? setQuantity( itemSelected.quantity ) : 0;
    }, []);

    let resQuantity = () => {

        if ( quantity > 0 ) {
            setQuantity( quantity - 1 );
    
            let item = {
                id: id,
                quantity: quantity - 1
            }
    
            let arrayExisting = localStorage.getItem('cartDrinks');
            
            arrayExisting = arrayExisting ? JSON.parse( arrayExisting ) : [];
    
            if( arrayExisting.find( itemArray => itemArray.id === item.id ) ) {
                arrayExisting.map( itemArray => {
                    if ( itemArray.id === item.id ) {
                        return itemArray.quantity -= 1;
                    }
                    return itemArray.quantity;
                })
            } else {
                arrayExisting.push( item );
            }
    
            localStorage.setItem( 'cartDrinks', JSON.stringify( arrayExisting ) );
        }


    }

    let sumQuantity = () => {

        setQuantity( quantity + 1 );
        
        let item = {
            id: id,
            quantity: quantity + 1
        }

        let arrayExisting = localStorage.getItem('cartDrinks');
        
        arrayExisting = arrayExisting ? JSON.parse( arrayExisting ) : [];

        if( arrayExisting.find( itemArray => itemArray.id === item.id ) ) {
            arrayExisting.map( itemArray => {
                if ( itemArray.id === item.id ) {
                    return itemArray.quantity += 1;
                }
                return itemArray.quantity;
            })
        } else {
            arrayExisting.push( item );
        }

        localStorage.setItem( 'cartDrinks', JSON.stringify( arrayExisting ) );

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
                id={ id }
                quantity={ quantity }
                resQuantity={ resQuantity }
                sumQuantity={ sumQuantity }
            />

        </>

    )

}

export default DrinkItem;