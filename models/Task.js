const TaskItem = require('./TaskItem');

class Task {
  list = [];

  constructor(listItem = []) {
    this.list = listItem;
  }

  get tasklist() {
    return this.list;
  }

  newTask(task) {
    const taskitem = new TaskItem(task);
    this.list.push(taskitem);
  }

  loadTask(tasklist = []) {
    tasklist.map((task) => {
      const taskitem = new TaskItem(task.desc, task.id);
      this.list.push(taskitem);
    });
  }

  listToArray() {
    this.tasklist.forEach((task, index) => {
      const idx = index + 1;
      const { desc, completed } = task;

      let output;
    });
  }
}

module.exports = Task;
