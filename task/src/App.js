import './App.css';
import Task1 from './components/Task1';
import React, { useState } from 'react';

function App() {
  const [ taskState, setTaskState ] = useState({
    tasks: [
      { id:1, title:"Dishes", description: "Empty dishwasher", deadline: "Today" },
      { id:2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow" },
      { id:3, title: "Tidy up", deadline: "Today" },
      { id:4, title: "Task 4", deadline: "Today" },
      { id:5, title: "task 5", deadline: "Today" }
    ]
  });
  return (
    <div className="container">
      <h1>  {taskState.tasks.map((task1) => (              
    <Task1 
      title={task1.title}
      description={task1.description}
      deadline={task1.deadline}
      key={task1.id}

    />))}</h1>
    </div>
  );
}

export default App;
