import React from "react";
import Button from "../Button/Button";
import Question from "../Question/Question";
import Answer from "../Answer/Answer";

const Card = (props) => {
  const {
    setQuestion,
    question,
    data,
    questionNum,
    setQuestionNum,
    isQuestion,
    setIsQuestion,
    answer,
    answerNum,
    setAnswer,
    setAnswerNum,
    score,
    setScore,
  } = props;

  const handleNextQuestion = () => {
    if (questionNum === 5) {
      handleShowAnswer();
    } else {
      setQuestion(data[questionNum].question);
      setQuestionNum(questionNum + 1);
      setIsQuestion(false);
    }
  };

  const handleShowAnswer = () => {
    console.log(answerNum);
    // need to fix it here to fix the end of the quiz
    setAnswer(data[answerNum].answer);
    setAnswerNum(answerNum + 1);
    setIsQuestion(true);
  };

  const handleRestart = () => {
    // setQuestion(data[0].question);
    // setQuestionNum(0);
    // answer(data[0].answer);
    // setAnswerNum(0);
    console.log("restart activated");
    return <p>tesr para</p>;
  };

  if (isQuestion === true) {
    return (
      <>
        <Question
          question={question}
          data={data}
          questionNum={questionNum}
          setIsQuestion={setIsQuestion}
          setQuestion={setQuestion}
          setQuestionNum={setQuestionNum}
        />
        <input placeholder="Enter your answer here" />
        <Button buttonText="Show answer" buttonFunc={handleNextQuestion} />
      </>
    );
  } else if (isQuestion === false) {
    return (
      <>
        <Answer
          answer={answer}
          data={data}
          answerNum={answerNum}
          isQuestion={isQuestion}
          setIsQuestion={setIsQuestion}
          setAnswer={setAnswer}
          setAnswerNum={setAnswerNum}
          questionNum={questionNum}
          score={score}
          setScore={setScore}
        />
        <Button buttonText="Next Question" buttonFunc={handleShowAnswer} />
      </>
    );
  } else if (answerNum === data.length + 1) {
    return (
      <div>
        <p>You've completed the quiz!</p>
        <Button buttonText="restart quiz" buttonFunc={handleRestart} />
      </div>
    );
  }
};

export default Card;
