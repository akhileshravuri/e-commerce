import { Link, Route,Routes } from 'react-router-dom';
import Homepage from './homepage'
import Acc from '../item/acitem.jsx'
import Watch from "../item/watches.jsx";
import Books from '../item/books.jsx'
import Speakers from "../item/speakers.jsx";
import Men from '../item/men.jsx'
import Women from "../item/women.jsx";
import Furniture from "../item/furniture.jsx";
import Computer from "../item/computer.jsx";
import Mobile from '../item/mobileitem.jsx'
import Fridge from '../item/fridge.jsx'
import Tv from '../item/tv.jsx'
import Kitchen from '../item/kitchen.jsx'
import Mobilesingle from '../singlepages/mobilesingle.jsx'
import Watchesingle from '../singlepages/watchessingle.jsx';
import Mensingle from '../singlepages/mensingle.jsx'
import Womensingle from '../singlepages/womensingle.jsx'
import Fridgesingle from '../singlepages/fridgesingle.jsx'
import Tvsingle from '../singlepages/tvsinglepage.jsx';
import Booksingle from '../singlepages/books.jsx';
import Fursingle from '../singlepages/fursingpage.jsx';
import Computersingle from '../singlepages/comsinglepag.jsx';
import Kitchensingle from '../singlepages/kitchensinglepage.jsx';
import Acsingle from '../singlepages/acsinglepage.jsx'
import Spesin from '../singlepages/spesinpage.jsx'
import Cart from '../context/cart.jsx'
import { useCart } from '../context/cartcontext.jsx';
function Navbar(){
    const{cartitem}=useCart()
    return(
        <div>
        <div className='navbar1'>
            <div className='navbar2'>
                <div className='navbar3 '>
                  <Link style={{textDecoration:"none",color:"white"}} to="/"><h2>Akhil-mart</h2></Link> 
                </div>
                <div className='navbar4'>
                    <input type="text" placeholder="search.."/>
                </div>
                <div className='navbar5'>
                    <p>signIn/signUp</p>
                </div>
                <div className='navbar6'>
                    <Link style={{color:"white",textDecoration:"none"}} to="/cart">
                    <p >cart <span>{cartitem.length}</span></p> 
                    </Link>
                   
                </div>
            </div>
        </div>
        <div className='navbar7'>
            <ul className='navbar8'>
               <Link style={{textDecoration:"none"}} to="/mobiles"><li>Mobiles</li></Link>
               <Link style={{textDecoration:"none"}} to="/computers"><li>Computers</li> </Link>
               <Link style={{textDecoration:"none"}} to="/watches"><li>Watches</li></Link>
               <Link style={{textDecoration:"none"}} to="/men"><li>Mens Wear</li></Link>
               <Link style={{textDecoration:"none"}} to="/women"><li>Women Wear</li></Link>
               <Link style={{textDecoration:"none"}} to="/furniture"><li>Furniture</li></Link>
               <Link style={{textDecoration:"none"}} to="/kitchen"><li>Kitchen</li></Link>
               <Link style={{textDecoration:"none"}} to="/fridges"><li>Fridges</li></Link>
               <Link style={{textDecoration:"none"}} to="/books"><li>Books</li></Link>
               <Link style={{textDecoration:"none"}} to="/ac"><li>Ac's</li></Link>
               <Link style={{textDecoration:"none"}} to="/tv"><li>Tv's</li></Link>
               <Link style={{textDecoration:"none"}} to="/speaker"><li>speaker</li></Link>
               <Link style={{textDecoration:"none"}} to="/kitchen"><li>kitchen</li></Link>
            </ul>
        </div>
        <div>
        <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/ac" element={<Acc/>}/>
                <Route path="/mobiles" element={<Mobile/>}/>
                <Route path="/men" element={<Men/>}/>
                <Route path="/speaker" element={<Speakers/>}/>
                <Route path="/watches" element={<Watch/>}/>
                <Route path="/books" element={<Books/>}/>
                <Route path="/women" element={<Women/>}/>
                <Route path="/furniture" element={<Furniture/>}/>
                <Route path="/computers" element={<Computer/>}/>
                <Route path="/fridges" element={<Fridge/>}/>
                <Route path="/tv" element={<Tv/>}/>
                <Route path="/kitchen" element={<Kitchen/>}/>
                
                <Route path="/mobiles/:id" element={<Mobilesingle/>}/>
                <Route path="/watches/:id" element={<Watchesingle/>}/>
                <Route path="/men/:id" element={<Mensingle/>}/>
                <Route path="/women/:id" element={<Womensingle/>}/>
                <Route path="/fridges/:id" element={<Fridgesingle/>}/>

                <Route path="/speaker/:id" element={<Spesin/>}/>
                <Route path="/kitchen/:id" element={<Kitchensingle/>}/>
                <Route path="/furniture/:id" element={<Fursingle/>}/>
                <Route path="/computers/:id" element={<Computersingle/>}/>
                <Route path="/books/:id" element={<Booksingle/>}/>
                <Route path="/tv/:id" element={<Tvsingle/>}/>
                <Route path="/ac/:id" element={<Acsingle/>}/>

                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </div>
        </div>
     )}
  export default Navbar   
