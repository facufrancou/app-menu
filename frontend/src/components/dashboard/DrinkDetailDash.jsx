import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import NavBar from './NavBar';

<<<<<<< HEAD
import authenticatedRoute from '../../auth/AuthenticatedRoute';
=======
let dataDrinks = require('../../data/menuDrinks.json');
>>>>>>> 0d48d105ed5619d292448de499f5236b7b3dd231


const DrinkDetailDash = () => {

    let { id } = useParams();
    id = JSON.parse( id );

    let [ isLoad, setLoad ] = useState( true );
    let [ drink, setDrink ] = useState(0);

    useEffect(() => {

<<<<<<< HEAD
        fetch(`http://localhost:3030/drinks/${ id }`)
            .then(( response ) => response.json())
            .then(( data ) => {
                setDrink( data.drink );
            })
            .catch((e) => console.log(e));
        setLoad( false );

    }, []);
=======
        let drinkFromJSON = dataDrinks.filter( drinkJSON => drinkJSON.id === id );
        setDrink( drinkFromJSON[0] );    
        setLoad( false );

    }, [])
>>>>>>> 0d48d105ed5619d292448de499f5236b7b3dd231

    const navigate = useNavigate();

    const nextPageEdit = () => {
        navigate(`/dashboard/drinks/edit/${ drink.id }`);
    };

    const unavailableDrink = () => {
        
<<<<<<< HEAD
        fetch(`http://localhost:3030/drinks/unavailable/${ id }`, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify( drink ),
        })
            .then(response => response.json())
=======
        let newJSONDrinks = [];

        dataDrinks.forEach( drinkJSON => {
            if( drinkJSON.id === drink.id ) {
                newJSONDrinks.push({
                    ...drink,
                    available: false
                })
            } else {
                newJSONDrinks.push( drink )
            }
        })
>>>>>>> 0d48d105ed5619d292448de499f5236b7b3dd231

        navigate('/dashboard/drinks');
    };

    return (

        <>
        
            <NavBar />

            <div className='p-5'>

                <h1 className='d-block w-100 mb-5 pb-3 border-bottom border-3 border-warning'>{ drink.title }</h1>

                <div className='d-flex flex-wrap justify-content-between align-items-center'>

                    <div className='col-12 col-lg-4 mx-auto'>
                        { !isLoad && 
<<<<<<< HEAD
                            <img src={ `http://localhost:3030/img/drinks/${ drink.image }` } alt={`Imagen de ${ drink.title }`} style={{ width: '100%', maxWidth: '350px' }} className='mb-3' /> 
=======
                            <img src={ require(`../../assets/${ drink.image }`) } alt={`Imagen de ${ drink.title }`} style={{ width: '100%', maxWidth: '350px' }} className='mb-3' /> 
>>>>>>> 0d48d105ed5619d292448de499f5236b7b3dd231
                        }
                        <div className='d-flex justify-content-evenly align-items-center mb-4'>
                            <Button variant='warning' className='fw-bold' onClick={ nextPageEdit }>Editar bebida</Button>
                            <Button variant='danger' className='fw-bold' onClick={ unavailableDrink }>Quitar disponibilidad</Button>
                        </div>
                    </div>

                    <div className='col-12 col-lg-8 mx-auto'>
                        <p className='text-start pb-3 border-bottom border-light'><strong className='text-warning fw-bold'>ID: </strong>{ drink.id }</p>
                        <p className='text-start pb-3 border-bottom border-light text-capitalize'><strong className='text-warning fw-bold'>Categoría: </strong>{ drink.category }</p>
                        <p className='text-start pb-3 border-bottom border-light'><strong className='text-warning fw-bold'>Descripción: </strong>{ drink.description }</p>
                        <p className='text-start pb-3 border-bottom border-light'><strong className='text-warning fw-bold'>Precio: </strong>${ drink.price }</p>
                        <p className='text-start'><strong className='text-warning fw-bold'>Disponible: </strong>{ drink.available ? 'Sí' : 'No' }</p>
                    </div>

                </div>

            </div>

        </>

    )
}

<<<<<<< HEAD
export default authenticatedRoute( DrinkDetailDash );
=======
export default DrinkDetailDash;
>>>>>>> 0d48d105ed5619d292448de499f5236b7b3dd231
