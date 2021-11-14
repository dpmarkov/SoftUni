import { useEffect } from 'react';

export default function TodoListItem({
    todo,
    onDelete
}) {
    useEffect(() => {
        console.log(`${todo.id} is mounted.`);

        return () => {
        console.log(`${todo.id} is unmounted.`);
        };
    }, []);

    return (
        <li>{todo.text} <button onClick={() => onDelete(todo.id)}>x</button></li>
    );
}