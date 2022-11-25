import Modal from 'react-bootstrap/Modal';

import hamburguesa from "../../assets/hamburguesa.jpg";


const FoodDetail = ( props ) => {

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
                <img src={ hamburguesa } alt="Imagen de hamburguesa" className='modal-img' />
                <p className='modal-description-food'><strong>Descripción: </strong>180gr de carne, lechuga, tomate, cebolla, queso americano, tocineta y salsas tradicionales.</p>
            </Modal.Body>

            <Modal.Footer style={{ backgroundColor: 'black' }}>
                <div className='modal-price-box'>
                    <p className='modal-price'>Precio: $20000</p>
                    <div className='modal-food-amount'>
                        <i className="fa-solid fa-minus" style={{ cursor: 'pointer' }} onClick={ props.resQuantity } />
                        <p className='modal-food-amount-number'>{ props.quantity }</p>
                        <i className="fa-solid fa-plus" style={{ cursor: 'pointer' }} onClick={ props.sumQuantity } />
                    </div>
                </div>
            </Modal.Footer>
        </Modal>

    )
}

export default FoodDetail;