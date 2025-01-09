import { Link } from 'react-router-dom'
import {watches} from '../data/watches'
import { useState } from 'react'

function Watches(){
    const[state,setState]=useState([])
            const company1=(banana)=>{
                if(state.includes(banana)){
                    setState(state.filter(item=>item !=banana))
                }else{
                    setState([banana])
                }
            }
const filterproduct=state.length===0?watches:watches.filter((itemm)=>state.includes(itemm.brand)) 
            
    return(
        <div className='watchmain1'>
         <div className='watchmain2'>
                        {watches.map((watch1)=>{
                                    return(
                                        <div className='gap'>
                                        <input type="checkbox"
                                        checked={state.includes(watch1.brand)}
                                        onChange={()=>company1(watch1.brand)}/>
                                       {watch1.brand}
                                    </div>)
                            })}
                            </div>
        <div className='watchesitem1'>
            {
            filterproduct.map((item)=>{
                    return(
                        <div className='watchesitem2'>
                            <Link to={`/watches/${item.id}`}>
                            <img className='watchesitem3' id="a" src={item.image}/>
                            </Link>
                            <p>{item.product} </p>
                            <p>{item.brand}</p>
                        </div>)})
            }
        </div>
        </div>
    )
}
export default Watches