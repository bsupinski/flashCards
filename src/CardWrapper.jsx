import { useState } from "react";
import Cards from "./Cards";
import AddCard from "./AddCard";

const flashCards = {
  default: [
    { question: " What am I working with?", answer: "react", id: 1 },
    { question: "What styles your elements?", answer: "Css", id: 2 },
    {
      question: "What does react use to create elements?",
      answer: "JSX",
      id: 3,
    },
  ],
  default2: [
    { question: " What am I working with?", answer: "react", id: 1 },
    { question: "What styles your elements?", answer: "Css", id: 2 },
    {
      question: "What does react use to create elements?",
      answer: "JSX",
      id: 3,
    },
  ],
};

export default function CardWrapper({ onSetNewCard }) {
  const [activeQuestions, setActiveQuestions] = useState(flashCards.default);
  return (
    <div className="cards__wrapper">
      {activeQuestions.map((question) => (
        <Cards question={question} key={question.id} />
      ))}
      {activeQuestions.map((question) => (
        <Cards question={question} key={question.id} />
      ))}
      <AddCard onSetNewCard={onSetNewCard} />
    </div>
  );
}
