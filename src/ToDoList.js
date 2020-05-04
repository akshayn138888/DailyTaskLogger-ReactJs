import React, { Component } from "react";
import NewToDoForm from "./NewToDoForm";
import Todo from "./Todo";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
  }
  create(newToDo) {
    this.setState({
      todos: [...this.state.todos, newToDo]
    });
  }
  remove(id) {
    this.setState({
      todos: this.state.todos.filter(t => t.id !== id)
    });
  }
  update(id, updatedTask) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }

  render() {
    const todos = this.state.todos.map(todo => {
      return (
        <Todo
          key={todo.id}
          task={todo.task}
          removeTodo={this.remove}
          id={todo.id}
          updateTodo={this.update}
        />
      );
    });
    return (
      <div>
        <h1>TodoList</h1>
        {todos}
        <NewToDoForm createTodo={this.create} />
      </div>
    );
  }
}
export default TodoList;
