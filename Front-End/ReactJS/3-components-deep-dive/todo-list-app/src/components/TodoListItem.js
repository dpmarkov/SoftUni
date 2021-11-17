import { useEffect } from 'react';
import styles from './TodoListItem.module.css';

export default function TodoListItem({
    todo,
    onDelete,
    onClick
}) {
    useEffect(() => {
        // console.log(`${todo.id} is mounted.`);

        // return () => {
        //     console.log(`${todo.id} is unmounted.`);
        // };
    }, []);

    return (
        <li onClick={() => onClick(todo.id)}>
            <p className={todo.isDone ? styles.selected : ''}>
                {todo.text}
                <button onClick={(e) => onDelete(e, todo.id)}>x</button>
            </p>
        </li>
    );
}