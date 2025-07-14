import React from "react";
import './CartItem.css';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const CartItem = (props) => {

    const QtyUpHandler = () => {
        props.setQty(props.qty + 1, props.id);
    };
    
    const QtyDownHandler = () => {
        props.setQty(props.qty - 1, props.id);
    };

    const RemoveHandler = () => {
        props.setQty(0, props.id)
    }


    return (
        <div className="cart-item">
            <div className="cart-item-pic"><img src={props.image} /></div>
            <div className="cart-item-desc">
                <div>{props.name}</div>
                <div>${props.price}</div>
                <div onClick={RemoveHandler}>remove</div>
            </div>
            <div className="cart-item-qty">
                <div className="qty-btn" onClick={QtyUpHandler}><FaAngleUp /></div>
                <div>{props.qty}</div>
                <div className="qty-btn" onClick={QtyDownHandler}><FaAngleDown /></div>
            </div>
        </div>
    );

}

export default CartItem;