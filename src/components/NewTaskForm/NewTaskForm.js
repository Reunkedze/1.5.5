import React, { useState } from 'react'
import './NewTaskForm.css'

const NewTaskForm = ({ onItemAdded }) => {
  const [label, setLabel] = useState('')
  const [time, setTime] = useState({ min: '', sec: '' })

  const onLabelChange = (e) => {
    setLabel(e.target.value)
  }

  // onMinChange = (e) => {
  //   this.setState({
  //     min: e.target.value,
  //   })
  // }

  // onSecChange = (e) => {
  //   this.setState({
  //     sec: e.target.value,
  //   })
  // }

  const onSubmit = (e) => {
    console.log(e.keycode)
    e.preventDefault()
    onItemAdded(label, time.min, time.sec)
    setLabel('')
    setTime({ min: '', sec: '' })
    // this.setState({
    //   label: '',
    //   min: '',
    //   sec: '',
    // })
  }

  return (
    <form className="task-form" onSubmit={onSubmit}>
      <input
        className="new-todo task"
        name="label"
        placeholder="Task"
        onChange={onLabelChange}
        value={label}
        autoFocus
        required
      />
      {/* <input
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
        /> */}
    </form>
  )
}

export default NewTaskForm
