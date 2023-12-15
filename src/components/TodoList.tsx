import { useContext, useState } from "react";
import { Todo } from "../models/Todo";
import TodoListemItem from "./TodoListItem";
import { TodoContextType } from "../contexts/TodoContextType";
import { TodoContext } from "../contexts/todoContex";


const TodoList: React.FC = () => {

    const { todo } = useContext<TodoContextType>(TodoContext);

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
                    {todo?.map((todo) => (
                        <TodoListemItem key={todo.id} task={todo} />
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default TodoList;