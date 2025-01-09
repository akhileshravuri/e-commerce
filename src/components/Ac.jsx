import '../index.css';
import {ac} from '../data/Acdata.js'

function Ac(){

    var data=ac.slice(0,5)
    return(
        <div>
            <h3>Air conditioners</h3>
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