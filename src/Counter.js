import React, { useState } from 'react';

export default function Counter() {

  let [count, setCount] = useState(0)

  const increment= () => setCount(count + 1)

  return (
    <div>
      <h1>Ceci est mon compteur</h1>
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
      <button>-</button>
    </div>
  );
}
