import chalk from "chalk";
export class Task {
    tasks = [];
    addTasks(task) {
        this.tasks.push(task);
        console.log(chalk.greenBright("Task has been added! \n"));
    }
    delTask(task) {
        let value = task;
        if (task) {
            for (let i = this.tasks.length; i--;) {
                if (this.tasks[i] === value)
                    this.tasks.splice(i, 1);
            }
        }
        else {
            console.log(chalk.green(`> There is no task to be deleted`));
        }
        // this.tasks = this.tasks.filter(x => x !== value); 
    }
    showTask() {
        if (this.tasks.length == 0) {
            console.log(chalk.green(`> No task to be displayed \n`));
        }
        else {
            this.tasks.forEach(e => console.log(chalk.green(e)));
        }
    }
    delAllTasks() {
        while (this.tasks.length > 0) {
            this.tasks.pop();
        }
        console.log(chalk.redBright("Deleted \n"));
    }
}
//# sourceMappingURL=tasksToDo.js.map