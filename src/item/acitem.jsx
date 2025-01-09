import { Link } from 'react-router-dom'
import {ac} from '../data/Acdata'
import { useState } from 'react'

function Acdata(){
     const[state,setState]=useState([])
                    const company1=(banana)=>{
                        if(state.includes(banana)){
                            setState(state.filter(item=>item !=banana))
                        }else{
                            setState([banana])
                        }
                    }
    
        const filterproduct=state.length===0?ac:ac.filter((itemm)=>state.includes(itemm.company)) 
    return(
        <div className='acmain1'>
                         <div className='acmain2'>
                                        {ac.map((ac1)=>{
                                                    return(
                                                        <div className='gap'>
                                                        <input type="checkbox"
                                                        checked={state.includes(ac1.company)}
                                                        onChange={()=>company1(ac1.company)}/>
                                                       {ac1.company}
                                                    </div>)
                                            })}
                                            </div>
       <div>
            <div className='acitem1'>
            {filterproduct.map((item)=>{
        return(
            <div className='acitem2' >
                <Link to={`/ac/${item.id}`}>
                <img className='acitem3' id="a" src={item.image}/>

                </Link>
                <p>{item.product}</p>
                <p>{item.company}</p>
                <p>{item.model}</p>
            </div>)
    })}  
        </div>
        </div>
        </div>
    )
}
export default Acdata
