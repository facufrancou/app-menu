import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

import NavBar from './NavBar';

let dataDrinks = require('../../data/menuDrinks.json');


const DrinksDash = () => {

    return (

        <>

            <NavBar />
            
            <div className='py-5 px-4'>

                <h1 className='mb-4'>Lista de bebidas</h1>
                
                <Table striped bordered hover className='border-warning'>
                    <thead className='bg-warning border-text'>
                        <tr>
                            <th className='text-dark'>#</th>
                            <th className='text-dark'>Título</th>
                            <th className='text-dark'>Categoría</th>
                            <th className='text-dark'>Descripción</th>
                            <th className='text-dark'>Precio</th>
                            <th className='text-dark'>Disponible</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { dataDrinks.map( ( drink, i ) => {
                            return (
                                <tr key={ i }>
                                    <td className='text-light'>{ drink.id }</td>
                                    <td className='text-light'>{ drink.title }</td>
                                    <td className='text-light text-capitalize'>{ drink.category }</td>
                                    <td className='text-light'>{ drink.description }</td>
                                    <td className='text-light'>${ drink.price }</td>
                                    <td className='text-light'>
                                        { drink.available ? 'Sí' : 'No' }
                                    </td>
                                    <td>
                                        <Link
                                            to={{
                                                pathname: `/dashboard/drinks/${ drink.id }`,
                                            }}
                                            className='text-warning'
                                        >
                                        Ver detalle
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>

            </div>
        

        </>

    )
}

export default DrinksDash;