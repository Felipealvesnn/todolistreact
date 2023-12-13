import { useState } from "react";


const TodoList : React.FC  = () => {
  
    const [task, setTask] = useState<string>("");
    const Todo = [];

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