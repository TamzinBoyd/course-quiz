import React from "react";

const Button = (props) => {
  const { buttonText, buttonFunc } = props;

  return (
    <div>
      <button onClick={buttonFunc}>{buttonText}</button>
    </div>
  );
};

export default Button;
