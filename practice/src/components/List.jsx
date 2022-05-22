import React from "react";
import {v4 as uuid}from "uuid";
import {Listitem} from "./ListItem";
 

function List()
{
  const[query,setQuery]=React.useState("");
  const [list ,setList]=React.useState([]);

  const handleAdd= ()=>{
    const payload={
      title:query,
      status:false,
      id:uuid()
    }
    setList([...list,payload])
  };
  const handleDelete =(id)=>{
    let updated=list.filter((item)=> item.id!==id)
    setList(updated)
  };


  return(
    <>
<h1> list of items</h1>
<div>
<input value={query}  onChange={(e)=> setQuery(e.target.value)}  type="text"  placeholder="enter"/>
 <button  onClick={handleAdd}>Add</button>
 </div>
 <div>
   {list.map((item)=> {
    //  <div> {item.title}</div>
    return(
      <Listitem handleDelete={handleDelete} key={item.id} {...item}/>
    )

  })}
   </div>
    </>
  )
}
export {List}
