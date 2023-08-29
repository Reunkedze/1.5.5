import React, { Component } from 'react';
import TaskList from '../TaskList';
import AppHeader from '../AppHeader';
import './App.css';

export default class App extends Component {
  maxId = 0;

  state = {
    show: 'all',
    todoData: [this.createItem('Drink coffee'), this.createItem('Make App'), this.createItem('Have a lunch')],
  };

  createItem(label) {
    return {
      label,
      done: false,
      id: this.maxId++,
      time: new Date(),
    };
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArray,
      };
    });
  };

  addItem = (text) => {
    // generate id
    const newItem = this.createItem(text);
    // add element in array
    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem];

      return {
        todoData: newArray,
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];
      const newItem = { ...oldItem, done: !oldItem.done };
      const newArray = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];
      return {
        todoData: newArray,
      };
    });
  };

  filterItems = (param) => {
    this.setState(() => {
      return { show: param };
    });
  };

  render() {
    const { todoData, show } = this.state;

    const doneCount = todoData.filter((el) => el.done).length;

    const todoCount = todoData.length - doneCount;

    return (
      <section className="todoapp">
        <AppHeader onItemAdded={this.addItem} />
        <TaskList
          todos={todoData}
          show={show}
          onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone}
          todo={todoCount}
          done={doneCount}
          onFilter={this.filterItems}
        />
      </section>
    );
  }
}
