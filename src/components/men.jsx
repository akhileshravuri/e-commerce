import { mens } from "../data/mensdata";
function Mens(){
    const data=mens.slice(0,5)
    return(
        <div>
        <h3>Mens-Wear</h3>
        <div className="men1">
          
            {
                data.map((item)=>{
                    return(
                        <div className="men2">
                            <img className="men3" src={item.image}/>
                         
                            </div>
                    )
                })
            }

        </div>
        </div>
    )
}
export  default Mens