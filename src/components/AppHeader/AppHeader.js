import NewTaskForm from '../NewTaskForm';

const AppHeader = ({ onItemAdded }) => {
  return (
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm onItemAdded={onItemAdded} />
    </header>
  );
};

export default AppHeader;
