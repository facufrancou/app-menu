import { useState } from 'react';

import CardHomeDash from './CardHomeDash';
import ChartHomeDash from './BarChartDash';
import NavBar from './NavBar';

let dataDrinks = require('../../data/menuDrinks.json');
let dataFoods = require('../../data/menuFoods.json');
let dataSales = require('../../data/sales.json');


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

    return (

        <>
            <NavBar />
            
            <div className='py-5 px-4'>

                <h1>Dashboard Restaurante Saturno</h1>

                <div className='d-flex flex-wrap justify-content-between align-items-center mt-5 mb-4'>

                    <CardHomeDash 
                        icon = 'fa-solid fa-burger'
                        title = 'Comidas disponibles'
                        quantity = { dataFoods.length }
                        link = '/foods'
                    />

                    <CardHomeDash 
                        icon = 'fa-solid fa-wine-glass'
                        title = 'Bebidas disponibles'
                        quantity = { dataDrinks.length }
                        link = '/drinks'
                    />

                    <CardHomeDash 
                        icon = 'fa-solid fa-users'
                        title = 'Total de Clientes'
                        quantity = { arrayClients.length }
                        link = '/sales'
                    />

                    <CardHomeDash 
                        icon = 'fa-solid fa-file-invoice-dollar'
                        title = 'Ventas del día'
                        quantity = { dailySales.length }
                        link = '/sales/daily'
                    />

                    <CardHomeDash 
                        icon = 'fa-solid fa-money-bill-trend-up'
                        title = 'Ganancias del día'
                        quantity = { `$${ totalDailyAmount }` }
                        link = '/sales/daily'
                    />

                </div>

                <div>
                    <ChartHomeDash chartData={ chartData } title='Ganancias ventas de esta semana' />

                    <ChartHomeDash chartData={ chartDataMonthly } title='Ganancias ventas en el año' />
                </div>

            </div>
        </>

    )
}

export default HomeDash;