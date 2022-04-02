import React from "react";
import styles from "./Button.module.scss";

const Button = (props) => {
  const { buttonText, buttonFunc } = props;

  return (
    <div>
      <button onClick={buttonFunc}>{buttonText}</button>
    </div>
  );
};

export default Button;
