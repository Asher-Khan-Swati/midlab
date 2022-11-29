import {useState} from "react";

import "./LeftBar.css";
function LeftBar() {

    const array1=[">T20 Time Out",">Fantasy Pick",">T20 Time Out",">ICC Rankings"];
    const array2=[">Android App",">ios App"];
    const array3=[">instramgram",">Twitter",">FaceBook",">YouTube"];
    const array4=[">The Cricet Monthly",">ESPN"];
    const [item,setItem]=useState(

[


    { id:1,title:"Quick Links",links:array1},
    {id:2,title:"ESPNcricinfo",links:array2},
    {id:3,title:"Follow ESPNcric",links:array3},
    {id:4,title:"ESPN Sites",links:array4},



]

        
    );

    // const Delete=(h)=>{

    //     setItem(

    //  item.filter((src1)=>(src1.id!==h))

    //     );
    // }
   
    
    return ( 

        <div id="mainDiv">

         {

           item.map((ref)=>
           (

            <div id="card">
             <h6 id="title">
                {ref.title}
             </h6>
             <div>

                {

                    ref.links?.map((lRef)=>(

                        <p>
                            {lRef}
                        </p>
                    ))
                }
             </div>

             
             {/* <button onClick={()=>{Delete(ref.id)}}>

                    Delete
             </button> */}
 
            </div>

           )
           )

         }


        </div>
     );
}

export default LeftBar;