import React from 'react';
import { Todos } from '../type';
import TodoItem from './TodoItem';

type TodoListProps = {
    todos: Todos,
    handleToggle: (id: number) => void,
    handleRemove: (id: number) => void
};

function TodoList({ todos, handleToggle, handleRemove }: TodoListProps) {
    const list = todos.map(todo => <TodoItem key={todo.id} todo={todo} handleToggle={handleToggle} handleRemove={handleRemove} />);
    return (
        <div>
            {list}
        </div>
    );
}

export default TodoList;