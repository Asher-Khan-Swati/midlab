 import React from 'react'
// import Watch from './Map';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';

 import Cricket from './MIDLAB/Cricket';
 import { Route, Routes } from 'react-router-dom';
 import Live from './MIDLAB/LiveScore';
 import Series from './Series';
 import Notify from './MIDLAB/Notification';
 import Teams from './MIDLAB/Teams';
 import Tropy from './Tropy';
 import App from './Application';


 function Mapping () {
  return (  

<div>

<Routes>


<Route path='/' element={  <Cricket/>}  />
<Route path='/live' element={<Live/>}/>
<Route path='/Series' element={<Series/>}/>
<Route path='/notify' element={<Notify/>}/>
<Route path='/teams' element={<Teams/>}/>
<Route path='/tropy' element={<Tropy/>}/>
<Route path='/app' element={<App/>}/>


</Routes>
</div>




  );
 }
 
 export default Mapping;