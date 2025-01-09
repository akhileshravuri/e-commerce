import { useState } from 'react'
import {furniture} from '../data/furnituretext'
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
    const filterproduct=state.length===0?furniture:furniture.filter((itemm)=>state.includes(itemm.brand)) 
    return(    
        <div className='furnituremain1'>
            <div className='furnituremain2'>
                {furniture.map((furniture1)=>{
                            return(
                                <div className='gap'>
                                <input type="checkbox"
                                checked={state.includes(furniture1.brand)}
                                onChange={()=>company1(furniture1.brand)}/>
                               {furniture1.brand}
                            </div>)
                    })}
                    </div>
        <div className='furnitureitem1'>
            {filterproduct.map((item)=>{
                    return(<div className='furnitureitem2'>
                        <Link to={`/furniture/${item.id}`}>
                        <img className='furnitureitem3' id="a" src={item.image}/>

                        </Link>
                           <p>{item.product} </p>
                           <p>{item.type}</p>
                        </div>
                 )})}
          
          </div>
        
        </div>
    )
}

export default Furniture