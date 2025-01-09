import { mens } from "../data/mensdata";
import { Link } from "react-router-dom";
import { useState } from "react";
function Mens(){
    const[state,setState]=useState([])
                const company1=(banana)=>{
                    if(state.includes(banana)){
                        setState(state.filter(item=>item !=banana))
                    }else{
                        setState([banana])
                    }
                }
       const filterproduct=state.length===0?mens:mens.filter((itemm)=>state.includes(itemm.brand)) 
                
    return(
        <div className="menmain">
            <div className='menmain2'>
                        {mens.map((men1)=>{
                                    return(
                                        <div className='gap'>
                                        <input type="checkbox"
                                        checked={state.includes(men1.brand)}
                                        onChange={()=>company1(men1.brand)}/>
                                       {men1.brand}
                                    </div>)
                            })}
                            </div>

        <div className="menitem1">
            {
                filterproduct.map((item)=>{
                    return(
                        <div className="menitem2">
                            <Link to={`/men/${item.id}`}>
                            <img className="menitem3" id="a" src={item.image}/>

                            </Link>
                            <p>{item.type}</p>
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