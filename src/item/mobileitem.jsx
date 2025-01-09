import { useState } from "react";
import { mobile } from "../data/mobile";
import { Link } from "react-router-dom";
function Mens(){
    const[state ,setState]=useState([])
    console.log(state)
    const company=(mango)=>{
        if(state.includes(mango)){
            setState(state.filter(item=>item !=mango))
        }else{
            setState([mango])
        }
    }

    const filterproduct=state.length===0? mobile :mobile.filter((orange)=>state.includes(orange.company))

    return(
<div className="mobilemain">
        <div className="mobilemain2">
            {mobile.map((item1)=>{
                return(
                    <div className="gap">
                        <input type="checkbox"
                        checked={state.includes(item1.company)}
                        onChange={()=>company(item1.company)}
                        />
                        {item1.company}
                    </div>
                )
            })}
        </div>
        <div className="mobileitem1">
            {
                filterproduct.map((item)=>{
                    return(
                        <div className="mobileitem2">
                            <Link to={`/mobiles/${item.id}`}>
                            <div>
                            <img className="mobileitem3" id="a" src={item.image}/> 
                            </div>
                            </Link>
                            <p>{item.company}</p>
                            <p>{item.product}</p>
                        
                            </div>
                    )
                })
            }

        </div>
        </div>
    )
}
export  default Mens