
import React from "react";
import "./Middle_Section.css";
import {useState} from "react";

function Middle_Section() {
  
 



  const [mid,setmid]=useState(

[

   {id:1,picture:"./austrlia.jpg",descript:"asher khan swati"},
   {id:2,picture:"./marchal.jpg",descript:"asher khan swati"},
   {id:3,picture:"./austrlia.jpg",descript:"asher khan swati"},
   {id:4,picture:"./austrlia.jpg",descript:"asher khan swati"}

]
 );
 
 const Delete=(d)=>{

   setmid(

mid.filter((src)=>(src.id!==d))

   );
}
  return ( 
      <div id="main">
{

  mid.map((Y)=>(
    <div id="card">
   
  
<img src={Y.picture}  id="picture"/>

   

<section>   

{Y.descript}


</section>


<button   onClick={()=>{Delete(Y.id)}}                                    >

   delete
</button>




    </div>









  ))


}









      </div>
    );
}

export default Middle_Section;