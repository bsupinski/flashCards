import { useState } from "react";
import CardWrapper from "./CardWrapper";
import NewCardForm from "./NewCardForm";

export default function Main() {
  const [addNewCard, setNewCard] = useState(false);
  function handleSetNewCard() {
    setNewCard((s) => !s);
  }

  return (
    <div className="main">
      {addNewCard ? (
        <NewCardForm onSetNewCard={handleSetNewCard} />
      ) : (
        <CardWrapper onSetNewCard={handleSetNewCard} />
      )}
    </div>
  );
}
