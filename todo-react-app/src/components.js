import React from 'react';

export function Todo({isDone, text}) {
    if(isDone) 
        return (<strike>{text}</strike>)
    else
        return (<span>{text}</span>)
}


export function TodoList({ todos, toggleTodo, addTodo }) {

    const onSubmit = (event) => {
        const input = event.target;
        const text = input.value;
        const isEnterKey = (event.which == 13);
        const isLongEnough = text.length > 0;
        
        if(isEnterKey && isLongEnough) {
            input.value = '';
            addTodo(text);
        }
    };

    const toggleClick = id => event => toggleTodo(id);

    return (
        <div className="todo app">
            <input type="text" placeholder="Add todo" onKeyDown={onSubmit} />
            <ul className="todo__list">
                {todos.map(t => (
                    <li key={t.get('id')} className="todo__item" onClick={toggleClick(t.get('id'))}>
                        <Todo {...t.toJS()} />
                    </li>
                ))}
            </ul>
        </div>
    )
}