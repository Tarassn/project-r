import React from 'react';

const Burger=(props)=>{
    return (
        <div className="header__burger" onClick={props.toggleBurger}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
};
export default Burger
