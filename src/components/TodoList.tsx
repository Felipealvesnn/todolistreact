import { useState } from "react";
import { Todo } from "../models/Todo";
import TodoListemItem from "./TodoListItem";


const TodoList: React.FC = () => {


    const Todosrs: Todo[] = [{
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
    },
    ];
    const [todos, setTodos] = useState(Todosrs);
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
                    {todos?.map((todo) => (
                        <TodoListemItem key={todo.id} taks={todo} />
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default TodoList;