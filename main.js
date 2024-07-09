import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n \t \t ==={ wellcome in MURATAZA ALI todo_list application }===\n"));
let todo_list = [];
let condition = true;
//make a arrow function to maake a list.
let main = async () => {
    while (condition) {
        let options = await inquirer.prompt([
            {
                name: "option",
                message: "choose an option that are you want ",
                type: "list",
                choices: ["Add_task", "Delete_task", "update_task", "View_todo_list", "Exit"]
            }
        ]);
        if (options.option === "Add_task") {
            await AddTask();
        }
        else if (options.option === "update_task") {
            await UpdateTask();
        }
        else if (options.option === "View_todo_list") {
            await ViewTask();
        }
        else if (options.option === "Delete_task") {
            await deleteTask();
        }
        else if (options.option === "Exit") {
            condition = false;
        }
    }
};
//make an arraw function  to add task in todo_list.
let AddTask = async () => {
    let new_task = await inquirer.prompt([
        {
            name: "task",
            message: "enter your new task",
            type: "input"
        }
    ]);
    todo_list.push(new_task.task);
    console.log(chalk.green(`${new_task.task} task added successfully in todo_list`));
};
let ViewTask = async () => {
    console.log("\n your todo_list\n");
    todo_list.forEach((task, index) => {
        console.log(chalk.yellow(`${index + 1}: ${task}`));
    });
};
let deleteTask = async () => {
    await ViewTask();
    let TaskIndex = await inquirer.prompt([
        {
            name: "Task",
            message: "Sellet an index which are you want to delete",
            type: "number"
        }
    ]);
    let deletedTask = todo_list.splice(TaskIndex.Task - 1, 1);
    console.log(chalk.green(`${deletedTask} task has been deleted successfully fom your todo_list`));
};
let UpdateTask = async () => {
    await ViewTask();
    let update_task_index = await inquirer.prompt([
        {
            name: "task_index",
            message: "Enter your no:of task index that are you want to ubdate",
            type: "number"
        },
        {
            name: "ubdated_task",
            message: "enter yor task which you want to include in todo_list",
            type: "input"
        }
    ]);
    todo_list[update_task_index.task_index - 1] = update_task_index.ubdated_task;
    console.log(chalk.yellowBright(`\n your ubdated task ${update_task_index.index} saved in todo_list successfully [for chack your task "view todo_list"] `));
};
main();
