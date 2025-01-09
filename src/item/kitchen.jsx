import {kitchen} from '../data/kitchen'
import { useState } from 'react'
import { Link } from 'react-router-dom'
function Furniture(){

     const[state,setState]=useState([])
                const company1=(banana)=>{
                    if(state.includes(banana)){
                        setState(state.filter(item=>item !=banana))
                    }else{
                        setState([banana])
                    }
                }

    const filterproduct=state.length===0?kitchen:kitchen.filter((itemm)=>state.includes(itemm.brand)) 
    
    return(
                <div className='kitchenmain1'>
                 <div className='kitchenmain2'>
                                {kitchen.map((watch1)=>{
                                            return(
                                                <div className='gap'>
                                                <input type="checkbox"
                                                checked={state.includes(watch1.brand)}
                                                onChange={()=>company1(watch1.brand)}/>
                                               {watch1.brand}
                                            </div>)
                                    })}
                                    </div>
        <div className='kitchenitem1'>
         
            {
                filterproduct.map((item)=>{
                    return(<div className='kitchenitem2'>
                        <Link to={`/kitchen/${item.id}`}>
                           <img className='kitcheneitem3' id="a" src={item.image}/>
                           </Link>
                           <p>{item.product} </p>
                           <p>{item.type}</p>
                        </div>
                 )})
            }
          

        </div>
        </div>
    )
}
export default Furniture