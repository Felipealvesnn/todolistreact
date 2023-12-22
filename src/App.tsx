
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import TaskListPage from './components/TaskListPage ';
import { TodoContext } from './contexts/todoContex';
import { useContext } from 'react';
import NewTaskForm from './components/NewTaskForm ';

function App() {
  const { todo } = useContext(TodoContext);


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={TaskListPage} />
          <Route path="/nova-tarefa" Component={NewTaskForm} />
        </Routes>
      </Router>

      <div className="App">
        <TaskListPage />
      </div>
    </>
  );
}

export default App;
