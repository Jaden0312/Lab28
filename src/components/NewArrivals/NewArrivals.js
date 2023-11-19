import React from "react";
import './NewArrivals.css';
import new_arrival from '../Assets/All_products';
import Item from "../Item/Item";


const NewArrival = () => {
        
        return (
            <>
            <div className="new-arrivals">
                <h1>New Arrivals</h1>
                <hr />
                <div className="arrivals">
                    {new_arrival.map((item,index)=>{
                        return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    })}
                </div>
                
            </div>
            </>
        )
    }

export default NewArrival;