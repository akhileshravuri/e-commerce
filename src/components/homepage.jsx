import Books from './books';
import Computer from './computer';
import Furniture from './furniture';
import Mens from './men';
import Acdata from './Ac'
import Watch  from './watches';
import Mobile from './mobile'
import Women from './women'
import Speakers from './speakers';
import Tv from './tv'
import Fridge from './fridge'
import Kitchen from './kitchen'
import '../index.css';
import Corousal from '../corouser/carousalmain'

function Navbar(){
    return(
        <div>
            <Corousal/>
           <Acdata/>
            <Books/>
            <Computer/>
            <Furniture/>
            <Kitchen/>
            <Mens/>
            <Women/>
            <Watch/>
            <Mobile/>
            <Speakers/>
            <Tv/>
            <Fridge/>
        </div>
    )
}
export default Navbar