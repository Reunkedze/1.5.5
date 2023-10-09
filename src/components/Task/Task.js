import React, { useState, useEffect } from 'react'
import { formatDistanceToNow } from 'date-fns'
import './Task.css'

const Task = ({ label, onDeleted, onToggleDone, done, time }) => {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    return () => {
      setTimer(null)
      clearInterval(timer)
    }
  }, [])

  const start = () => {
    if (!timer) {
      setTimer(
        setInterval(() => {
          if (seconds < 59) {
            setSeconds((s) => s + 1)
          } else {
            setMinutes((m) => m + 1)
            setSeconds(0)
          }
        }, 1000)
      )
    }
  }

  const stop = async () => {
    await console.log(timer)
    await setTimer(null)
    await console.log(timer)
    await clearInterval(timer)
    await console.log(timer)
  }

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
          <button className="icon icon-play" onClick={start}></button>
          <button className="icon icon-pause" onClick={stop}></button>
          {minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}
        </span>
        <span className="created">created {formatDistanceToNow(time, { addSuffix: true })}</span>
      </label>

      <button type="button" className="icon icon-edit"></button>
      <button type="button" className="icon icon-destroy" onClick={onDeleted}></button>
    </span>
  )
}

export default Task
