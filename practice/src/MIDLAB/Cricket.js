import {Link} from 'react-router-dom';
import {MdNightlight} from "react-icons/md";
import {IoMdNotifications} from "react-icons/io";
import {MdDialpad} from "react-icons/md";
import  {FiSearch} from "react-icons/fi";
import MiddleSection from './Middle_Section';

import './Cricket.css';
import Footer from './Footer';
import LeftBar from './LeftBar';
import RightBar from './RightBar';
import Scorer from './Scorer';

function Cricket() {
    return ( 


<div id="main" >

<div id="menu">
 <section id="section1"> 
    <h2>Cricket Info</h2>
 </section>
<section id="section2">

<Link className="links" to="/live">
     live_Score
</Link>

<Link className="links" to="/Series">
     Series
</Link>

<Link className="links" to="./teams">
     Teams
</Link>
<Link className="links">
     News
</Link>
<Link className="links">
     Features
</Link>
<Link className="links">
     Videos
</Link>
<Link className="links">
     Stats
</Link>
</section>
<section id="section3">
<h4 id='edition'> Edition_Pk</h4>

<MdNightlight className='icons'/>
<Link  className="links" to="./notify">
<IoMdNotifications className='icons'/>
</Link>
<MdDialpad className='icons'/>
<FiSearch className='icons'/>



</section>


</div>
<div id="middle_section" className="row">

<div id="left_side_bar" className="col-4">
<Scorer/>
</div>
<div id="middle_sec" className="col-8">
<MiddleSection/>
</div>

{/* <div id="right_side_bar" className="col-3">

</div> */}

</div>
<div id="footer">


<Footer/>



</div>

</div>



     );
}

export default Cricket;