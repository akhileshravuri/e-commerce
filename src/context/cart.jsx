import { useCart } from "./cartcontext";
import React from "react";
const Usercart=()=>{
    const {removeitem,cartitem}=useCart()

    return(
        <div>
            {cartitem.length===0?
                      <div style={{textAlign:"center",fontFamily:"monospace",fontSize:"50px",marginTop:"300px"}}>
                         <p>Your Cart Is Empty Now</p></div>:
                         <div>
            {cartitem.map((item)=>{

                return(
                   
                    <div  style={{height:"310px",width:"auto",display:"flex"}}>
                         
                        <div className="cart" >
                        <div className="cart1">
                            <img style={{height:"300px"}} src={item.image}/>
                        </div>
                        <div>
                            <h3>{item.product}</h3>
                            <h5>{item.price}</h5>
                            <h5>{item.model}</h5>
                            <button onClick={()=>removeitem(item)}>remove Item</button>

                           
                        </div>
                        </div>

                       

                        </div>
              )
            })}</div>
}</div>
)
}

export default Usercart