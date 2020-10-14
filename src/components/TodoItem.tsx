import React from 'react'
import { Todo, Todos } from '../type/Todo';
import './TodoItem.css';

function TodoItem({ todo, todos, setTodos }: {key: any, todo: Todo, todos: Todos, setTodos: React.Dispatch<React.SetStateAction<Todos>>}) {
    const handleToggle = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        setTodos(todos.map(todo2 => todo.id === todo2.id ? {...todo2, done: !todo2.done} : todo2));
    };

    const handleRemove = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.stopPropagation();
        setTodos(todos.filter(todo2 => todo.id !== todo2.id));
    };

    return (
        <div className={todo.done ? 'done' : ''}>
            <span className="text" onClick={handleToggle}>{todo.text}</span>
            <span className="remove" onClick={handleRemove}>(X)</span>
        </div>
    );
}

export default TodoItem;