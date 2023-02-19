import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

import NavBar from './NavBar';

let dataFoods = require('../../data/menuFoods.json');


const FoodsDash = () => {

    return (

        <>

            <NavBar />
            
            <div className='py-5 px-4'>

                <h1 className='mb-4'>Lista de comidas</h1>
                
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
                        { dataFoods.map( ( food, i ) => {
                            return (
                                <tr key={ i }>
                                    <td className='text-light'>{ food.id }</td>
                                    <td className='text-light'>{ food.title }</td>
                                    <td className='text-light text-capitalize'>{ food.category }</td>
                                    <td className='text-light'>{ food.description }</td>
                                    <td className='text-light'>${ food.price }</td>
                                    <td className='text-light'>
                                        { food.available ? 'Sí' : 'No' }
                                    </td>
                                    <td>
                                        <Link
                                            to={{
                                                pathname: `/dashboard/foods/${ food.id }`,
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

export default FoodsDash;