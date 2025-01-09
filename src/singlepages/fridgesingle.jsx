import React from "react";
import { useParams } from "react-router-dom";
import { fridge } from "../data/fridge.js";
import { useCart } from "../context/cartcontext.jsx";

function Fridgesingle(){
   const {id}=useParams()
   const{addcart,cartitem}=useCart()
   const x=fridge.find((item)=>item.id===id)
    return(
        <div className="fridgesingle1">
            <div>
            <img src={"/"+x.image} alt="mobile image"/>
            </div>
            <div className="fridgesingle4">
            <h2>{x.model}</h2>
                <h3>{x.price}</h3>
                <p>{x.brand}</p>
                <p>{x.category}</p>
                <p>{x.description}</p>
                <button onClick={()=>addcart(x)}>Add to Cart</button>
                </div>
            </div>
     
    )
}
export default Fridgesingle