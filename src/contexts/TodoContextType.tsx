import { Todo } from "../models/todo";


export interface TodoContextType {
    todo: Todo[];
    addTodo: (task: string, description: string) => void;
    removeTodo: (todo: Todo) => void;
    toggle: (todo: Todo) => void;
}