import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  return (
    <div>
    <header>
    <h1 style={{ textAlign: 'center' }}>Todo List</h1>
    </header>
    <AddTodoForm />
    <TodoList />
    
  </div>
  );
}

export default App;
