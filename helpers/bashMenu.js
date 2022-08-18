require('colors');
const inquirer = require('inquirer');

const bashMenu = async () => {
  console.log('====================='.green);
  console.log(`${'====='.green} ${'TASK BASH'.white} ${'====='.green}`);
  console.log('=====================\n'.green);

  const taskOpt = [
    { value: 1, name: `${'1'.green}. Create task` },
    { value: 2, name: `${'2'.green}. List task` },
    { value: 0, name: `${'0'.green}. Exit` },
  ];

  const question = [
    {
      type: 'list',
      name: 'options',
      message: `Select an option`,
      choices: taskOpt,
    },
  ];
  
  const { options } = await inquirer.prompt(question);
  return options;
};

const bashInput = async (msg) => {
  const question = [
    {
      type: 'input',
      name: 'description',
      message: msg,
      validate(val) {
        if (val.length === 0) {
          return 'Please write a task';
        }
        return true;
      },
    },
  ];
  const { description } = await inquirer.prompt(question);
  return description;
};

module.exports = {
  bashMenu,
  bashInput,
};
