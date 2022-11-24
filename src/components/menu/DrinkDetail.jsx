import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';

import coctel from "../../assets/coctel.jpg";

const DrinkDetail = ( props ) => {

    const [ quantity, setQuantity ] = useState( 0 );

    let resQuantity = () => {
        setQuantity( quantity - 1 );
    }
    let sumQuantity = () => {
        setQuantity( quantity + 1 );
    }

    return (

        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header style={{ backgroundColor: '#FFC107' }} closeButton>
                <Modal.Title id="contained-modal-title-vcenter" style={{ color: 'black' }}>
                    { props.title }
                </Modal.Title>
            </Modal.Header>

            <Modal.Body style={{ backgroundColor: 'black' }}>
                <img src={ coctel } alt="Imagen de coctel" className='modal-img' />
                <p className='modal-description-drink'><strong>Descripción: </strong>Mirra, ruibarbo, manzanilla, cardamomo, azafrán y alcohol de uva.</p>
            </Modal.Body>

            <Modal.Footer style={{ backgroundColor: 'black' }}>
                <div className='modal-price-box'>
                    <p className='modal-price'>Precio: $10000</p>
                    <div className='modal-drink-amount'>
                        <i className="fa-solid fa-minus" style={{ cursor: 'pointer' }} onClick={ resQuantity } />
                        <p className='modal-drink-amount-number'>{ quantity }</p>
                        <i className="fa-solid fa-plus" style={{ cursor: 'pointer' }} onClick={ sumQuantity } />
                    </div>
                </div>
            </Modal.Footer>
        </Modal>

    )
}

export default DrinkDetail;