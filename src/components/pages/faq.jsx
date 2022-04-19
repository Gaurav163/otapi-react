import React from "react";
import "./faq.scss";

const Faq = () => {
  const questions = [
    {
      question: "q1",
      answer: "a1",
    },
    {
      question: "q2",
      answer: "a2",
    },
    {
      question: "q3",
      answer: "a3",
    },
    {
      question: "q4",
      answer: "a4",
    },
  ];
  return (
    <div className="faqs">
      <div className="head">FAQs</div>
      {questions.map((que) => (
        <div className="question">
          <div className="que">Question: {que.question}</div>
          <div className="ans">Solution: {que.answer}</div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
