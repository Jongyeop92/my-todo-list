import React from 'react'
import { Todo } from '../type';
import './TodoItem.css';

type TodoItemProps = {
    key: number,
    todo: Todo,
    handleToggle: (id: number) => void,
    handleRemove: (id: number) => void
};

function TodoItem({ todo, handleToggle, handleRemove }: TodoItemProps) {
    return (
        <div className={todo.done ? 'done' : ''}>
            <span className="text" onClick={() => handleToggle(todo.id)}>{todo.text}</span>
            <span className="remove" onClick={() => handleRemove(todo.id)}>(X)</span>
        </div>
    );
}

export default TodoItem;