import './App.css';
import AddTaskForm from './components/Form';
import Task1 from './components/Task1';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [ taskState, setTaskState ] = useState({
    tasks: [
      { id:1, title:"Dishes", description: "Empty dishwasher", deadline: "Today", done:false },
      { id:2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", done:false },
      { id:3, title: "Tidy up", deadline: "Today", done:false },
      { id:4, title: "Task 4", deadline: "Today" , done:false},
      { id:5, title: "task 5", deadline: "Today" , done:false}
    ]
  });
  const [ formState, setFormState ] = useState({
    title: "",
    description: "",
    deadline: ""
  });

  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks[taskIndex].done = !tasks[taskIndex].done;
    setTaskState({tasks});
  }

  const deleteHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks.splice(taskIndex, 1);
    setTaskState({tasks});
  } 

  const formChangeHandler = (event) => {
    console.log(formState);
    let form = {...formState};

    switch(event.target.name) {
      case "title":
          form.title = event.target.value;
          break;
      case "description":
          form.description = event.target.value;
          break;
      case "deadline":
          form.deadline = event.target.value;
          break;
      default:
          form = formState;
    }
    setFormState(form);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const tasks = [...taskState.tasks];
    const form = {...formState};

    form.id = uuidv4();
    
    tasks.push(form);
    setTaskState({tasks});
  }

  return (
    <div className="container">
    <h1> Task </h1>

      {taskState.tasks.map((task1, index) => (              
    <Task1 
      title={task1.title}
      description={task1.description}
      deadline={task1.deadline}
      done={task1.done}
      markDone={() => doneHandler(index)}
      deleteTask = {() => deleteHandler(index)}
      key={task1.id}

    />
    ))} 
    <AddTaskForm submit={formSubmitHandler} change={formChangeHandler} />
    </div>
  );
}

export default App;
