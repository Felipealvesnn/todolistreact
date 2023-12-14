import { useState } from "react";
import { Todo } from "../models/Todo";


const TodoList: React.FC = () => {

    const [task, setTask] = useState<string>("");
    const Todos: Todo[] = [{
        id: 1,
        task: "Task 1",
        description: "Description 1",
        done: false
    },
    {
        id: 2,
        task: "Task 2",
        description: "Description 2",
        done: false
    },
    ];

    return (
        <div>

            <div className="uk-container">
                <div className="uk-card uk-card-default uk-card-body">
                    <form>
                        <fieldset className="uk-fieldset">
                            <div className="uk-margin">
                                <input className="uk-input" type="text"
                                    placeholder="Task" />

                            </div>
                            <div className="uk-margin">
                                <textarea className="uk-textarea" rows={5} placeholder="Description"></textarea>
                            </div>
                            <div className="uk-margin">
                                <button className="uk-button uk-button-primary">Add</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default TodoList;