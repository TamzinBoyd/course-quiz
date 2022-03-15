import React, { useState } from "react";
import "./App.module.scss";
import Home from "./components/Home";
import data from "./data";

const App = () => {
  const [question, setQuestion] = useState("Welcome to the quiz");
  const [questionNum, setQuestionNum] = useState(0);
  const [answer, setAnswer] = useState("");
  const [answerNum, setAnswerNum] = useState(0);
  const [isQuestion, setIsQuestion] = useState(true);
  const [score, setScore] = useState(0);

  return (
    <div>
      <Home
        data={data}
        question={question}
        setQuestion={setQuestion}
        questionNum={questionNum}
        setQuestionNum={setQuestionNum}
        answerNum={answerNum}
        setAnswerNum={setAnswerNum}
        setAnswer={setAnswer}
        answer={answer}
        isQuestion={isQuestion}
        setIsQuestion={setIsQuestion}
        score={score}
        setScore={setScore}
      />
    </div>
  );
};

export default App;
