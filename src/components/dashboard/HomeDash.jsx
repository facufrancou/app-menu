import { useState } from 'react';

import CardHomeDash from './CardHomeDash';
import ChartHomeDash from './ChartHomeDash';
import NavBar from './NavBar';

let sales = require('../../data/sales.json')


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

    let finalAmounts = {
        lunes: 0,
        martes: 0,
        miércoles: 0,
        jueves: 0,
        viernes: 0,
        sábado: 0,
        domingo: 0,
    }

    sales.map(( data ) => {
        finalAmounts[data.day.toLowerCase()] = finalAmounts[data.day.toLowerCase()] + data.finalAmount
    })

    let arrayFinalAmounts =  Object.values( finalAmounts );

    const [ chartData, setChartData ] = useState({
        labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'], 
        datasets: [{
            label: "Ganancias",
            data: arrayFinalAmounts.map(( data ) => data),
            backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0",
                "pink",
                "orange"
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

    sales.map(( data ) => {
        const newFormatDate = data.date.replaceAll('-', ', ');
        const date = new Date( newFormatDate );
        const month = date.getMonth() + 1;
        
        finalAmountsMonthly[month] = finalAmountsMonthly[month] + data.finalAmount
    })

    let arrayFinalAmountsMonthly =  Object.values( finalAmountsMonthly );

    const [ chartDataMonthly, setChartDataMonthly ] = useState({
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'], 
        datasets: [{
            label: "Ganancias",
            data: arrayFinalAmountsMonthly.map(( data ) => data),
            backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0",
                "pink",
                "orange"
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

                <div className='d-flex flex-wrap justify-content-between align-items-center mt-5'>

                    <CardHomeDash 
                        icon = 'fa-solid fa-burger'
                        title = 'Comidas disponibles'
                        quantity = '19'
                    />

                    <CardHomeDash 
                        icon = 'fa-solid fa-wine-glass'
                        title = 'Bebidas disponibles'
                        quantity = '23'
                    />

                    <CardHomeDash 
                        icon = 'fa-solid fa-file-invoice-dollar'
                        title = 'Ventas del día'
                        quantity = '23'
                    />

                    <CardHomeDash 
                        icon = 'fa-solid fa-money-bill-trend-up'
                        title = 'Ganancias del día'
                        quantity = '$2023'
                    />

                    <CardHomeDash 
                        icon = 'fa-solid fa-money-bill-trend-up'
                        title = 'Ganancias del día'
                        quantity = '$2023'
                    />

                    <CardHomeDash 
                        icon = 'fa-solid fa-money-bill-trend-up'
                        title = 'Ganancias del día'
                        quantity = '$2023'
                    />

                    <ChartHomeDash chartData={ chartData } title='Ganancias ventas de esta semana' />

                    <ChartHomeDash chartData={ chartDataMonthly } title='Ganancias ventas en el año' />

                </div>

            </div>
        </>

    )
}

export default HomeDash;