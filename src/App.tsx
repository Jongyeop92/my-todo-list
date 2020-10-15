import React, { useState } from 'react';
import { Todos, Todo } from 'type';
import TodoForm from 'components/TodoForm';
import TodoList from 'components/TodoList';

function App() {
  const [todos, setTodos] = useState<Todos>([]);

  const handleAdd = (todo: Todo): void => {
    setTodos(todos.concat(todo));
  };

  const handleToggle = (id: number): void => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo));
  };

  const handleRemove = (id: number): void => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <TodoForm todos={todos} handleAdd={handleAdd} />
      <TodoList todos={todos} handleToggle={handleToggle} handleRemove={handleRemove} />
    </div>
  );
}

export default App;