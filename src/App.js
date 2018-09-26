import React, { Component } from 'react';
import './App.css';
import Display from './display';
import CollectInput from './collectInput';
class App extends Component {
  state = {
    todos :[]
  }

  addTodo = (todo) => {
    this.setState({
      todos : this.state.todos.concat(todo)
    })
  }

  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.slice(0, id), ...this.state.todos.slice(id+1)]
    })
  }

  updateTodo = (text,id) =>{
    this.setState({
      todos: [...this.state.todos.slice(0,id), text, ...this.state.todos.slice(id+1)]
    })
  }
  render() {
    return (
      <div className="App">

        <CollectInput add={this.addTodo}/>
        <Display data={this.state.todos} delete= {this.deleteTodo} update={this.updateTodo}/>
        
      </div>
    );
  }
}

export default App;
