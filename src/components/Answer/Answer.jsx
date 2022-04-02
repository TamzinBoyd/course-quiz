import React from "react";
import styles from "./Answer.module.scss";
import Button from "../Button/Button";

const Answer = (props) => {
  const {
    answer,
    setAnswerModal,
    // answerNum,
    // setAnswerNum,
    // setAnswer,
    // questionNum,
    // data,
    // setIsQuestion,
    // isQuestion,
    // buttonFunc,
    // buttonText,
    score,
    setScore,
  } = props;

  const handleClose = () => {
    setAnswerModal(false);
  };
  return (
    <section className={styles.modal}>
      <div className={styles.modal__container}>
        <p>{answer}</p>
        <Button buttonText="Close" buttonFunc={handleClose} />
      </div>
    </section>
  );
};

export default Answer;
