export default function Header({
  flashCardLists,
  handleSetActiveFlashCards,
  onToggleListModel,
}) {
  return (
    <header>
      <div className="logo__container">
        <h1>gitFlashed</h1>
      </div>
      <div className="nav__bar">
        <div className="subnav">
          <button>Select Set</button>
          <div className="dropdown">
            {flashCardLists.map((card) => (
              <button
                className="dropdown--item"
                key={Math.random()}
                onClick={(e) => handleSetActiveFlashCards(e)}
              >
                {card.name}
              </button>
            ))}
          </div>
        </div>
        <button onClick={onToggleListModel}>Create New</button>
      </div>
    </header>
  );
}
