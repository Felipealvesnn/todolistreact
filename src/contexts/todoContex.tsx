import { createContext } from "react";
import { TodoContextType } from "./TodoContextType";
import { Todo } from "../models/Todo";

export const TodoContext = createContext<TodoContextType>({
    todo: [],
    addTodo: () => { },
    removeTodo: () => { },
    toggle: () => { }

})

const TodoProvider = (props: any) => {
    const todo: Todo[] = [{
        id: 1,
        task: "Task 1",
        description: "Description 1",
        done: false
    },
    {
        id: 2,
        task: "Task 2",
        description: "Description 2",
        done: true
    },]
    const addTodo = (task: string, description: string) => { }
    const removeTodo = (todo: Todo) => { }
    const toggle = (todo: Todo) => { }

    return (
        <TodoContext.Provider value={{
            todo,
            addTodo,
            removeTodo,
            toggle
        }}
        >
            {props.children}
        </TodoContext.Provider>
    )

}

export default TodoProvider;