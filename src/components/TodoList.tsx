import React from 'react';
import { Todos } from '../type/Todo';
import TodoItem from './TodoItem';

function TodoList({ todos, handleToggle, handleRemove }: {todos: Todos, handleToggle: (id: number) => void, handleRemove: (id: number) => void}) {
    const list = todos.map(todo => <TodoItem key={todo.id} todo={todo} handleToggle={handleToggle} handleRemove={handleRemove} />);
    return (
        <div>
            {list}
        </div>
    );
}

export default TodoList;