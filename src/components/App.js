import React from "react";
import "../styles/App.css";
import { useState, useEffect } from "react";
const App = () => {
  //code here
  const [name, setName] = useState("");
  const [user, setUser] = useState([]);
  const url = "https://content.newtonschool.co/v1/pr/main/users";

  function changeInput(e) {
    const id = e.target.value;
    setName(user[id - 1].name);
  }
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  return (
    <div className="App">
      <h1 id="text">Type a number between 1 and 10</h1>
      <input id="input" onChange={changeInput} />
      <p id="name">{name}</p>
    </div>
  );
};

export default App;
