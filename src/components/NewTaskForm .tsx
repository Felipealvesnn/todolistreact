// NewTaskForm.jsx
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { TodoContext } from '../contexts/todoContex';
import { TodoContextType } from '../contexts/TodoContextType';
import { Link, useNavigate  } from 'react-router-dom';
import { toast } from 'react-toastify';

const FormContainer = styled.div`
  display: flex;  
  flex-direction: column;
  justify-content: center;
  height: 90vh;
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
const GreenButton = styled(Link)`
  width: 153px;
  justify-content: center;
  background-color: #2ecc71;  // Cor verde
  color: #fff;
  padding: 10px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  margin-top: 10px;
`;


const Button = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px;
  cursor: pointer;
`;



const NewTaskForm: React.FC = () => {
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    const { addTodo } = useContext<TodoContextType>(TodoContext)!;
    const history = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (task.trim() === '' || description.trim() === '') {
            // Mostrar uma notificação se os campos estiverem vazios
            toast.error('Por favor, preencha todos os campos.');
            return;
        }
        addTodo(task, description);
        // Limpar os campos após a adição da tarefa
        history('/');
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
                <GreenButton to="/">Voltar para a Página</GreenButton>
                {/* <Link to="/">voltar pra pagina</Link> */}
            </Form>
        </FormContainer>
    );
};

export default NewTaskForm;
