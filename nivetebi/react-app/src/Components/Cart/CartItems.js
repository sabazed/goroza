import React from "react";
import CartItem from "./CartItem";
import './CartItems.css';

const CartItems = (props) => {
    return (
        <div className="cart-items">
            {props.items.map((item, index) => <CartItem key={index} id={index} name={item.name} price={item.price} image={item.image} qty={item.qty} setQty={props.setQty} />)}
        </div>
    );
        
}

export default CartItems;