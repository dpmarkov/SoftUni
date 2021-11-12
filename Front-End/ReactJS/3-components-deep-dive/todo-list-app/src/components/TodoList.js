import { useEffect, useState } from 'react';
import TodoListItem from './TodoListItem';

export default function TodoList() {
    const [todos, setTodos] = useState([
        { id: 0, text: 'Clean my room' },
        { id: 1, text: 'Wash the dishes' },
        { id: 2, text: 'Go to the gym' }
    ]);

    useEffect(() => console.log('TodoList is mounted.'), []);

    function addBtnClickHandler(e) {
        const todo = {
            id: todos.length,
            text: e.target.previousSibling.value
        };
        
        setTodos(state => [
            ...state,
            todo
        ]);

        e.target.previousSibling.value = '';
    }

    return (
        <>
            <input type="text" name="todoInput" />
            <button onClick={addBtnClickHandler}>Add</button>

            <ul>
                {todos.map(todo => <TodoListItem key={todo.id} todo={todo} />)}
            </ul>
        </>
    );
}