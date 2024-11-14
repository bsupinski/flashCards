import React from "react";
import CardWrapper from "./CardWrapper";
import NewCardForm from "./NewCardForm";
import NewListForm from "./NewListForm";

export default function Main({
  activeFlashCards,
  addCard,
  toggleCardModel,
  onToggleCardModel,
  onToggleListModel,
  toggleListModel,
  addList,
}) {
  return (
    <div className="main">
      {toggleCardModel ? (
        <NewCardForm addCard={addCard} />
      ) : toggleListModel ? (
        <NewListForm addList={addList} />
      ) : (
        <CardWrapper
          onToggleCardModel={onToggleCardModel}
          activeFlashCards={activeFlashCards}
        />
      )}
    </div>
  );
}
