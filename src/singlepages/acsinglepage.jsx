import React from "react";
import { useParams } from "react-router-dom";
import { ac } from "../data/Acdata.js";
import { useCart} from  "../context/cartcontext.jsx";


function Acsingle(){
   const {id}=useParams()
   const{addcart,cartitem}=useCart()
   const x=ac.find((item)=>item.id===id)
    return(
        <div className="acsingle1">
            <div className="acsingle2">
            <img src={"/"+x.image} alt="image"/>
            </div>
            
                
        
            <div className="acsingle4">
            <h2>{x.category}</h2>
                <h3>{x.price}</h3>
                <p>{x.description}</p>
                <p>{x.category}</p>
                <p>{x.model}</p>
                <button onClick={()=>addcart(x)}>Add to Cart</button>
                
            </div>
        </div>
    )
}
export default Acsingle