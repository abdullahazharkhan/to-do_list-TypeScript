import * as inquirer from "inquirer";
import { Task } from "./tasksToDo.js";
import figlet from "figlet";
import chalk from 'chalk'
const prompt = inquirer.createPromptModule();
const toDo: Task = new Task();

function main(): void {
    prompt([
        {
            type: "list",
            name: "usrInpt",
            message: chalk.green("What to do?\n"),
            choices: ["Add Task", "Delete Task", "Show Tasks", "Delete all Tasks"]
        }
    ]).then(ans => {
        if(ans["usrInpt"] != ""){
            if(ans["usrInpt"] === "Add Task"){
                addTask();
                
            } else if (ans["usrInpt"] === "Delete Task") {
                delTask();
            } else if (ans["usrInpt"] === "Show Tasks") {
                toDo.showTask();
                main();
            } else if (ans["usrInpt"] === "Delete all Tasks") {
                toDo.delAllTasks();
                main();
            } else {
                console.log("invalid operation")
            }
        }
    })
}

function addTask(): void {
    prompt([
        {
            type: "input",
            name: "addtask",
            message: chalk.green("What to add?\n")
        }
    ]).then(ans => {
        if (ans["addtask"] != ""){
            toDo.addTasks(ans["addtask"]);
            console.log(`\n List: `)
            toDo.showTask();
            main();
        } else {
            console.log(chalk.redBright("> invalid"))
            main();
        }
    })
}

function delTask(): void {
    let task: string[] = [];
    if(toDo.tasks.length == 0){
        task= ["No Task to be deleted"];
    } else {
        task = toDo.tasks;
    }
    prompt([
        {
            type: "list",
            name: "deltask",
            message: chalk.green("What to delete?\n"),
            choices: task
        }
    ]).then(ans => {
        if (ans["deltask"] != ""){

            if(ans["delTask"] == "No Task to be deleted") {
                main();
            } else {
                toDo.delTask(ans["deltask"]);
                main();
            }
        } else {
            console.log(chalk.red("> invalid operation"));
            main();
        }
    })
} 
console.log(chalk.cyan(figlet.textSync('ToDo - List', {
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
})));
main();