import React from "react";
import TotalPrice from "./CartFooter";
import CartItems from "./CartItems";
import './CartView.css';

const CartView = (props) => {
    return (
        <div className="cartview">
            <div className="cartview-title"><span>Your Bag</span></div>
            <CartItems items={props.items} setQty={props.setQty} />
            {props.isLoaded && props.items.length > 0 && <TotalPrice items={props.items} /> }
            {props.isLoaded && props.items.length > 0 && <button className="cartview-clear-btn" onClick={props.clearCart}>Clear Cart</button>}
            {props.isLoaded && props.items.length == 0 && <div className="empty-cart-footer">is currently empty</div>}
            {!props.isLoaded && <div className="empty-cart-footer">Loading</div>}
        </div>
    );

}

export default CartView;