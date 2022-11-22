import React,{useState} from 'react'

const Additem=({addTask}) =>{
    const [state,setState]=useState("");
  const addValue=()=>{
   addTask(state);
   setState(" ")
  }
  return (
    <div>
      <input type="text" value={state} onChange={(e)=>{setState(e.target.value)}}/>
      <button onClick={addValue}>Add</button>
      
    </div>
  )
}

export default Additem
