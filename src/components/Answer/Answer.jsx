import React from "react";
import styles from "./Answer.module.scss";
import Button from "../Button/Button";

const Answer = (props) => {
  const {
    answer,
    answerNum,
    setAnswerNum,
    setAnswer,
    questionNum,
    data,
    setIsQuestion,
    isQuestion,
    buttonFunc,
    buttonText,
    score,
    setScore,
  } = props;

  const handleScore = () => {
    setScore(score + 1);
    console.log(score);
  };
  return (
    <div>
      <p>{answer}</p>
      <Button buttonText="Correct Answer!" buttonFunc={handleScore} />
    </div>
  );
};

export default Answer;
