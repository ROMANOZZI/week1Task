import React from "react";
export default  function Component(priority){
    let pr=priority.priority;
    console.log(pr);
    let emoji;
    if(pr=="URGENT") emoji="💥";
    if(pr=="HIGH") emoji="🟥";
    if(pr=="MEDIUM") emoji="💛";
    if(pr=="LOW") emoji="💚";
    
     return(
        <div>{emoji}</div>
      

     )

}

