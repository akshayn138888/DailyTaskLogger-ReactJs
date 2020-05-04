import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./ToDoList";
class App extends Component {
  render() {
    return (
      <div>
        Main Page
        <TodoList />
      </div>
    );
  }
}

export default App;
