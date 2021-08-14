import './App.css';
import TodoFooter from './TodoFooter';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <main className="App-containter">
          <h1>Todo App</h1>
          <TodoInput />
          <TodoList/>
          <TodoFooter />
      </main>
    </div>
  );
}

export default App;
