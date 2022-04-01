import React, { useState, useContext } from "react";
import "./App.module.scss";
import Home from "./components/Home";
import data from "./data";
import LogIn from "./components/LogIn";
import UserProvider from "./context/UserProvider";

const App = () => {
  const [question, setQuestion] = useState(data[0].question);
  const [questionNum, setQuestionNum] = useState(0);
  const [answer, setAnswer] = useState("");
  const [answerNum, setAnswerNum] = useState(0);
  const [isQuestion, setIsQuestion] = useState(true);
  const [score, setScore] = useState(0);
  const [logInModal, setLogInModal] = useState(true);

  return (
    <UserProvider>
      {logInModal ? (
        <LogIn setLogInModal={setLogInModal} />
      ) : (
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
      )}
    </UserProvider>
  );
};

export default App;
