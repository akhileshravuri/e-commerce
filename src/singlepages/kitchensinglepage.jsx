import React from "react";
import { useParams } from "react-router-dom";
import { kitchen } from "../data/kitchen.js";
import { useCart } from "../context/cartcontext.jsx";

function Kitchensingle(){
   const {id}=useParams()
   const {addcart,cartitem}=useCart()
   const x=kitchen.find((item)=>item.id===id)
    return(
        <div className="kitsingle1">
            <div className="kitsingle2">
            <img src={"/"+x.image} alt="image"/>
            </div>
            
        
            <div className="kitsingle4">
          
            <h2>{x.model}</h2>
                <h3>{x.price}</h3>
                <p>{x.description}</p>
                <p>{x.category}</p>
                <p>{x.model}</p>
                <p>{x.type}</p>
                <button onClick={()=>addcart(x)}>Add to Cart</button>
            </div>
            </div>
    
    )
}
export default Kitchensingle