import { uniqid } from 'uniqid';
import { useEffect, useState } from 'react';
import TodoListItem from './TodoListItem';

export default function TodoList() {
    const [todos, setTodos] = useState([
        { id: 0, text: 'Clean my room', isDone: false },
        { id: 1, text: 'Wash the dishes', isDone: false },
        { id: 2, text: 'Go to the gym', isDone: false }
    ]);

    useEffect(() => console.log('TodoList is mounted.'), []);

    function addBtnClickHandler(e) {
        const todo = {
            id: uniqid(),
            text: e.target.previousSibling.value,
            isDone: false
        };

        setTodos(state => [
            ...state,
            todo
        ]);

        e.target.previousSibling.value = '';
    }

    const todoDeleteClickHandler = (e, id) => {
        e.stopPropagation();
        console.log(`Todo task with id ${id} is deleted!`);

        setTodos(state => state.filter(todo => todo.id !== id));
    };

    const toggleTodoItemClickHandler = (id) => {
        setTodos(state => {
            let selectedTodo = state.find(todo => todo.id === id);
            let toggledTodo = { ...selectedTodo, isDone: !selectedTodo.isDone };
            let restTodos = state.filter(todo => todo.id !== id);

            return [...restTodos, toggledTodo];
        });
    };

    return (
        <>
            <input type="text" name="todoInput" />
            <button onClick={addBtnClickHandler}>Add</button>

            <ul>
                {todos.map(todo => <TodoListItem key={todo.id} todo={todo} onClick={() => toggleTodoItemClickHandler(todo.id)} onDelete={todoDeleteClickHandler} />)}
            </ul>
        </>
    );
}