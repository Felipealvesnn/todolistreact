import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import TaskListPage from './components/TaskListPage ';
import NewTaskForm from './components/NewTaskForm ';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskListPage />} />
        <Route path="/nova-tarefa" element={<NewTaskForm />} />
      </Routes>

      <div className="App">
        {/* Remova essa linha */}
        {/* <TaskListPage /> */}
      </div>
    </Router>
  );
}

export default App;
