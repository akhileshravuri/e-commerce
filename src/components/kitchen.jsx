import {kitchen} from '../data/kitchen'
function Furniture(){
    const data=kitchen.slice(0,5)
    return(
        <div>
        <h3>Kitchen</h3>
        <div className='furniture1'>
            
            {
                data.map((item)=>{
                  
                    return(<div className='furniture2'>
                        
                        <img className='furniture3' src={item.image}/>
                  
                        </div>
                 )})
            }
        </div>
        </div>
    )
}
export default Furniture