
import { useContext } from "react";
import { Todo } from "../models/Todo";
import { TodoContextType } from "../contexts/TodoContextType";
import { TodoContext } from "../contexts/todoContex";

interface TodoListItemProps {

    taks: Todo;
    

}


const TodoListemItem = (props: TodoListItemProps) => {
    const {  addTodo, removeTodo, toggle } = useContext<TodoContextType>(TodoContext);

    const onRemove = (todo: Todo) => {
        removeTodo(todo);

    }
    const handleChange = () => {
        toggle(props.taks);

    }
    return (
        <>
            <tr className="uk-animation-slide-bottom-medium ">
                <td>
                    <label>
                        <input className="uk-checkbox"
                            type="checkbox"
                            onChange={handleChange
                            }
                            checked={props.taks.done} />
                    </label>
                </td>
                <td className="uk-width-auto">
                    {props.taks.task}</td>
                <td className="uk-width-auto">
                    {props.taks.description}</td>

                <td className="uk-width-auto">

                    <button uk-icon="trash" onClick={() => onRemove(props.taks)}
                        className="uk-button uk-button-danger">Delete
                    </button>
                    <button className="uk-button uk-button-primary">Edit
                    </button>
                </td>

            </tr>
        </>
    )

}
export default TodoListemItem;