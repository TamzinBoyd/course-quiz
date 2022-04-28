import React, { useContext, useEffect } from "react";
// import { UserContext } from "../../context/UserProvider";
// import { useHistory } from "react-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./LogIn.module.scss";

const LogIn = (props) => {
  const { setLogInModal } = props;

  // const userContext = useContext(UserContext);
  // const history = useHistory();

  // const welcomeMsg = `Welcome to the quiz ${data.name}`;

  const handleStartQuiz = () => {
    setLogInModal(false);
  };

  let navigate = useNavigate();

  const handleLogout = () => {
    // delete saved auth token
    sessionStorage.removeItem("Auth Token");
    navigate("/login");
  };

  // useEffect to create a private route

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    console.log(authToken);
    if (authToken) {
      navigate("/home");
    }
    if (!authToken) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.message}>
          {/* <h1>{welcomeMsg}</h1> */}
          {/* <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="email"
              className={styles.form__input}
              placeholder="Email address"
            />
            <input
              type="password"
              className={styles.form__input}
              placeholder="Password"
            />
          </form> */}
          <Button
            buttonFunc={handleStartQuiz}
            buttonText="Log in"
            type="submit"
          />

          <button onClick={handleLogout}>Log out</button>
          <Button buttonFunc={handleStartQuiz} buttonText="Start Quiz" />
        </div>
      </div>
    </>
  );
};

export default LogIn;
