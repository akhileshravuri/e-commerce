
import {watches} from '../data/watches'

function Watch(){

    var data=watches.slice(0,5)
    return(
        <div>
            <h3>Watches</h3>
    
        <div className='watch1'>
            {
            data.map((item)=>{

                    return(
                        <div className='watch2'>
                         
                            <img className='watch3' src={item.image}/>

                            
                        </div>)})
            }
        </div>
        </div>
    )
}
export default Watch