//Project: tasklist
import UI from './UI.js'
import Task from './Task.js'

const ui = new UI();

document.querySelector('.AddTaskBtn').addEventListener('click',e=>{
    const taskTitle = document.querySelector('#newTaskID').value;
    console.log(taskTitle);
    const task = new Task(taskTitle);
    ui.addToUI(task);
    console.log =(task);
});


// task (ID,Title)

//LS