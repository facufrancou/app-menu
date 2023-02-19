import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';

import CardHomeDash from './CardHomeDash';
import PieChartDash from './PieChartDash';
import NavBar from './NavBar';

import '../../styles/dashboard.css';

let dataSales = require('../../data/sales.json');


const AnnualSales = () => {

    let actualDate = new Date();
    let actualYear = actualDate.getFullYear();

    let annualSales = dataSales.filter( sale => {

        let dateJSON = new Date( sale.date );
        let yearJSON = dateJSON.getFullYear();

        return yearJSON === actualYear;
    })

    annualSales = annualSales.sort( ( a, b ) => b.id - a.id );

    let totalAmountFoods = 0;
    let totalAmountDrinks = 0;

    annualSales.forEach( sale => {
        sale.foods.forEach( food => {
            totalAmountFoods += food.finalPrice
        })
        sale.drinks.forEach( drink => {
            totalAmountDrinks += drink.finalPrice
        })
    })

    const arrayItemsDataChart = [ totalAmountFoods, totalAmountDrinks ];

    const [ chartData, setChartData ] = useState({
        labels: ['Comidas', 'Bebidas'], 
        datasets: [{
            label: "Ganancias",
            data: arrayItemsDataChart.map( amount => amount ),
            backgroundColor: [
                "#AAAAAA",
                "#ECF0F1"
            ],
            borderColor: "black",
            borderWidth: 2,
        }]
    });

    let [ fullSales, setFullSales ] = useState( [] );
    let [ activeSales, setActiveSales ] = useState( [] );
    let [ activeSlice, setActiveSlice ] = useState({
        start: 0,
        end: 10
    });
    let [ activePage, setActivePage ] = useState( 1 );
    let [ search, setSearch ] = useState('');

    useEffect(() => {
        let firstSales = annualSales.slice(0, 10);
        setActiveSales( firstSales );
        setFullSales( annualSales );
    }, []);

    const searchRealTime = (e) => {
        setSearch( e.target.value );
        filter( e.target.value );
    };

    const filter = ( wordSearched ) => {

        let resultSearch = fullSales.filter( ( sale ) => {
            if (
                sale.id
                    .toString()
                    .toLowerCase()
                    .includes( wordSearched.toLowerCase() ) ||
                sale.client
                    .toLowerCase()
                    .includes( wordSearched.toLowerCase() ) ||
                sale.date
                    .toLowerCase()
                    .includes( wordSearched.toLowerCase() )
            ) {
                return sale;
            }
        });

        setActiveSales( resultSearch );

    };

    let numberPages = 0;

    if( fullSales.length % 10 === 0 ){
        numberPages = Math.floor( fullSales.length / 10 );
    } else {
        numberPages = Math.floor( ( fullSales.length / 10 ) + 1 );
    }

    let prevPage = () => {
        if( activePage !== 1 ) {
            setActivePage( activePage - 1 );
            let slicePrueba = {
                start: activeSlice.start - 10,
                end: activeSlice.start
            }
            setActiveSlice({
                start: activeSlice.start - 10,
                end: activeSlice.start
            })
            setActiveSales( fullSales.slice( slicePrueba.start, slicePrueba.end ) );
        }
    }

    let nextPage = () => {
        if( activePage < numberPages ) {
            setActivePage( activePage + 1 );
            let slicePrueba = {
                start: activeSlice.end,
                end: activeSlice.end + 10
            }
            setActiveSlice({
                start: activeSlice.end,
                end: activeSlice.end + 10
            })
            setActiveSales( fullSales.slice( slicePrueba.start, slicePrueba.end ) );
        }
    }

    let changeNumberPage = (e) => {

        let currentPage = e.target.id;

        setActivePage( JSON.parse( currentPage ) );

        let slicePrueba = {
            start: 0,
            end: 0
        }

        if ( currentPage === 1 ) {
            slicePrueba = {
                start: 0,
                end: 10
            }
            setActiveSlice({
                start: 0,
                end: 10
            })
        } else {
            slicePrueba = {
                start: ( 10 * ( currentPage - 1 ) ),
                end: ( 10 * ( currentPage - 1 ) ) + 10
            }
            setActiveSlice({
                start: ( 10 * ( currentPage - 1 ) ),
                end: ( 10 * ( currentPage - 1 ) ) + 10
            })
        }
        setActiveSales( fullSales.slice( slicePrueba.start, slicePrueba.end ) );
    }

    let items = [];
    for ( let number = 1; number <= numberPages; number++ ) {
        items.push(
            <Pagination.Item key={ number } id={ number } active={ number === activePage } onClick={ changeNumberPage }>
                { number }
            </Pagination.Item>,
        );
    }

    return (

        <>
            <NavBar />
            
            <div className='py-5 px-4'>

                <h1>Ventas { actualYear } - Restaurante Saturno</h1>

                <div className='d-flex flex-wrap justify-content-between align-items-center mt-5 mb-3'>

                    <CardHomeDash 
                        icon = 'fa-solid fa-file-invoice-dollar'
                        title = 'Ventas del año'
                        quantity = { annualSales.length }
                    />

                    <CardHomeDash 
                        icon = 'fa-solid fa-money-bill-trend-up'
                        title = 'Ganancias del año'
                        quantity = { `$${ totalAmountFoods + totalAmountDrinks }` }
                    />

                    <PieChartDash 
                        chartData={ chartData } 
                        title='Ganancias comidas-bebidas del año' 
                    />

                </div>

                <InputGroup className='container mb-4' onChange={ searchRealTime }>
                    <InputGroup.Text className='bg-warning text-dark fw-bold' value={ search }>
                        Buscar un pedido:
                    </InputGroup.Text>
                    <Form.Control />
                </InputGroup>

                <Table striped bordered hover className='border-warning'>

                    <thead className='bg-warning border-text'>
                        <tr>
                            <th className='text-dark'>#</th>
                            <th className='text-dark'>Cliente</th>
                            <th className='text-dark'>Categoría</th>
                            <th className='text-dark'>Fecha</th>
                            <th className='text-dark'>Hora</th>
                            <th className='text-dark'>Precio</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        { activeSales.map( ( sale, i ) => {

                            let compra = [];

                            if( sale.foods.length > 0 ) {
                                compra.push('Comidas');
                            }

                            if( sale.drinks.length > 0 ) {
                                compra.push('Bebidas')
                            }

                            return (
                                <tr key={ i }>
                                    <td className='text-light'>{ sale.id }</td>
                                    <td className='text-light'>{ sale.client }</td>
                                    <td className='text-light'>{ compra.join(' & ') }</td>
                                    <td className='text-light'>{ sale.date }</td>
                                    <td className='text-light'>{ sale.time }</td>
                                    <td className='text-light'>${ sale.finalAmount }</td>
                                    <td>
                                        <Link
                                            to={{
                                                pathname: `/dashboard/sales/${ sale.id }`,
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

                { !search && 
                
                    <div className='d-flex justify-content-center'>
                        <Pagination>
                            <Pagination.Prev onClick={ prevPage } />
                            { items }
                            <Pagination.Next onClick={ nextPage } />
                        </Pagination>
                    </div>

                }

            </div>
        </>
        
    )
}

export default AnnualSales;