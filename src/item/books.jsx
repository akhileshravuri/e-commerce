import { Link } from 'react-router-dom'
import {books} from '../data/Booksdata.js'
import { useState } from 'react'
function Books(){
    const[state,setState]=useState([])
                        const company1=(banana)=>{
                            if(state.includes(banana)){
                                setState(state.filter(item=>item !=banana))
                            }else{
                                setState([banana])
                            }
                        }
const filterproduct=state.length===0?books:books.filter((itemm)=>state.includes(itemm.title)) 
                        
    return(
         <div className='kitchenmain1'>
            <div className='kitchenmain2'>
                {books.map((speakeer1)=>{
                return(
                <div className='gap'>
                <input type="checkbox"
                checked={state.includes(speakeer1.title)}
                onChange={()=>company1(speakeer1.title)}/>
                {speakeer1.title}
                </div>)
                })}
                </div>
        <div className='booksitem1'>
            {
            filterproduct.map((item)=>{
                return(
                <div className='booksitem2'>
                    <Link to={`/books/${item.id}`}>
                    <img className='booksitem3' id="a" src={item.image}/></Link>
                    
                    <p>{item.product} </p>
                    <p>{item.title}</p>
                </div>)
            })
            }
        </div>
        </div>
    )
}
export default Books