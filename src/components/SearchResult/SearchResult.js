import React from "react";
import './SearchResult.css'
import all_product from '../Assets/All_products';
import Item from "../Item/Item";

class SearchResult extends React.Component {
    
    render() {
        return (
            <>
                <div className="result-product">
                    <h1>Search Result</h1>
                    <hr />
                    <div className="result-item">
                        {all_product.map((item,index) =>{
                            return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} />
                        })}
                    </div>
                </div>
            </>
        )
    }
}

export default SearchResult;