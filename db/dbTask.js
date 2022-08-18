const fs = require('fs');

const task_file = './data/task.json';

const saveToDB = async (data) => {
  try {
    fs.writeFileSync(task_file, JSON.stringify(data), { encoding: 'utf8' });
    //const data = fs.writeFileSync('./out.json', JSON.stringify(d));
    return {
      ok: true,
      message: 'task saved',
    };
  } catch (err) {
    return {
      ok: false,
      message: 'Something went wrong',
      err,
    };
  }
};

const readDB = async () => {
  try {
    const dataDB = await fs.readFileSync(task_file);
    return {
      ok: true,
      message: 'DB load',
      data: JSON.parse(dataDB),
    };
  } catch (err) {
    return {
      ok: false,
      message: 'Something went wrong',
      err,
    };
  }
};

module.exports = {
  saveToDB,
  readDB,
};
