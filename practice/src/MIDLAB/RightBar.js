import {useState} from 'react';
import  './RightBar.css';
function RightBar(prop) {
   

    const array1=[">Sindh",">Balochistan",];
   
    const array2=[">Soutern Punjab(Pakistan)",">Central Punjab (Pakistan)","Central PNJB chose to field"];
    const array3=[">Northern (Pakistan)",">Khyber Pakhtunkhwa","khyber Trail by 217 runs"];
    const array4=["England","England Lions","day 2- Eng Lions Trail by 89 runs"];
    const array5=["India","NewZealand", "New zealand chose to field"];
    const[right,setright]=useState(

[


{id:1, title:"Quaid-e-azam Trofy",links:array1},
{id:2, title:"Not Coveraged Live",links:array2},
{id:3, title:"Not Coverage Live",links:array3},
{id:4,title:"STUMPS",links:array4},
{id:5,title:"INNINGS BREAK",links:array5},

]






    );
   
   

    const Delete=(d)=>{

        setright(

     right.filter((src)=>(src.id!==d))

        );
    }
   
    return ( 

<div>

    {
        right.map((u)=>(
        <div id="card">
          <h6 id='title'>
     {  u.title}
          </h6>
          <div>

{

    u.links?.map((lk)=>(

        <p>
            {lk}        {prop.sc}
        </p>
    ))
}
</div>
       { <button onClick={()=>{Delete(u.id)}} >
        Delete
      </button> }
        </div> 

        ))




    }
</div>
     );
}

export default RightBar;