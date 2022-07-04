import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState();
  const [loading, setLoading] = useState(false);
  async function getData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setTodos(await response.json());
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {loading && <img src={logo} className="App-logo" alt="logo" />}
        {todos && todos.map((todo) => <p key={todo.id}>{todo.title}</p>)}
      </header>
    </div>
  );
};

export default App;
