import React from "react";

const Question = (props) => {
  const {
    question,
    setQuestion,
    data,
    questionNum,
    setQuestionNum,
    buttonText,
    buttonFunc,
    setIsQuestion,
  } = props;

  console.log(question);
  return (
    <div>
      <p>{question}</p>
    </div>
  );
};

export default Question;
