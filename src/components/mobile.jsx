import { mobile } from "../data/mobile";
function Mens(){
    const data=mobile.slice(0,5)
    return(
        <div>
            <h3>Mobiles</h3>
            
        <div className="mobile1">
            {
                data.map((item)=>{
                    return(
                        <div className="mobile2">
                            <img className="mobile3" src={item.image}/>
                           
                            </div>
                    )
                })
            }

        </div>
        </div>
    )
}
export  default Mens