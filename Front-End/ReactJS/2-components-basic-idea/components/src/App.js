import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo List</h1>
      </header>

      <main>
        <TodoList />
      </main>

      <footer>
        &copy; All right reserved
      </footer>
    </div>
  );
}

export default App;
