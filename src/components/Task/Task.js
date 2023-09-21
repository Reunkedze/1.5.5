import React, { Component } from 'react'
import { formatDistanceToNow } from 'date-fns'
import './Task.css'

export default class Task extends Component {
  state = {
    seconds: 0,
    minutes: 0,
    timer: null,
  }

  start = () => {
    if (!this.state.timer) {
      this.setState({
        timer: setInterval(() => {
          if (this.state.seconds < 59) {
            this.setState({ seconds: this.state.seconds + 1 })
          } else {
            this.setState({
              minutes: this.state.minutes + 1,
              seconds: 0,
            })
          }
        }, 1000),
      })
    }
    console.log(this.state.timer)
  }

  stop = () => {
    clearInterval(this.state.timer)
    this.setState({ timer: null })
  }

  render() {
    const { label, onDeleted, onToggleDone, done, time } = this.props
    let classNames = 'task-item'
    if (done) {
      classNames += ' done'
    }

    return (
      <span className={classNames}>
        <input className="toggle" type="checkbox" onChange={onToggleDone} checked={done} />
        <label>
          <span className="description">{label}</span>
          <span className="timer">
            <button className="icon icon-play" onClick={this.start}></button>
            <button className="icon icon-pause" onClick={this.stop}></button>
            {this.state.minutes < 10 ? '0' + this.state.minutes : this.state.minutes}:
            {this.state.seconds < 10 ? '0' + this.state.seconds : this.state.seconds}
          </span>
          <span className="created">created {formatDistanceToNow(time, { addSuffix: true })}</span>
        </label>

        <button type="button" className="icon icon-edit"></button>
        <button type="button" className="icon icon-destroy" onClick={onDeleted}></button>
      </span>
    )
  }
}
