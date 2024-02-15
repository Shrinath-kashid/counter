import React, { useState } from 'react'

function Counter() {
    const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="app">
      <h1>React Counter</h1>
      <div className="counter-container">
        <div id="counter" className={`counter ${counter < 0 ? 'negative' : ''}`}>
          {counter}
        </div>
        <div className="button-container">
          <button id="incrementBtn" className="increment-btn" onClick={increment}>
            +
          </button>
          <button id="decrementBtn" className="decrement-btn" onClick={decrement}>
            -
          </button>
        </div>
      </div>
    </div>
  )
}

export default Counter