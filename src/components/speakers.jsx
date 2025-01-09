
import {speaker} from '../data/speakers'

function Speakers(){

    var data=speaker.slice(0,5)
    return(
        <div>
            <h3>Speakers</h3>

        
        <div className='speaker1'>
            {
            data.map((item)=>{
                    return(
                        <div className='speaker2'>
                            <img className='speaker3' src={item.image}/>
                           
                        </div>)})
            }
        </div>
        </div>
    )
}
export default Speakers