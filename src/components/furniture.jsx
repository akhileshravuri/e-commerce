import {furniture} from '../data/furnituretext'
function Furniture(){
    const data=furniture.slice(0,5)
    return(
        <div>
        <h3>Furniture</h3>
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