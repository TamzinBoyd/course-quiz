import React from "react";
import Button from "../Button/Button";
import styles from "./EndQuiz.module.scss";

const EndQuiz = (props) => {
  const { handleRestart } = props;

  return (
    <section className={styles.modal}>
      <div className={styles.modal__container}>
        <h1>You've completed the quiz!</h1>
        <Button buttonText="Restart Quiz" buttonFunc={handleRestart} />{" "}
      </div>
    </section>
  );
};

export default EndQuiz;
