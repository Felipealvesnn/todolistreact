import { useContext, useState } from "react";
import UIkit from "uikit";
import { Todo } from "../models/Todo";
import { TodoContextType } from "../contexts/TodoContextType";

import EditModal from "./EditModal"; // Importe ou crie um componente para o modal de edição
import { TodoContext } from "../contexts/todoContex";

interface TodoListItemProps {
    task: Todo;
}

const TodoListItem = (props: TodoListItemProps) => {
    const { removeTodo, toggle } = useContext<TodoContextType>(TodoContext);
    const [isEditing, setIsEditing] = useState(false);

    const onRemove = (todo: Todo) => {
        removeTodo(todo);
    };

    const handleChange = () => {
        toggle({ ...props.task, done: !props.task.done });
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const closeModal = () => {
        setIsEditing(false);
    };

    return (
        <>
            <tr className="uk-animation-slide-bottom-medium">
                <td>
                    <label>
                        <input
                            className="uk-checkbox"
                            type="checkbox"
                            onChange={handleChange}
                            checked={props.task.done}
                        />
                    </label>
                </td>
                <td className="uk-width-auto">{props.task.task}</td>
                <td className="uk-width-auto">{props.task.description}</td>

                <td className="uk-width-auto">
                    <button
                        uk-icon="trash"
                        onClick={() => onRemove(props.task)}
                        className="uk-button uk-button-danger"
                    >
                        Delete
                    </button>
                    <button
                        className="uk-button uk-button-primary"
                        onClick={handleEditClick}
                    >
                        Edit
                    </button>
                </td>
            </tr>

            {isEditing && (
                <EditModal
                    task={props.task}
                    closeModal={closeModal}
                />
            )}
        </>
    );
};

export default TodoListItem;
