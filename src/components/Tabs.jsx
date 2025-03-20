export function Tabs(props) {
  const { todos } = props;
  const tabs = ["All", "Open", "Completed"];
  return (
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        const numOfTasks = tab === "All" ? todos.length :
        tab === "Open" ? todos.filter(val => !val.completed).length :
        todos.filter(val => val.completed).length
        return (
          <button key={tabIndex} className="tab-button">
            <h4>
              {tab} <span>({numOfTasks})</span>
            </h4>
          </button>
        );
      })}
    </nav>
  );
}
