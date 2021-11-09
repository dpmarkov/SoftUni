import {useState} from 'react';
import TodoListItem from './TodoListItem';
import TodoListItemPlain from './TodoListItemPlain';

export default function TodoList() {
    let [todos, setTodo] = useState(['Do your homework', 'Wash the windows']);;

    return (
        <>
            <h2>Tasks</h2>

            <ul>
                <TodoListItem color="black">Go shopping</TodoListItem>
                <TodoListItem color="red">Wash the dishes</TodoListItem>
                <TodoListItem color="green">Learn React Components</TodoListItem>
            </ul>

            <h2>Tasks with state</h2>

            <ol>
                {todos.map(todo => <TodoListItemPlain>{todo}</TodoListItemPlain>)}
            </ol>
        </>
    );
}