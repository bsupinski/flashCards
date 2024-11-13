export default function Cards({ question }) {
  return (
    <div className="flashCard">
      <div className="flashCard__front">{question.question}</div>
      <div className="flashCard__back">{question.answer}</div>
    </div>
  );
}
