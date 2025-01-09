import {books} from '../data/Booksdata.js'
function Books(){
    const data=books.slice(0,7)

    
    return(
        <div>
        <h3>Books</h3>
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