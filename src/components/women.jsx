
import {women} from '../data/women'

function Women(){

    var data=women.slice(0,5)
    return(
        <div>
<h3>Women-wear</h3>
  
        <div className='women1'>

            {
            data.map((item)=>{
                    return(
                        <div className='women2'>
                            <img className='women3' src={item.image}/>
                            
                        </div>)})
            }
        </div>
        </div>
    )
}
export default Women