import React from 'react';

const MenuCard = ({title, price, description})=>{
 return (
    <>
        <h3>{ title }</h3>
        <p>{ price }</p>
        <p>{ description }</p>
    </>
 )
}

export default MenuCard;