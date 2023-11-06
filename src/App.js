import React, { useState } from 'react';
import './App.css';
import { CSSTransition } from 'react-transition-group';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <div className="counter">
        <CSSTransition in={true} appear={true} timeout={300} classNames="fade">
          <p>Count: {count}</p>
        </CSSTransition>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
        <button onClick={resetCount}>Reset</button>
      </div>
    </div>
  );
}

export default App;
