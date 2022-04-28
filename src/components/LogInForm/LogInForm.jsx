import React from "react";
import styles from "./LogInForm.module.scss";
// Form taken from FreeCodeCamp using MUI installed
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import LogInButton from "../LogInButton";

const LogInForm = (props) => {
  const { title, setPassword, setEmail, handleLogIn } = props;

  return (
    <>
      <div>
        <div className={styles.headingContainer}>
          <h3>{title}</h3>
        </div>
      </div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="email"
          label="Enter the Email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="password"
          label="Enter the Password"
          variant="outlined"
          // change state to value of input box
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>

      <LogInButton title={title} handleLogIn={handleLogIn} />
    </>
  );
};

export default LogInForm;
