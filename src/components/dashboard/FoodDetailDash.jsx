import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import NavBar from './NavBar';

let dataFoods = require('../../data/menuFoods.json');


const FoodDetailDash = () => {

    let { id } = useParams();
    id = JSON.parse( id );

    let [ isLoad, setLoad ] = useState( true );
    let [ food, setFood ] = useState(0);

    useEffect(() => {

        let foodFromJSON = dataFoods.filter( foodJSON => foodJSON.id === id );
        setFood( foodFromJSON[0] );    
        setLoad( false );

    }, [])

    const navigate = useNavigate();

    const nextPageEdit = () => {
        navigate(`/dashboard/foods/edit/${ food.id }`);
    };

    const unavailableFood = () => {
        
        let newJSONFoods = [];

        dataFoods.forEach( foodJSON => {
            if( foodJSON.id === food.id ) {
                newJSONFoods.push({
                    ...food,
                    available: false
                })
            } else {
                newJSONFoods.push( food )
            }
        })

        navigate('/dashboard/foods');
    };

    return (

        <>
        
            <NavBar />

            <div className='p-5'>

                <h1 className='d-block w-100 mb-5 pb-3 border-bottom border-3 border-warning'>{ food.title }</h1>

                <div className='d-flex flex-wrap justify-content-between align-items-center'>

                    <div className='col-12 col-lg-4 mx-auto'>
                        { !isLoad && 
                            <img src={ require(`../../assets/${ food.image }`) } alt={`Imagen de ${ food.title }`} style={{ width: '100%', maxWidth: '350px' }} className='mb-3' /> 
                        }
                        <div className='d-flex justify-content-evenly align-items-center mb-4'>
                            <Button variant='warning' className='fw-bold' onClick={ nextPageEdit }>Editar comida</Button>
                            <Button variant='danger' className='fw-bold' onClick={ unavailableFood }>Quitar disponibilidad</Button>
                        </div>
                    </div>

                    <div className='col-12 col-lg-8 mx-auto'>
                        <p className='text-start pb-3 border-bottom border-light'><strong className='text-warning fw-bold'>ID: </strong>{ food.id }</p>
                        <p className='text-start pb-3 border-bottom border-light text-capitalize'><strong className='text-warning fw-bold'>Categoría: </strong>{ food.category }</p>
                        <p className='text-start pb-3 border-bottom border-light'><strong className='text-warning fw-bold'>Descripción: </strong>{ food.description }</p>
                        <p className='text-start pb-3 border-bottom border-light'><strong className='text-warning fw-bold'>Precio: </strong>${ food.price }</p>
                        <p className='text-start'><strong className='text-warning fw-bold'>Disponible: </strong>{ food.available ? 'Sí' : 'No' }</p>
                    </div>

                </div>

            </div>

        </>

    )
}

export default FoodDetailDash;