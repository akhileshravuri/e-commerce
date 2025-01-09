import React from "react";
import { useParams } from "react-router-dom";
import { mens } from "../data/mensdata.js";
import { useCart } from "../context/cartcontext.jsx";

function Mensingle(){
   const {id}=useParams()
      const {addcart,cartitem}=useCart()
   
   const x=mens.find((item)=>item.id===id)
    return(
        <div className="mensingle1">
            <div>
            <img  className="mensingle2" src={"/"+x.image} alt="mobile image"/>
            </div>
            <div className="mensingle4">
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
export default Mensingle