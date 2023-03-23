//Project: tasklist
import UI from "./ui.js";
import Task from "./task.js";

const ui = new UI();

ui.showAllTasks();

document.querySelector(".AddTaskBtn").addEventListener("click", (e) => {
  const taskTitle = document.querySelector("#newtaskID").value;

  if (taskTitle.length > 0) {
    const task = new Task(taskTitle);
    ui.addToUI(task);
    ui.resetForm();
    console.log(task);
  }
  console.log(taskTitle);
});

document.querySelector(".task-list").addEventListener("click", (e) => {
  console.log(e.target.className);

  if(e.target.className.includes('task__op_edit'))
  {
    ui.editTask(e);
  }
  if (e.target.className.includes("task__op_delete")) {
    console.log("delete button pressed");
    ui.deleteTask(e);
  }
  if (e.target.className.includes("task-check")) {
    ui.completeTask(e);
    console.log("check box pressed");
  }
});


document.querySelector('.EditTaskBtn').addEventListener('click',(e)=>{
    ui.UpdateTask(e);
});

document.querySelector('.CancelTaskBtn').addEventListener('click',(e)=>{
  ui.CancelTask(e);
})

// task (ID,Title)
//LS


// This project also can be converted to es6 class from prototype method. 
document.querySelector('.EditTaskBtn')