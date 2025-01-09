import React from "react";
import { useParams } from "react-router-dom";
import { watches } from "../data/watches.js";
import { useCart } from "../context/cartcontext.jsx";

function Watchesingle(){
   const {id}=useParams()
   const{addcart,cartitem}=useCart()

   const y=watches.find((item)=>item.id===id)
    return(
        <div className="watchsingle1">
            <div>
            <img src={"/"+y.image} alt="watch image"/>
            </div>
            <div className="watchsingle3">
                <h3>{y.price}</h3>
                <h2>{y.product}</h2>
                <p>{y.description}</p>
                <p>{y.brand}</p>
                <p>{y.category}</p>
                <p>{y.model}</p>
                <button onClick={()=>addcart(y)}>Add to Cart</button>
            </div>
        </div>
    )
}
export default Watchesingle