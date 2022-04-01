import React, { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import Button from "../Button/Button";

const LogIn = (props) => {
  const { setLogInModal } = props;
  const data = useContext(UserContext);

  const welcomeMsg = `Welcome to the quiz ${data.name}`;

  const handleStartQuiz = () => {
    setLogInModal(false);
  };
  return (
    <>
      <div>{welcomeMsg}</div>
      <Button buttonFunc={handleStartQuiz} buttonText="Start Quiz" />
    </>
  );
};

export default LogIn;
