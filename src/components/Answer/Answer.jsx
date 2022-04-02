import React from "react";
import styles from "./Answer.module.scss";
import Button from "../Button/Button";

const Answer = (props) => {
  const { answer, setAnswerModal, score, setScore, handleNextQuestion } = props;

  const handleClose = () => {
    setAnswerModal(false);
    handleNextQuestion();
  };

  const handleScore = () => {
    setScore(score + 1);
    setAnswerModal(false);
    handleNextQuestion();
  };

  return (
    <section className={styles.modal}>
      <div className={styles.modal__container}>
        <p className={styles.modal__answer}>{answer}</p>
        <div className={styles.modal__btn}>
          <Button buttonText="Correct Answer" buttonFunc={handleScore} />
          <Button buttonText="Wrong Answer" buttonFunc={handleClose} />
        </div>
      </div>
    </section>
  );
};

export default Answer;
