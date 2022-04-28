import React, { useState, useRef } from "react";
import styles from "./Card.module.scss";
import Button from "../Button/Button";
import Question from "../Question/Question";
import Answer from "../Answer/Answer";
import EndQuiz from "../EndQuiz/EndQuiz";

const Card = (props) => {
  const { data } = props;

  const [question, setQuestion] = useState(data[0].question);
  const [questionNum, setQuestionNum] = useState(1);
  const [answer, setAnswer] = useState(data[0].answer);
  const [answerNum, setAnswerNum] = useState(1);
  const [answerModal, setAnswerModal] = useState(false);
  const [isEndQuiz, setIsEndQuiz] = useState(false);
  const [score, setScore] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleNextQuestion = () => {
    // check for endQuiz
    if (questionNum === data.length) {
      setIsEndQuiz(true);
      return;
    }
    // increment question & answer
    setQuestionNum(questionNum + 1);
    setQuestion(data[questionNum].question);
    setAnswerNum(answerNum + 1);
    setAnswer(data[answerNum].answer);
  };

  const handleShowAnswer = () => {
    setAnswerModal(true);
    setInputValue("");
  };

  const handleRestart = () => {
    // reset questions
    setQuestion(data[0].question);
    setQuestionNum(0);
    setAnswer(data[0].answer);
    setAnswerNum(0);
    setIsEndQuiz(false);
    setScore(0);
  };

  const showScore = `Your current score is ${score}`;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.question}>
          <Question question={question} />
          <input
            placeholder="Enter your answer here"
            className={styles.question__input}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button buttonText="Show answer" buttonFunc={handleShowAnswer} />
          <Button buttonText="Next question" buttonFunc={handleNextQuestion} />
          <p className={styles.question__score}>{showScore}</p>
        </div>
      </div>
      {answerModal ? (
        <Answer
          answer={answer}
          setAnswerModal={setAnswerModal}
          score={score}
          setScore={setScore}
          handleNextQuestion={handleNextQuestion}
        />
      ) : null}

      {isEndQuiz ? (
        <EndQuiz handleRestart={handleRestart} data={data} score={score} />
      ) : null}
    </>
  );
};

export default Card;
