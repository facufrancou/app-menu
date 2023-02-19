import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavBar from './NavBar';

let dataFoods = require('../../data/menuFoods.json');


const EditFoodDash = () => {

    let { id } = useParams();
    id = JSON.parse( id );

    let [ isLoad, setLoad ] = useState( true );
    let [ food, setFood ] = useState(0);

    useEffect(() => {

        let foodFromJSON = dataFoods.filter( foodJSON => foodJSON.id === id );
        setFood( foodFromJSON[0] );
        setLoad( false );

    }, [])

    return (

        <>
        
            <NavBar />

            <div className='p-5'>

                <h1 className='d-block w-100 mb-5 pb-3 border-bottom border-3 border-warning'>Editando la comida: { food.title }</h1>

                <Form>

                    { !isLoad && 
                        <img src={ require(`../../assets/${ food.image }`) } alt={`Imagen de ${ food.title }`} style={{ width: '250px', boxShadow: '8px 6px 8px rgb(255,193,7)' }} className='rounded mb-3' /> 
                    }

                    <Form.Group className="col-md-8 mx-auto mb-3">
                        <Form.Label for='id' className='d-block text-start fw-bold' style={{ fontSize: '1.25rem' }}>ID:</Form.Label>
                        <Form.Control type="text" id="id" placeholder="Ej: Del Campo" defaultValue={ food.id } className='bg-transparent border-warning text-light' disabled />
                    </Form.Group>

                    <Form.Group className="col-md-8 mx-auto mb-3">
                        <Form.Label for='title' className='d-block text-start fw-bold' style={{ fontSize: '1.25rem' }}>Título:</Form.Label>
                        <Form.Control type="text" id="title" placeholder="Ej: Del Campo" defaultValue={ food.title } className='bg-transparent border-warning text-light' />
                    </Form.Group>

                    <Form.Group className="col-md-8 mx-auto mb-3">
                        <Form.Label for='category' className='d-block text-start fw-bold' style={{ fontSize: '1.25rem' }}>Categoría:</Form.Label>
                        <Form.Control type="text" id="category" placeholder="Ej: Del Campo" defaultValue={ food.category } className='bg-transparent border-warning text-light text-capitalize' />
                    </Form.Group>

                    <Form.Group className="col-md-8 mx-auto mb-3">
                        <Form.Label for='description' className='d-block text-start fw-bold' style={{ fontSize: '1.25rem' }}>Descripción:</Form.Label>
                        <Form.Control type="text" id="description" placeholder="Ej: Del Campo" defaultValue={ food.description } className='bg-transparent border-warning text-light text-capitalize' />
                    </Form.Group>

                    <Form.Group className="col-md-8 mx-auto mb-3">
                        <Form.Label for='price' className='d-block text-start fw-bold' style={{ fontSize: '1.25rem' }}>Precio:</Form.Label>
                        <Form.Control type="text" id="price" placeholder="Ej: Del Campo" defaultValue={ food.price } className='bg-transparent border-warning text-light text-capitalize' />
                    </Form.Group>

                    <Button variant='warning' className='fw-bold py-2 mt-4'>Editar comida</Button>

                </Form>
            </div>

        
        </>

    )
}

export default EditFoodDash;