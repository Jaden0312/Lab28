import React from "react";
import './Item.css';

const Item = (props) => {
    return (
        <>
        <div className="product">
            <img src={props.image} alt="" />
            <p>{props.name}</p>
            <div className="product-prices">
                <div className="product-price-new">
                    {props.new_price}
                </div>
                <div className="product-price-old">
                    {props.old_price}
                </div>
            </div>
        </div>
        </>
    )
}

export default Item;