import React, { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import Button from "../Button/Button";
import styles from "./LogIn.module.scss";

const LogIn = (props) => {
  const { setLogInModal } = props;
  const data = useContext(UserContext);

  const welcomeMsg = `Welcome to the quiz ${data.name}`;

  const handleStartQuiz = () => {
    setLogInModal(false);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.message}>
          <h1>{welcomeMsg}</h1>
          <Button buttonFunc={handleStartQuiz} buttonText="Start Quiz" />
        </div>
      </div>
    </>
  );
};

export default LogIn;
