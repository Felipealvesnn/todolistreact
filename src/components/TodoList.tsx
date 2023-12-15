import { useState } from "react";
import { Todo } from "../models/Todo";
import TodoListemItem from "./TodoListItem";


const TodoList: React.FC = () => {


    const Todosrs: Todo[] = [
    
    ];
    return (
        <>
            <table className="uk-table uk-table-striped">
                <caption>Lista de tarefas</caption>
                <thead>
                    <tr>
                        <th>feito?</th>
                        <th>Task</th>
                        <th>Description</th>

                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Todosrs?.map((todo) => (
                        <TodoListemItem key={todo.id} taks={todo} />
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default TodoList;