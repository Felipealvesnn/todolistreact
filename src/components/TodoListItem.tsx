
import { Todo } from "../models/Todo";

interface TodoListItemProps {

    taks: Todo;
    

}


const TodoListemItem = (props: TodoListItemProps) => {
    const onRemove = (todo: Todo) => {


    }
    const handleChange = () => {


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