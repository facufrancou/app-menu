import { useState } from 'react';

import Button from 'react-bootstrap/Button';

import CartItemDetail from './CartItemDetail';

import hamburguesa from '../assets/hamburguesa.jpg'


const CartItem = ({ id, title, category, price, quantity, finalCart, setFinalCart, groupItems }) => {

    const [ modalShow, setModalShow ] = useState( false );

    return (

        <div className='d-flex justify-content-between mb-2 rounded' style={{ height: '6.625rem', backgroundColor: '#232323', padding:'0.625rem' }}>

            <div className='d-flex'>
                <img src={ hamburguesa } alt="Imagen de hamburguesa" className='h-100 rounded' style={{ width:'5.625rem' }} />

                <div className='ms-3'>
                    <h3 className='text-white m-0' style={{ fontSize: '1.25rem' }}>{ title }</h3>
                    <p className='text-white mb-2 text-capitalize m-0'>{ category }</p>
                    <p className='text-warning fw-bold m-0' style={{ fontSize: '1.125rem' }}>${ price }</p>
                </div>
            </div>

            <div className='d-flex flex-column justify-content-between align-items-end mt-1'>
                <Button variant='primary' style={{ backgroundColor: 'transparent', border: 'none' }} onClick={() => setModalShow(true)}>
                    <i className="fa-regular fa-x text-secondary fs-5" />
                </Button>
                <p className='text-white text-decoration-underline m-0' style={{ fontSize: '0.875rem' }}>
                    Cantidad: { quantity }
                </p>
            </div>

            <CartItemDetail
                show={ modalShow }
                onHide={() => setModalShow( false )}
                id={ id }
                finalCart={ finalCart }
                setFinalCart={ setFinalCart }
                groupItems={ groupItems }
            />

        </div>

    )
}

export default CartItem;