<<<<<<< HEAD
import { useEffect, useState } from 'react';
=======
import { useState } from 'react';
>>>>>>> 0d48d105ed5619d292448de499f5236b7b3dd231

import CardHomeDash from './CardHomeDash';
import ChartHomeDash from './BarChartDash';
import NavBar from './NavBar';

<<<<<<< HEAD
import authenticatedRoute from '../../auth/AuthenticatedRoute';
=======
let dataDrinks = require('../../data/menuDrinks.json');
let dataFoods = require('../../data/menuFoods.json');
let dataSales = require('../../data/sales.json');
>>>>>>> 0d48d105ed5619d292448de499f5236b7b3dd231


const HomeDash = () => {

    /* Esto es para guardar la fecha del pedido en el JSON */
    
    /* const si = new Date();
    const fechaJSON = si.getFullYear() + '-' + (si.getMonth() + 1) + '-' + si.getDate(); */


    /* Esto es para obtener el mes */

    /* const nuevaFechaJSON = fechaJSON.replaceAll('-', ', ');
    const dateJSON = new Date( nuevaFechaJSON );
    const mesJSON = dateJSON.getMonth() + 1; */

    /* const fecha = new Date();
    const mesActual = fecha.getMonth() + 1; */

<<<<<<< HEAD
    let [ numberFoods, setNumberFoods ] = useState( 0 );
    let [ numberDrinks, setNumberDrinks ] = useState( 0 );
    let [ numberClients, setNumberClients ] = useState( 0 );
    let [ numberDailySales, setNumberDailySales ] = useState( 0 );
    let [ totalAmountDailySales, setTotalAmountDailySales ] = useState( 0 );
    let [ chartDataWeekly, setChartDataWeekly ] = useState({});
    let [ chartDataMonthly, setChartDataMonthly ] = useState({});
    let [ isLoad, setLoad ] = useState( true );

    useEffect(() => {
        
        const getSales = async () => {

            await fetch('http://localhost:3030/foods')
                .then(( response ) => response.json())
                .then(( data ) => {
                    setNumberFoods( data.foods.length );
            })
                .catch((e) => console.log(e));

            await fetch('http://localhost:3030/drinks')
                .then(( response ) => response.json())
                .then(( data ) => {
                    setNumberDrinks( data.drinks.length );
            })
                .catch((e) => console.log(e));

            await fetch('http://localhost:3030/sales')
                .then(( response ) => response.json())
                .then(( data ) => {
                    setNumberClients( data.numberClients );
                })
                .catch((e) => console.log(e));

            await fetch('http://localhost:3030/sales/daily')
                .then(( response ) => response.json())
                .then(( data ) => {
                    setNumberDailySales( data.sales.length );
                    setTotalAmountDailySales( data.finalAmount );
                })
                .catch((e) => console.log(e));

            let arrayFinalAmountsWeekly = [];
            let arrayNameDatesThisWeek = [];

            await fetch('http://localhost:3030/sales/weekly')
                .then(( response ) => response.json())
                .then(( data ) => {
                    arrayFinalAmountsWeekly = data.arrayFinalAmountsWeekly;
                    arrayNameDatesThisWeek = data.arrayNameDatesThisWeek;
                })
                .catch((e) => console.log(e));

            setChartDataWeekly({
                labels: arrayNameDatesThisWeek, 
                datasets: [{
                    label: "Ganancias",
                    data: arrayFinalAmountsWeekly.map(( data ) => data),
                    backgroundColor: [
                        "#3e4144",
                        "#5e5e5e",
                        "#6f6f6f",
                        "#828282",
                        "#aaaaaa",
                        "#c6c6c6",
                        "#ffffff",
                    ],
                    borderColor: "black",
                    borderWidth: 2
                }]
            });

            let arrayFinalAmountsMonthly = [];

            await fetch('http://localhost:3030/sales/annual')
                .then(( response ) => response.json())
                .then(( data ) => {
                    arrayFinalAmountsMonthly = data.arrayFinalAmountsMonthly;
                })
                .catch((e) => console.log(e));

            setChartDataMonthly({
                labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'], 
                datasets: [{
                    label: "Ganancias",
                    data: arrayFinalAmountsMonthly.map(( data ) => data),
                    backgroundColor: [
                        "#666f88",
                        "#788199",
                        "#8990a2",
                        "#a3a8b7",
                        "#b5bac9",
                        "#c6c6c6",
                        "#aaaaaa",
                        "#828282",
                        "#6f6f6f",
                        "#5e5e5e",
                        "#45484a",
                        "#3e4144"
                    ],
                    borderColor: "black",
                    borderWidth: 2
                }]
            });

            setLoad( false );

        }
        
        getSales();

    }, []);
=======
    const date = new Date();
    
    const [ year, month, day ] = [
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
    ];

    const actualDate = year + '-' + ( month + 1 ) + '-' + day;

    const dailySales = dataSales.filter( sale => {
        return sale.date === actualDate;
    })

    let totalDailyAmount = 0;

    dailySales.forEach( sale => {
        sale.foods.forEach( food => {
            totalDailyAmount += food.finalPrice
        })
        sale.drinks.forEach( drink => {
            totalDailyAmount += drink.finalPrice
        })
    })

    let arrayClients = [];

    dataSales.forEach( sale => {
        if( !arrayClients.includes( sale.client ) ){
            arrayClients.push( sale.client );
        }
    })

    let arrayDatesThisWeek = [];

    arrayDatesThisWeek.push( actualDate );

    for ( let i = 0; i < 6; i++ ) {
        date.setDate( date.getDate() - 1 );
        
        let [ year, month, day ] = [
            date.getFullYear(),
            date.getMonth(),
            date.getDate()
        ];
    
        let currentDate = year + '-' + ( month + 1 ) + '-' + day;

        arrayDatesThisWeek.push( currentDate );
    }
    
    let weeklySales = dataSales.filter( sale => {
        return arrayDatesThisWeek.includes( sale.date );
    });

    arrayDatesThisWeek = arrayDatesThisWeek.sort();

    let finalAmountsWeekly = {};

    arrayDatesThisWeek.map( date  => {
        finalAmountsWeekly[ date ] = 0;
    })

    weeklySales.map( sale  => {
        finalAmountsWeekly[ sale.date ] = finalAmountsWeekly[ sale.date ] + sale.finalAmount;
    })

    let arrayFinalAmountsWeekly =  Object.values( finalAmountsWeekly );

    let arrayNameDatesThisWeek = [];
    
    arrayDatesThisWeek.map( date => {

        let daysWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

        let dateChanging = new Date( date );
        let nameDayWeek = dateChanging.getDay();
        
        arrayNameDatesThisWeek.push( daysWeek[ nameDayWeek ] );
    })

    const [ chartData, setChartData ] = useState({
        labels: arrayNameDatesThisWeek, 
        datasets: [{
            label: "Ganancias",
            data: arrayFinalAmountsWeekly.map(( data ) => data),
            backgroundColor: [
                "#3e4144",
                "#5e5e5e",
                "#6f6f6f",
                "#828282",
                "#aaaaaa",
                "#c6c6c6",
                "#ffffff",
            ],
            borderColor: "black",
            borderWidth: 2
        }]
    });

    let finalAmountsMonthly = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
        11: 0,
        12: 0
    }

    let annualSales = dataSales.filter( sale => {
        let dateJSON = new Date( sale.date );
        let yearJSON = dateJSON.getFullYear();

        return yearJSON === year;
    })

    annualSales.map(( data ) => {
        const date = new Date( data.date );
        const month = date.getMonth() + 1;
        
        finalAmountsMonthly[ month ] = finalAmountsMonthly[ month ] + data.finalAmount
    })

    let arrayFinalAmountsMonthly =  Object.values( finalAmountsMonthly );

    const [ chartDataMonthly, setChartDataMonthly ] = useState({
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'], 
        datasets: [{
            label: "Ganancias",
            data: arrayFinalAmountsMonthly.map(( data ) => data),
            backgroundColor: [
                "#666f88",
                "#788199",
                "#8990a2",
                "#a3a8b7",
                "#b5bac9",
                "#c6c6c6",
                "#aaaaaa",
                "#828282",
                "#6f6f6f",
                "#5e5e5e",
                "#45484a",
                "#3e4144"
            ],
            borderColor: "black",
            borderWidth: 2
        }]
    });
