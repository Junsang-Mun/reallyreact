import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("run");
  const runOnlyOnce = () => console.log("I run only once!");
  useEffect(runOnlyOnce, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 3) {
      console.log("search for", keyword);
    }
  }, [keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Button</button>
    </div>
  );
}

export default App;
