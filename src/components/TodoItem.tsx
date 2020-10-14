import React from 'react'
import { Todo } from '../type/Todo';
import './TodoItem.css';

function TodoItem({ todo, handleToggle, handleRemove }: {key: number, todo: Todo, handleToggle: (id: number) => void, handleRemove: (id: number) => void}) {
    return (
        <div className={todo.done ? 'done' : ''}>
            <span className="text" onClick={() => handleToggle(todo.id)}>{todo.text}</span>
            <span className="remove" onClick={() => handleRemove(todo.id)}>(X)</span>
        </div>
    );
}

export default TodoItem;