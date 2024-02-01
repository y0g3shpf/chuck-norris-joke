import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [jokes, setJokes] = useState("");
  const [count, setCount] = useState(0);

  const getJokes = async function () {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    setJokes(data.value);
    setCount((c) => c + 1);
  };
  useEffect(() => {
    getJokes();
  }, []);
  return (
    <div className="App">
      <h1 className="title">Chuck Norris Jokes 😂</h1>
      <h2 className="joke">{jokes}</h2>
      <p>
        You have read <strong>{count}</strong> Chuck Norris jokes so far
      </p>
      <button onClick={getJokes}>Get Another Joke</button>
    </div>
  );
}
