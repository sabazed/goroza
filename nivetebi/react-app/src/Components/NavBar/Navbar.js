import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import './Navbar.css';

const Navbar = (props) => {

    return (
        <div className="navbar">
            <div className="navbar-title"><span>Gorozas Naxmari Nivtebi</span></div>
            <div>
                <div className="cart-bubble">{props.items.reduce((acc, item) => acc + item.qty, 0)}</div>
                <div className="cart-icon"><FaShoppingCart/></div>
            </div>
        </div>
    );

}

export default Navbar;