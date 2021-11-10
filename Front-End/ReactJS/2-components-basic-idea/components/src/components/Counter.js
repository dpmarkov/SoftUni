import { useState } from 'react';

export default function Counter() {
    let [count, setCount] = useState(0);

    function addOneBtnClick() {
        setCount(count + 1);
    }

    const minusOneBtnClick = () => {
        setCount(count - 1);
    };

    return (
        <>
            <h2>Counter: {count}</h2>

            <button onClick={addOneBtnClick}>Add +</button>
            <button onClick={minusOneBtnClick}>Minus -</button>
        </>
    );
}