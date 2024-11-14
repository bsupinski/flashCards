export default function NewCardForm({ onSetNewCard, addCard }) {
  return (
    <form className="form" onSubmit={(e) => addCard(e)}>
      <div className="module">
        <h2>Add New Card</h2>
        <div className="form__wrapper">
          <label>Question</label>
          <input type="text" name="question"></input>
        </div>
        <div className="form__wrapper">
          <label>Answer</label>
          <input name="answer" type="text"></input>
        </div>
        <button className="submit-btn">Add</button>
      </div>
    </form>
  );
}
