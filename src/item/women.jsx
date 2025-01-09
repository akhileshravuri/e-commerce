
import {women} from '../data/women'
import { useState } from 'react'

import { Link } from 'react-router-dom'

function Women(){
 const[state,setState]=useState([])
            const company1=(banana)=>{
                if(state.includes(banana)){
                    setState(state.filter(item=>item !=banana))
                }else{
                    setState([banana])
                }
            }

            const filterproduct=state.length===0?women:women.filter((itemm)=>state.includes(itemm.brand)) 
            

    return(
        <div className='womenmain'>

             <div className='womenmain2'>
                {women.map((women)=>{
                                return(
                                <div className='gap'>
                                    <input type="checkbox"
                                    checked={state.includes(women.brand)}
                                    onChange={()=>company1(women.brand)}/>
                                    {women.brand}
                                </div>)
                        })}
                        </div>
        <div className='womenitem1'>
            {
            filterproduct.map((item)=>{
                    return(
                        <div className='womenitem2'>
                            <Link to={`/women/${item.id}`}>
                            <img className='womenitem3' id="a" src={item.image}/>
                            </Link>
                            <p>{item.product} </p>
                            <p>{item.type}</p>
                        </div>)})
            }
        </div>
        </div>
    )
}
export default Women