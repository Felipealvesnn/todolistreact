
import './App.css';
import TaskListPage from './components/TaskListPage ';
import { TodoContext } from './contexts/todoContex';
import { useContext } from 'react';

function App() {
  const {todo} = useContext(TodoContext);

  
  return (
    <div className="App">
      <TaskListPage />
    </div>
  );
}

export default App;
