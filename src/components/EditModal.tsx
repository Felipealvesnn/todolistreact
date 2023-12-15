import React, { useState } from "react";
import UIkit from "uikit";
import { Todo } from "../models/Todo";

interface EditModalProps {
    task: Todo;
    closeModal: () => void;
}

const EditModal = (props: EditModalProps) => {
    const [editedTask, setEditedTask] = useState({ ...props.task });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditedTask((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        // Lógica para salvar as alterações (pode ser um callback para o contexto, por exemplo)
        // Exemplo: saveEditedTask(editedTask);
        UIkit.modal("#edit-modal").hide();
        props.closeModal();
    };

    return (
        <div id="edit-modal" uk-modal="true">
            <div className="uk-modal-dialog uk-modal-body">
                <h2 className="uk-modal-title">Edit Task</h2>
                <label className="uk-form-label">Task:</label>
                <input
                    type="text"
                    name="task"
                    value={editedTask.task}
                    onChange={handleInputChange}
                    className="uk-input"
                />
                <label className="uk-form-label">Description:</label>
                <input
                    type="text"
                    name="description"
                    value={editedTask.description}
                    onChange={handleInputChange}
                    className="uk-input"
                />
                <button
                    className="uk-button uk-button-primary"
                    onClick={handleSave}
                >
                    Save
                </button>
                <button
                    className="uk-button uk-button-default uk-modal-close"
                    type="button"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default EditModal;
