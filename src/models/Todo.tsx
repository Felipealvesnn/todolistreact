export class Todo{

    id?: number;
    task?: string;
    description?: string;
    done?: boolean;

    constructor(id: number, task: string, description: string, done: boolean){
        this.id = id;
        this.task = task;
        this.description = description;
        this.done = done;
    }
}