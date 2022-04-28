import React from "react";
import styles from "./LogInButton.module.scss";
import Button from "@mui/material/Button";

const LogInButton = (props) => {
  const { title, handleLogIn } = props;
  return (
    <div>
      <Button variant="contained" onClick={handleLogIn}>
        {title}
      </Button>
    </div>
  );
};

export default LogInButton;
