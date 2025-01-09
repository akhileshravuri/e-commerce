import {fridge} from '../data/fridge.js'
function Books(){
    const data=fridge.slice(0,4)
    return(
              <div>
              <h3>Fridge</h3>
              <div className='books1'>    
              {
              data.map((item)=>{
              return(
              <div className='books2'>
              <img className='books3' src={item.image}/>      
              </div>)
            })
            }
        </div>
        </div>
    )
}
export default Books