import { Todo } from "../models/Todo";

export interface TodoContextType {
    todo: Todo[];
    addTodo: (task: string, description: string) => void;
    removeTodo: (todo: Todo) => void;
    toggle: (todo: Todo) => void;
}