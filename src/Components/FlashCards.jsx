import { React, useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";

const flashCards = [
  {
    name: "list",
    questions: [
      { question: "1 + 1", answer: "2", id: Math.random() },
      { question: " 1 + 2", answer: "3", id: Math.random() },
      { question: " 1 + 3", answer: "4", id: Math.random() },
      { question: "1 + 4", answer: "5", id: Math.random() },
    ],
  },
  {
    name: "list2",
    questions: [
      { question: "1 x 1", answer: "1", id: Math.random() },
      { question: " 1 x 2", answer: "2", id: Math.random() },
      { question: " 1 x 3", answer: "3", id: Math.random() },
      { question: "1 x 4", answer: "4", id: Math.random() },
    ],
  },
];

export default function FlashCards() {
  const [flashCardLists, setFlashCardLists] = useState(flashCards);
  const [activeFlashCards, setActiveFlashCards] = useState(flashCardLists[0]);
  const [toggleCardModel, setToggleCardModel] = useState(false);
  const [toggleListModel, setToggleListModel] = useState(false);

  function handleToggleCardModel() {
    setToggleCardModel((s) => !s);
  }

  function handleToggleListModel() {
    setToggleListModel((s) => !s);
  }

  function handleSetActiveFlashCards(e) {
    const selectedList = flashCardLists.find(
      (list) => list.name === e.target.innerText
    );
    setActiveFlashCards(selectedList);
  }

  function addList(e) {
    e.preventDefault();
    const newList = {
      name: e.target.listName.value,
      questions: [],
    };
    setFlashCardLists([...flashCardLists, newList]);
    handleToggleListModel();
  }

  function addCard(e) {
    e.preventDefault();

    const newCard = {
      question: e.target.question.value,
      answer: e.target.answer.value,
      id: Date.now(),
    };

    const upDatedCards = {
      ...activeFlashCards,
      questions: [...activeFlashCards.questions, newCard],
    };

    setFlashCardLists(
      flashCardLists.map((list) =>
        list.name === activeFlashCards.name ? upDatedCards : list
      )
    );

    setActiveFlashCards(upDatedCards);
    handleToggleCardModel();
  }

  return (
    <>
      <Header
        flashCardLists={flashCardLists}
        handleSetActiveFlashCards={handleSetActiveFlashCards}
        onToggleListModel={handleToggleListModel}
      />
      <Main
        activeFlashCards={activeFlashCards}
        addCard={addCard}
        toggleCardModel={toggleCardModel}
        onToggleCardModel={handleToggleCardModel}
        toggleListModel={toggleListModel}
        addList={addList}
      />
    </>
  );
}
