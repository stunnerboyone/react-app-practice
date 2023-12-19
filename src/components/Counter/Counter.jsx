import React, { useState } from "react";

export const Counter = () => {
	const [count, setCount] = useState(0);

	const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleDecrement = () => {
    setCount(count - 1);
  }

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
		</div>
	);
};