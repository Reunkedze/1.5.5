import TasksFilter from "../TasksFilter";

const Footer = ({ todo, done, todos, onFilter }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{todo} items left</span>
      <TasksFilter onFilter={onFilter} />
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}

export default Footer;
