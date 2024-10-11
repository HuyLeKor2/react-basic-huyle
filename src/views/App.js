import logo from './logo.svg';
import './App.scss';
import ListToDo from './TodoApp/ToDoApp.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Simple Todo App with HuyLe</p>
        < ListToDo />
      </header>
    </div>
  );
}

export default App;
