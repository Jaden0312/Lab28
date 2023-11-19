import React from "react";
import './Best.css';
import data_product from "../Assets/data";
import Item from "../Item/Item";

class Best extends React.Component {
    
    render() {
        return (
            <>
                <div className="best-product">
                    <h1>Best Items</h1>
                    <hr />
                    <div className="best-item">
                        {data_product.map((item,index) =>{
                            return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} />
                        })}
                    </div>
                </div>
            </>
        )
    }
}

export default Best;