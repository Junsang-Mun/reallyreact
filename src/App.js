import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((prev) => prev + 1);
  console.log("I run every time");
  const runOnlyOnce = () => console.log("I run only once!");
  useEffect(runOnlyOnce, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Button</button>
    </div>
  );
}

export default App;
