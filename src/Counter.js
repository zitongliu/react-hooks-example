import React, { useState } from 'react';

function Counter() {

    const [count, setCount] = useState(0);

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
            <button onClick={() => setCount(count + 1)}>Add</button>
            <button onClick={() => setCount(count - 1)}>Subtract</button>
        </div>

    );
}

export default Counter;