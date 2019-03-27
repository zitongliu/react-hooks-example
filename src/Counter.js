import React, { useState } from 'react';

function Counter() {

    const [count, setCount] = useState(0);
    const handleIncrease = () => setCount(count + 1);
    const handleDecrease = () => setCount(count - 1);
    const handleReset = () => setCount(0);

    return (
        <div
            style={{
                border: '1px solid black',
                maxWidth: 200,
                padding: 20,
                margin: 'auto',
                textAlign: 'center',
            }}
        >
            <h2>counter</h2>
            <blockquote>{count}</blockquote>
            <button onClick={handleIncrease}>Add</button>
            <button onClick={handleDecrease}>Subtract</button>
            <button onClick={handleReset}>Reset</button>
        </div>

    );
}

export default Counter;