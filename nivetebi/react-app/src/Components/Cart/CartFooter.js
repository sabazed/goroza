import React from "react";
import './CartFooter.css';

const CartFooter = (props) => {
    return (
        <div className="total-bar">
            <div>Total</div>
            <div>${props.items.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)}</div>
        </div>
    );

}

export default CartFooter;