import React from "react";

function Listitem({title,id,status,handleDelete})
{
  return(
    <div style={{ border:"1px solid black",margin:10,padding:5}}>
      <h3> {title}</h3>
      <button onClick={()=> handleDelete(id)}>Delete</button>
      </div>
  );
}
export {Listitem}