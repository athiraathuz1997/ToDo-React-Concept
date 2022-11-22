import React from 'react'

function Listitem({ task ,index,removetask}) {
  return (
    <div>
        <br/>
      {task.title}
      
      <button onClick={()=>{removetask(index)}}>Delete</button>
    </div>
  )
}

export default Listitem
