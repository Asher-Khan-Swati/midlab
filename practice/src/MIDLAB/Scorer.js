import { useState } from "react";
import RightBar from "./RightBar";
function Scorer() {
    const [score, setScore]=useState(7);
    
    return ( 
<RightBar sc={score}/>
        
     );
}

export default Scorer;