import { useState } from 'react'
import {computerdata} from '../data/computertext.js'
import { Link } from 'react-router-dom'
function Computer(){
    const[state,setState]=useState([])
    const company1=(banana)=>{
        if(state.includes(banana)){
            setState(state.filter(item=>item !=banana))
        }else{
            setState([banana])
        }
    }
    const filterproduct=state.length===0? computerdata:computerdata.filter((item)=>state.includes(item.brand))
    return(
      <div className='computermain'>
       <div className='computermain1'>
            {computerdata.map((computer1)=>{
                    return(
                        <div className='gap'>
                        <input type="checkbox"
                        checked={state.includes(computer1.brand)}
                        onChange={()=>company1(computer1.brand)}/>
                       {computer1.brand}
                    </div>)
            })}

        </div>
        <div className='computeritem1'>
            {filterproduct.map((items)=>{
                return(
                    <div className='computeritem2'>
                        <Link to={`/computers/${items.id}`}>
                        <img className='computeritem3' id="a" src={items.image}/>
                        </Link>
                         <p>{items.product} </p>
                         <p>{items.brand}</p>
                    </div>  
                )
            })}

        </div>
        </div>
    )
}
export default Computer