import React from "react";
import { useParams } from "react-router-dom";
import { furniture } from "../data/furnituretext.js";
import { useCart } from "../context/cartcontext.jsx";

function Fursingle(){
   const {id}=useParams()
   const{addcart,cartitem}=useCart()
   const x=furniture.find((item)=>item.id===id)
    return(
        <div className="fursingle1">
            <div className="fursingle2">
            <img src={"/"+x.image} alt="image"/>
            </div>
          
              
        
            <div className="fursingle4">
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
export default Fursingle