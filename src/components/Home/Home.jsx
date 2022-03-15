import React from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";

export const Home = (props) => {
  const {
    setQuestion,
    question,
    data,
    questionNum,
    setQuestionNum,
    answerNum,
    setAnswerNum,
    answer,
    setAnswer,
    isQuestion,
    setIsQuestion,
    buttonFunc,
    buttonText,
    score,
    setScore,
  } = props;

  const handleStart = () => {
    setQuestion(data[0].question);
    setAnswer(data[0].answer);
    setQuestionNum(1);
    setAnswerNum(1);
  };

  if (question === "Welcome to the quiz") {
    return (
      <>
        <h3>Welcome to the quiz!</h3>
        <Button buttonFunc={handleStart} buttonText="Start Quiz" />
      </>
    );
  } else {
    return (
      <div>
        <Card
          setQuestion={setQuestion}
          question={question}
          data={data}
          questionNum={questionNum}
          setAnswerNum={setAnswerNum}
          answerNum={answerNum}
          setQuestionNum={setQuestionNum}
          answer={answer}
          setAnswer={setAnswer}
          isQuestion={isQuestion}
          setIsQuestion={setIsQuestion}
          score={score}
          setScore={setScore}
        />
      </div>
    );
  }
};
