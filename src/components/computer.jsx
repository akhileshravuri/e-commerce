import {computerdata} from '../data/computertext.js'
function Computer(){
    const data1=computerdata.slice(2,7)
    return(
        <div>
            <h3>Laptop</h3>
        <div className='computer1'>
            
            {data1.map((items)=>{
                return(
                    <div className='computer2'>
                         <img className='computer3' src={items.image}/>
                 
                    </div>  
                )
            })}

        </div>
        </div>
    )
}
export default Computer