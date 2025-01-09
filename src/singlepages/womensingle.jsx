import React from "react";
import { useParams } from "react-router-dom";
import { women } from "../data/women.js";
import { useCart } from "../context/cartcontext.jsx";

function Womenesingle(){
   const {id}=useParams()
   const{addcart,cartitem}=useCart()

   const x=women.find((item)=>item.id===id)
    return(
        <div className="womensingle1">
            <div className="womensingle2">
            <img src={"/"+x.image} alt="image"/>
            </div>
            <div className="womensingle3">
                <h2>{x.model}</h2>
        
            <div className="womensingle4">
                <h3>{x.price}</h3>
                <p>{x.description}</p>
                <p>{x.category}</p>
                <p>{x.model}</p>
                <p>{x.type}</p>
                <button onClick={()=>addcart(x)}>Add to Cart</button>
            </div>
            </div>
        </div>
    )
}
export default Womenesingle