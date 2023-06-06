//cmd+shift+p = opens user settings. Change code language here!
import React from 'react';
import {  useState  } from 'react'
import Header from './components/Header.js'
import Tasks from './components/Tasks.js';
import AddTask from './components/AddTask.js';


const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    /* {
        id: 1,
        text: 'Doctor Appoint',
        day: '2/5 @ 2:30pm',
        reminder: true,
    }, 
    {
        id: 2,
        text: 'School Meeting',
        day: '2/6 @ 1:30pm',
        reminder: true,
    }, 
    {
        id: 3,
        text: 'Shopping',
        day: '2/5 @ 2:30pm',
        reminder: false,
    } */
    //works with or without any items in the array!
])

//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}


// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}
 

//Toggle reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map(
      (task) => task.id === id ? 
      {  ...task, reminder: !task.reminder } : task)
      )
}

 return (
   <div className="container">
     <Header onAdd={ () => setShowAddTask(!showAddTask) } showAdd={showAddTask}/>
     {showAddTask && <AddTask onAdd={addTask}/>}
    {tasks.length > 0 ? ( 
    <Tasks tasks={tasks} 
    onDelete={deleteTask} 
    onToggle={toggleReminder}
    />
    ) : (
      'No Tasks to Show'
    )}
   </div>
  )
 }


 


export default App;
