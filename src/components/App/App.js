import React, { useState } from 'react'

import TaskList from '../TaskList'
import AppHeader from '../AppHeader'
import './App.css'

const App = () => {
  let maxId = 0

  const createItem = function (label, min, sec) {
    return {
      label,
      done: false,
      id: maxId++,
      time: new Date(),
      min,
      sec,
    }
  }

  const [show, setShow] = useState('all')
  const [todoData, setTodoData] = useState([
    createItem('Drink coffee'),
    createItem('Make App'),
    createItem('Have a lunch'),
  ])

  const deleteItem = (id) => {
    setTodoData((todoData) => {
      const idx = todoData.findIndex((el) => el.id === id)
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
      return newArray
    })
  }

  const clearItems = () => {
    setTodoData((todoData) => {
      const newArray = todoData.filter((el) => !el.done)
      return newArray
    })
  }

  const addItem = (text, min, sec) => {
    const newItem = createItem(text, min, sec)
    setTodoData((todoData) => {
      const newArray = [...todoData, newItem]
      return newArray
    })
  }

  const onToggleDone = (id) => {
    setTodoData((todoData) => {
      const idx = todoData.findIndex((el) => el.id === id)
      const oldItem = todoData[idx]
      const newItem = { ...oldItem, done: !oldItem.done }
      const newArray = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)]
      return newArray
    })
  }

  const filterItems = (param) => {
    setShow(() => param)
  }

  const doneCount = todoData.filter((el) => el.done).length

  const todoCount = todoData.length - doneCount

  return (
    <section className="todoapp">
      <AppHeader onItemAdded={addItem} />
      <TaskList
        todos={todoData}
        show={show}
        onDeleted={deleteItem}
        onToggleDone={onToggleDone}
        todo={todoCount}
        done={doneCount}
        onFilter={filterItems}
        onClear={clearItems}
      />
    </section>
  )
}

export default App
