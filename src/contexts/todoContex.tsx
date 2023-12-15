import { createContext } from "react";
import { TodoContextType } from "./TodoContextType";

export const TodoContext = createContext<TodoContextType>({
    todo: [],
    addTodo: () => { },
    removeTodo: () => { },
    toggle: () => { }

})