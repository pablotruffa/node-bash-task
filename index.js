const { saveToDB, readDB } = require('./db/dbTask');
const { bashMenu, bashInput } = require('./helpers/bashMenu');

const Task = require('./models/Task');
const TaskItem = require('./models/TaskItem');

(async () => {
  const task = new Task();

  const dataDB = await readDB();

  if (dataDB.ok) {
    await task.loadTask(dataDB.data);
  }

  let opt;
  do {
    opt = await bashMenu();
    switch (opt) {
      case 1:
        //Create task
        //Prompt task description
        const description = await bashInput('Write a task');
        task.newTask(description);

        const resp = await saveToDB(task.tasklist);
        console.log(resp);
        break;

      case 2:
        //List Task
        const tasklist = task.tasklist;
        console.log(tasklist);
    }
  } while (opt !== 0);
})();
