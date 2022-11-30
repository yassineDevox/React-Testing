import React, { useState } from 'react'

const Counter = () => {
    const [counter, setcounter] = useState(0)
    const onIncrement = () => setcounter(c => c + 1)
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={onIncrement}> Increment 😇</button>
        </div>
    )
}

export default Counter