import { isContentEditable } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
function Watch() {
     const [countrytime, settime] = useState([

        { id:1,country:"pakistan",time:"1"},
        { id:2,country:"india",time:"4"},
        { id:3,country:"germany",time:"5"}
    ] )


    const Delete=(country2)=>
    {
    
        settime(
    
           countrytime.filter((ref)=>
           (
    
            ref.country!==country2
           ))
          )
    }
    return ( 

        <div> 
        <div>
        {
             countrytime.map((asher)=>(
<form>
  <thread>
   <th>
     id
 </th>
  <th>
 country
   </th>
   <th>
    time
 </th>
  <th>
       Action
 </th>
  </thread>
<tbody>
 <tr>
   <td>
    {asher.id}
   </td>
   <td>
    {asher.country}
   </td>
   <td>
    {asher.time}
   </td>




 </tr>






</tbody>

<button onclick={()=> Delete(asher.country)}>

     Delete
</button>


   </form>
   

                
  ))
          



  }
  </div>
  <div  style={{
  display:"flex",
  flexWrap:"wrap",


}}>
{


    countrytime.map((ref)=>
    (

        <div  style={
            {
                color:"white",
                backgroundColor:"ActiveCaption",
                width:"30vw",
                height:"200px",
                padding:"20px",
                marginTop:"30px",
                display:"flex",
                flexWrap:"wrap",
                marginLeft:"3%",

            }
        }>
        
 <h3>
    {ref.country}
 </h3>

 <p>
    {ref.time}
 </p>
            </div>
    )
    )
}
</div>
    </div>
  );
}

export default Watch;