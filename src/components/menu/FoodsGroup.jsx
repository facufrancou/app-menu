import React from 'react';

const FoodsGroup = ({ title }) => {

    return (

        <>

            <h2 style={{ textTransform: 'uppercase' }}>{ title }</h2>

            <ul>
                {/* { foods.map( (food, key) => {
                    <li>
                        <h4>{ food.name }</h4>
                        <div className='food-amount'>
                            <i>+</i>
                            <p>1</p>
                            <i>-</i>
                        </div>
                    </li>
                }} */}
            </ul>

            {/* <ul>
                <li>
                    <h4>Del Campo</h4>
                    <div className='food-amount'>
                        <i>+</i>
                        <p>1</p>
                        <i>-</i>
                    </div>
                </li>

                <li>
                    <h4>Lomito</h4>
                    <div className='food-amount'>
                        <i>+</i>
                        <p>1</p>
                        <i>-</i>
                    </div>
                </li>

                <li>
                    <h4>Jon Snow</h4>
                    <div className='food-amount'>
                        <i>+</i>
                        <p>1</p>
                        <i>-</i>
                    </div>
                </li>

                <li>
                    <h4>Milanesa</h4>
                    <div className='food-amount'>
                        <i>+</i>
                        <p>1</p>
                        <i>-</i>
                    </div>
                </li>

            </ul> */}

        </>

    )

}

export default FoodsGroup;