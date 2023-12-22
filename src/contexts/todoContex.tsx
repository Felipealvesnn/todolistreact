// Importe os tipos necessários e o useState, se ainda não estiverem importados
import React, { createContext, useState } from 'react';
import { Todo } from '../models/todo';
import { TodoContextType } from './TodoContextType';



export const TodoContext = createContext<TodoContextType>({
    todo: [],
    addTodo: () => { },
    removeTodo: () => { },
    toggle: () => { }
});

const TodoProvider = (props: any) => {
    // Estado para armazenar a lista de tarefas
    const [todos, setTodos] = useState<Todo[]>([
        {
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
        }
    ]);

    // Método para adicionar uma nova tarefa
    const addTodo = (task: string, description: string) => {
        const newTodo: Todo = {
            id: todos.length + 1,
            task,
            description,
            done: false
        };

        setTodos([...todos, newTodo]);
    };

    // Método para remover uma tarefa
    const removeTodo = (todo: Todo) => {
        const updatedTodos = todos.filter(t => t.id !== todo.id);
        setTodos(updatedTodos);
    };

    // Método para editar uma tarefa
    const toggle = (editedTodo: Todo) => {
        const updatedTodos = todos.map(t =>
            t.id === editedTodo.id ? editedTodo : t
        );

        setTodos(updatedTodos);
    };

    return (
        <TodoContext.Provider value={{
            todo: todos,
            addTodo,
            removeTodo,
            toggle
        }}>
            {props.children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;