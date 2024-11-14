import { useState } from "react";
import Header from "./Header";
import Main from "./Main";

const flashCards = {
  list: [
    { question: " What am I working with?", answer: "react", id: 1 },
    { question: "What styles your elements?", answer: "Css", id: 2 },
    {
      question: "What does react use to create elements?",
      answer: "JSX",
      id: 3,
    },
  ],
  list2: [
    { question: "This is test", answer: "test", id: 1 },
    { question: "This is test2", answer: "Test2", id: 2 },
    {
      question: "What does react use to create elements?",
      answer: "JSX",
      id: 3,
    },
  ],
};

export default function FlashCards() {
  const [flashCardLists, setFlashCardLists] = useState(flashCards);
  const [activeFlashCards, setActiveFlashCards] = useState(flashCardLists.list);

  function handleSetActiveFlashCards(name) {
    setActiveFlashCards(flashCardLists[name]);
    console.log(flashCardLists[name]);
  }

  return (
    <>
      <Header
        flashCardLists={flashCardLists}
        handleSetActiveFlashCards={handleSetActiveFlashCards}
      />
      <Main activeFlashCards={activeFlashCards} />
    </>
  );
}
