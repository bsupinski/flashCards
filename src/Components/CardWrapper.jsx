import Cards from "./Cards";
import AddCard from "./AddCard";

export default function CardWrapper({ onToggleCardModel, activeFlashCards }) {
  return (
    <div className="cards__wrapper">
      {activeFlashCards.questions.map((question) => (
        <Cards question={question} key={question.id} />
      ))}
      <AddCard onToggleCardModel={onToggleCardModel} />
    </div>
  );
}
