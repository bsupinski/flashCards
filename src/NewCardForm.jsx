export default function NewCardForm({ onSetNewCard }) {
  return (
    <form className="form" onSubmit={onSetNewCard}>
      <div className="module">
        <h2>Add New Card</h2>
        <div className="form__wrapper">
          <label>Name your new set</label>
          <input type="text"></input>
        </div>
        <button className="submit-btn">Add</button>
      </div>
    </form>
  );
}
