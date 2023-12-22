import React, { useContext } from 'react';
import styled from 'styled-components';
import { Todo } from '../models/todo';
import { TodoContextType } from '../contexts/TodoContextType';
import { TodoContext } from '../contexts/todoContex';
import { Link, } from 'react-router-dom'; // Importe o Link

const PageContainer = styled.div`
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const TodoTable = styled.table`
  width: 80%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  background-color: #3498db;
  color: #fff;
  padding: 10px;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;
const GreenButton = styled(Link)`
  uk-button uk-button-primary
`;

const TableCell = styled.td`
  padding: 10px;
`;

const TaskListPage: React.FC = () => {
  const { todo, toggle, removeTodo } = useContext<TodoContextType>(TodoContext)!;

  return (
    <PageContainer>
      <h1>Lista de Tarefas</h1>
      {/* Use o Link para navegar para a página de formulário */}
     <GreenButton to="/nova-tarefa">Adicionar Nova Tarefa</GreenButton>
    

      <TodoTable>
        <thead>
          <TableRow>
            <TableHeader>Tarefa</TableHeader>
            <TableHeader>Descrição</TableHeader>
            <TableHeader>Feito</TableHeader>
            <TableHeader>Ações</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {todo.map((task: Todo) => (
            <TableRow key={task.id}>
              <TableCell>{task.task}</TableCell>
              <TableCell>{task.description}</TableCell>
              <TableCell>
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => toggle({ ...task, done: !task.done })}
                  readOnly
                />
              </TableCell>
              <TableCell>
                <button onClick={() => removeTodo(task)}>Excluir</button>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </TodoTable>
    </PageContainer>
  );
};

export default TaskListPage;
