// NewTaskForm.jsx
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { TodoContext } from '../contexts/todoContex';
import { TodoContextType } from '../contexts/TodoContextType';

const FormContainer = styled.div`
  max-width: 400px;
  margin: 20px auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 16px;
`;

const Button = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px;
  cursor: pointer;
`;
interface NewTaskFormProps {
    onAddTask: (task: string, description: string) => void;
}


const NewTaskForm: React.FC= () => {
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    const {  addTodo } = useContext<TodoContextType>(TodoContext)!;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addTodo(task, description);
        // Limpar os campos após a adição da tarefa
        setTask('');
        setDescription('');
    };

    return (
        <FormContainer>
            <h2>Adicionar Nova Tarefa</h2>
            <Form onSubmit={handleSubmit}>
                <Label>Tarefa:</Label>
                <Input type="text" value={task} onChange={(e) => setTask(e.target.value)} />

                <Label>Descrição:</Label>
                <Input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />

                <Button type="submit">Adicionar Tarefa</Button>
            </Form>
        </FormContainer>
    );
};

export default NewTaskForm;
