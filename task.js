/*
It is a process how we can use es6 class rather than prototype

class Task{
  constructor(title){
    this.id = new Date().toLocaleString();
    this.title = title;
    this.isCompleted = false;
  }
}
*/
function Task(title) {
  this.id = new Date().toLocaleString();
  this.title = title;
  this.isCompleted = false;
}
export default Task;

