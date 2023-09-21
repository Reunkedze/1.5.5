import Footer from '../Footer'
import Task from '../Task'
import './TaskList.css'

const TaskList = ({ todos, show, onDeleted, onToggleDone, todo, done, onFilter, onClear }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item
    if (show === 'all' || (show === 'active' && !itemProps.done) || (show === 'completed' && itemProps.done)) {
      return (
        <li key={id}>
          <div className="view">
            <Task {...itemProps} onDeleted={() => onDeleted(id)} onToggleDone={() => onToggleDone(id)} />
          </div>
        </li>
      )
    }
    return null
  })
  return (
    <section className="main">
      <ul className="todo-list">{elements}</ul>
      <Footer todo={todo} done={done} onFilter={onFilter} onClear={onClear} show={show} />
    </section>
  )
}

TaskList.defaultProps = {
  todos: [{ id: 1, label: 'Pass on props', done: false, time: new Date() }],
}

TaskList.propTypes = {
  todos: (props, propName, componentName) => {
    const value = props[propName]

    if (typeof value === 'object') {
      return null
    }

    return new TypeError(`${componentName}: ${propName} must be object`)
  },
}

export default TaskList
