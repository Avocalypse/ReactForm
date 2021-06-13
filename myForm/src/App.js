import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList';

const App = () => {
  return (
    <>
      <div>
        <nav >
          <h2>Je suis la nav bar</h2>
        </nav >

      </div>
      <div>
        <TodoList />
      </div>
    </>
  );
}

export default App;
