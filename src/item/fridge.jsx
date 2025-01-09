import { useState } from 'react'
import {fridge} from '../data/fridge'
import { Link } from 'react-router-dom'
function Furniture(){
    const[state,setState]=useState([])
     const company1=(mango)=>{
            if(state.includes(mango)){
                setState(state.filter(item=>item !=mango))
            }else{
                setState([mango])
            }
        }
    
        const filterproduct=state.length===0? fridge :fridge.filter((orange)=>state.includes(orange.brand))
    return(

        <div className='fridgemain'>
        <div className='fridgemain2'>
            {
                fridge.map((fridge1)=>{
                    return(
                       <div className='gap'>
                            <input type="checkbox"
                             checked={state.includes(fridge1.brand)}
                             onChange={()=>company1(fridge1.brand)}/>
                             {fridge1.brand}
                            </div>
                    )
                })
            }
        </div>
        <div className='fridgeitem1'>         
           {
                filterproduct.map((item)=>{
                    return(<div className='fridgeitem2'>
                        <Link to={`/fridges/${item.id}`}>
                        <img className='fridgeitem3' id="a" src={item.image}/>
                        </Link>
                           <p>{item.product} </p>
                           <p>{item.brand}</p>
                        </div>
                 )})
            }
        </div>
        </div>
    )
}
export default Furniture