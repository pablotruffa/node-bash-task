const { v4: uuidv4 } = require('uuid');
class TaskItem {
  id = '';
  desc = '';
  completed = '';

  constructor(desc, id = uuidv4(), completed = false) {
    this.id = id;
    this.desc = desc;
    this.completed = completed;
  }
}

module.exports = TaskItem;
