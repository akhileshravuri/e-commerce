
import {tv} from '../data/tv.js'

function Ac(){

    var data=tv.slice(0,5)
    return(
        <div>
<h3>Tv's</h3>
        
        <div className='ac1'>
            {
            data.map((item)=>{
                    return(
                        <div className='ac2'>
                            <img className='ac3' src={item.image}/>
                            
                        </div>)})
            }
            </div>
        </div>
    )
}
export default Ac