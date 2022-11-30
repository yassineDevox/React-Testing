import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const [amount, setAmount] = useState(0)
    const onIncrement = () => setCounter(c => c + 1)
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={onIncrement}> Increment 😇</button>
            <input
                type="number"
                placeholder="add amount"
                onChange={(e) => setAmount(parseInt(e.target.value))} />
            <button onClick={_ => setCounter(amount)}>Set</button>
        </div>
    )
}

export default Counter