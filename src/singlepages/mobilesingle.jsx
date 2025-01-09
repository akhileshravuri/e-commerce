import React from "react";
import { useParams } from "react-router-dom";
import { mobile } from "../data/mobile.js";
import { useCart} from  "../context/cartcontext.jsx";
function Mobilesingle(){
   const {id}=useParams()
   const{addcart,cartitem}=useCart()
   const x=mobile.find((item)=>item.id===id)
    return(
        <div className="mobilesingle1">
            <div>
            <img src={"/"+ x.image} alt="mobile image"/>
            </div>
            <div>
            <h2>{x.model}</h2>
                <h3>{x.price}</h3>
                <p>{x.company}</p>
                <p>{x.product}</p>
                <p>{x.model}</p>
                <p>{x.description}</p>
                <button onClick={()=>addcart(x)}>Add to Cart</button>

            </div>
        </div>
    )
}
export default Mobilesingle