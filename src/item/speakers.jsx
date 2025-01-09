
import {speaker} from '../data/speakers.js'
import { Link } from 'react-router-dom'
import { useState } from 'react'
function Speakers(){
     const[state,setState]=useState([])
                    const company1=(banana)=>{
                        if(state.includes(banana)){
                            setState(state.filter(item=>item !=banana))
                        }else{
                            setState([banana])
                        }
                    }
    
        const filterproduct=state.length===0?speaker:speaker.filter((itemm)=>state.includes(itemm.brand)) 
    return(
        <div className='speakermain1'>
                         <div className='speakermain2'>
                                        {speaker.map((speakeer1)=>{
                                                    return(
                                                        <div className='gap'>
                                                        <input type="checkbox"
                                                        checked={state.includes(speakeer1.brand)}
                                                        onChange={()=>company1(speakeer1.brand)}/>
                                                       {speakeer1.brand}
                                                    </div>)
                                            })}
                                            </div>
        <div className='speakeritem1'>
            {
            filterproduct.map((item)=>{
                    return(
                        <div className='speakeritem2'>
                            <Link to={`/speaker/${item.id}`}>
                            <img className='speakeritem3' id="a" src={item.image}/>

                            </Link>
                            <p>{item.product} </p>
                            <p>{item.brand}</p>
                        </div>)})
            }
        </div></div>
    )
}
export default Speakers