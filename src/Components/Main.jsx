import { useState } from "react";
import CardWrapper from "./CardWrapper";
import NewCardForm from "./NewCardForm";

export default function Main({ activeFlashCards }) {
  const [toggleCardModel, setToggleCardModel] = useState(false);
  function handleToggleCardModel() {
    setToggleCardModel((s) => !s);
  }

  function addCard(e) {
    e.preventDefault();
    const question = e.target.question.value;
    const answer = e.target.answer.value;
    console.log(question, answer);

    // handleToggleCardModel();
  }

  return (
    <div className="main">
      {toggleCardModel ? (
        <NewCardForm onSetNewCard={handleToggleCardModel} addCard={addCard} />
      ) : (
        <CardWrapper
          onToggleCardModel={handleToggleCardModel}
          activeFlashCards={activeFlashCards}
        />
      )}
    </div>
  );
}
