import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
function addTask(task) {
  console.log(task);

}

function App() {

  const [task,setTask] = useState("")
  const [taskList,setTaskList] = useState([])
  return (
    <div className="App">
      <div className="addInput">
      <input placeholder="Enter Task" onChange={(evt) => {setTask(evt.target.value)}}></input>
      <Button variant="outline-primary" onClick={() => setTaskList((oldTaskList) =>  [...oldTaskList,task])}>Add Task</Button>
      </div>
      
      <ul>
      {        
        taskList.map((task_)=> (
          <div className="listItem">
            <li key={task_.id}>{task_}</li>
            <Button variant="outline-danger" class="deleteButton">Delete</Button>{' '}
             
          </div>
          
        ))

      }
      
      </ul>
      
    </div>
  );
}

export default App;
