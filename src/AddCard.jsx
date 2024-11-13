export default function AddCard({ onSetNewCard }) {
  return (
    <button className="add__btn" onClick={onSetNewCard}>
      +
    </button>
  );
}
