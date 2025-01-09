import React from "react";
import { useParams } from "react-router-dom";
import { tv } from "../data/tv.js";
import { useCart } from "../context/cartcontext.jsx";
function Tvsingle(){
   const {id}=useParams()
   const{addcart,cartitem}=useCart()

   const x=tv.find((item)=>item.id===id)
    return(
        <div className="tvsingle1">
            <div>
            <img className="tvsingle2" src={"/"+x.image} alt="mobile image"/>
            </div>
            <div className="tvsingle4">
             <h2>{x.model}</h2>
                <h3>{x.price}</h3>
                <p>{x.brand}</p>
                <p>{x.type}</p>
                <p>{x.model}</p>
                <p>{x.category}</p>
                <p>{x.description}</p>
                <button onClick={()=>addcart(x)}>Add to Cart</button>

            </div>
        </div>
    )
}
export default Tvsingle