import React from 'react';
import { Todos } from '../type/Todo';
import TodoItem from './TodoItem';

function TodoList({ todos, setTodos }: {todos: Todos, setTodos: React.Dispatch<React.SetStateAction<Todos>>}) {
    const list = todos.map(todo => <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />);
    return (
        <div>
            {list}
        </div>
    );
}

export default TodoList;