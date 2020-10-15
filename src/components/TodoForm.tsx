import React, { useState } from 'react';
import { Todos, Todo } from 'type';

type TodoFormProps = {
    todos: Todos,
    handleAdd: (todo: Todo) => void
};

function TodoForm({ todos, handleAdd }: TodoFormProps) {
    const [text, setText] = useState('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAdd({
            id: Math.max(0, ...todos.map(todo => todo.id)) + 1,
            text,
            done: false
        });
        setText('');
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="text"
                value={text}
                onChange={onChange}
            />
            <button type="submit">add</button>
        </form>
    );
}

export default TodoForm;