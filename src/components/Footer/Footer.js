import TasksFilter from '../TasksFilter'

const Footer = ({ todo, onFilter, onClear, show }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{todo} items left</span>
      <TasksFilter onFilter={onFilter} show={show} />
      <button className="clear-completed" onClick={onClear}>
        Clear completed
      </button>
    </footer>
  )
}

export default Footer
