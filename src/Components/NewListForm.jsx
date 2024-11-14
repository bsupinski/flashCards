export default function NewListFrom({ addList }) {
  return (
    <form className="form" onSubmit={(e) => addList(e)}>
      <div className="module">
        <h2>Add New Card</h2>
        <div className="form__wrapper">
          <label>Question</label>
          <input type="text" name="listName"></input>
        </div>

        <button className="submit-btn">Add</button>
      </div>
    </form>
  );
}