>>>>>>> 0d48d105ed5619d292448de499f5236b7b3dd231

    return (

        <>
            <NavBar />
            
            <div className='py-5 px-4'>

                <h1>Dashboard Restaurante Saturno</h1>

                <div className='d-flex flex-wrap justify-content-between align-items-center mt-5 mb-4'>

                    <CardHomeDash 
                        icon = 'fa-solid fa-burger'
                        title = 'Comidas disponibles'
<<<<<<< HEAD
                        quantity = { numberFoods }
=======
                        quantity = { dataFoods.length }
>>>>>>> 0d48d105ed5619d292448de499f5236b7b3dd231
                        link = '/foods'
                    />

                    <CardHomeDash 
                        icon = 'fa-solid fa-wine-glass'
                        title = 'Bebidas disponibles'
<<<<<<< HEAD
                        quantity = { numberDrinks }
=======
                        quantity = { dataDrinks.length }
>>>>>>> 0d48d105ed5619d292448de499f5236b7b3dd231
                        link = '/drinks'
                    />

                    <CardHomeDash 
                        icon = 'fa-solid fa-users'
                        title = 'Total de Clientes'
<<<<<<< HEAD
                        quantity = { numberClients }
=======
                        quantity = { arrayClients.length }
>>>>>>> 0d48d105ed5619d292448de499f5236b7b3dd231
                        link = '/sales'
                    />

                    <CardHomeDash 
                        icon = 'fa-solid fa-file-invoice-dollar'
                        title = 'Ventas del día'
<<<<<<< HEAD
                        quantity = { numberDailySales }
=======
                        quantity = { dailySales.length }
>>>>>>> 0d48d105ed5619d292448de499f5236b7b3dd231
                        link = '/sales/daily'
                    />

                    <CardHomeDash 
                        icon = 'fa-solid fa-money-bill-trend-up'
                        title = 'Ganancias del día'
<<<<<<< HEAD
                        quantity = { `$${ totalAmountDailySales }` }
=======
                        quantity = { `$${ totalDailyAmount }` }
>>>>>>> 0d48d105ed5619d292448de499f5236b7b3dd231
                        link = '/sales/daily'
                    />

                </div>

                <div>
<<<<<<< HEAD

                    {
                        !isLoad &&

                        <>
                            <ChartHomeDash chartData={ chartDataWeekly } title='Ganancias ventas de esta semana' />
        
                            <ChartHomeDash chartData={ chartDataMonthly } title='Ganancias ventas en el año' />
                        </>
                    }

=======
                    <ChartHomeDash chartData={ chartData } title='Ganancias ventas de esta semana' />

                    <ChartHomeDash chartData={ chartDataMonthly } title='Ganancias ventas en el año' />
>>>>>>> 0d48d105ed5619d292448de499f5236b7b3dd231
                </div>

            </div>
        </>

    )
}

<<<<<<< HEAD
export default authenticatedRoute( HomeDash );
=======
export default HomeDash;
>>>>>>> 0d48d105ed5619d292448de499f5236b7b3dd231
