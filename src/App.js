import React, { useState } from "react";
import { nanoid } from "nanoid";
import FilterButton from "./components/filterButton";
import Form from "./components/form";
import Todo from "./components/todo";

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('All');
  const taskList = tasks.filter(FILTER_MAP[filter])
                          .map(task => <Todo 
                                        name={task.name}
                                        completed={task.completed}
                                        id={task.id}
                                        key={task.id}
                                        toogleTaskCompleted={toogleTaskCompleted}
                                        deleteTask={deleteTask}
                                        editTask={editTask}
                                        />);
  const filterList = FILTER_NAMES.map(name => (
    <FilterButton key={name} name={name} isPressed={name === filter} setFilter={setFilter}/>
  ));
  
  function addTask(name){
    const newTask = {id: "todo-" + nanoid(), name: name, completed: false};
    setTasks([...tasks, newTask])
  }
  function toogleTaskCompleted(id){
    const updatedTasks = tasks.map(task => {
      if(id === task.id){
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  function deleteTask(id){
    const remainingTasks = tasks.filter(task => task.id !== id);
    setTasks(remainingTasks);
  }
  function editTask(id, newName){
    const editedTaskList = tasks.map(task => {
      if(id === task.id){
        return {...task, name: newName};
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;
  return (
    <div id="app"
      className="container mx-auto flex items-center flex-col mt-10">
      <h1 className="text-5xl font-black">My ToDo List</h1>
      <Form onSubmit={addTask}/>
      <div className="container">
        <div className="flex justify-center">
          {filterList}
        </div>
      </div>
      
      <h2 className="font-bold">
        {headingText}
      </h2>
      <ul aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}
export default App;
