export default function Header({ flashCardLists, handleSetActiveFlashCards }) {
  return (
    <header>
      <div className="logo__container">
        <h1>gitFlashed</h1>
      </div>
      <div className="nav__bar">
        <div className="subnav">
          <button>Select Set</button>
          <div className="dropdown">
            {Object.keys(flashCardLists).map((listName) => (
              <button
                className="dropdown--item"
                key={Math.random()}
                onClick={(e) => handleSetActiveFlashCards(e.target.textContent)}
              >
                {listName}
              </button>
            ))}
          </div>
        </div>
        <button>Create New</button>
      </div>
    </header>
  );
}
