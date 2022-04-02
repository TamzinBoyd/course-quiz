import React from "react";
import Button from "../Button/Button";
import styles from "./EndQuiz.module.scss";

const EndQuiz = (props) => {
  const { handleRestart, score, data } = props;

  const message = `You've completed the quiz! You scored ${score} out of ${data.length}`;
  return (
    <section className={styles.modal}>
      <div className={styles.modal__container}>
        <h1 className={styles.modal__message}>{message}</h1>
        <Button buttonText="Restart Quiz" buttonFunc={handleRestart} />{" "}
      </div>
    </section>
  );
};

export default EndQuiz;
