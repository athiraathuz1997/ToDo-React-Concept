
import { useEffect, useState } from 'react';
import Additem from './Additem';
import './App.css';
import Listitem from './Listitem';

function App() {
  const [tasks,setTask]=useState([]);
  useEffect(()=>{
    document.title=`you have ${tasks.length} pending tasks`
  })
  const addTask=(title)=>{
    const newtask=[...tasks,{title}]
    setTask(newtask)
  }
const removetask=(index)=>{
const del=[...tasks]
del.splice(index,1)
setTask(del)
}
  return (
    <>
    <div className="App">
      <h4>ToDo App</h4>
      <div>
        <Additem addTask={addTask}/>
      </div>
      <div>
        {
          tasks.map((task,index)=>(
            <Listitem task={task} index={index} removetask={removetask} key={index}/>
            ))
        }
        
      </div>
    </div>
    </>
  );
}

export default App;
