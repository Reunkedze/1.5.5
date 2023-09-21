import React, { Component } from 'react'
import './NewTaskForm.css'

export default class NewTaskForm extends Component {
  state = {
    label: '',
    min: '',
    sec: '',
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    })
  }

  onMinChange = (e) => {
    this.setState({
      min: e.target.value,
    })
  }

  onSecChange = (e) => {
    this.setState({
      sec: e.target.value,
    })
  }

  onSubmit = (e) => {
    console.log(e.keycode)
    e.preventDefault()
    this.props.onItemAdded(this.state.label, this.state.min, this.state.sec)
    this.setState({
      label: '',
      min: '',
      sec: '',
    })
  }

  render() {
    return (
      <form className="task-form" onSubmit={this.onSubmit}>
        <input
          className="new-todo task"
          name="label"
          placeholder="Task"
          onChange={this.onLabelChange}
          value={this.state.label}
          autoFocus
          required
        />
        <input
          className="new-todo min"
          name="min"
          placeholder="Min"
          onChange={this.onMinChange}
          value={this.state.min}
          required
        />
        <input
          className="new-todo sec"
          name="sec"
          placeholder="Sec"
          onChange={this.onSecChange}
          value={this.state.sec}
          required
        />
      </form>
    )
  }
}
