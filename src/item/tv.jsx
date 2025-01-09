import { Link } from 'react-router-dom'
import {tv} from '../data/tv'
import { useState } from 'react'

function Tv(){
     const[state,setState]=useState([])
                    const company1=(banana)=>{
                        if(state.includes(banana)){
                            setState(state.filter(item=>item !=banana))
                        }else{
                            setState([banana])
                        }
                    }
    const filterproduct=state.length===0?tv:tv.filter((itemm)=>state.includes(itemm.brand)) 
    return(
        <div className='tvmain1'>
                         <div className='tvmain2'>
                                        {tv.map((watch1)=>{
                                                    return(
                                                        <div className='gap'>
                                                        <input type="checkbox"
                                                        checked={state.includes(watch1.brand)}
                                                        onChange={()=>company1(watch1.brand)}/>
                                                       {watch1.brand}
                                                    </div>)
                                            })}
                                            </div>
        <div className='tvitem1'>
            {
            filterproduct.map((item)=>{
                    return(
                        <div className='tvitem2'>
                            <Link to={`/tv/${item.id}`}>
                            <img className='tvitem3' id="a" src={item.image}/>

                            </Link>
                            <p>{item.product} </p>
                            <p>{item.brand}</p>
                        </div>)})
            }
        </div>
        </div>
    )
}
export default Tv