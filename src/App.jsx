import React, { useState, useContext, useEffect } from "react";
// get router for log in
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
// import firebase to use for logging in and password log in option
import { app } from "./firebase.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
// for handling log in errors
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProvider from "./context/UserProvider";

import styles from "./App.module.scss";
import Card from "./components/Card";
import data from "./data";
import LogIn from "./components/LogIn";
import LogInForm from "./components/LogInForm/LogInForm";

const App = () => {
  // const [logInModal, setLogInModal] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogIn = (id) => {
    // destructure the getAuth
    const authentification = getAuth();

    // if log in screen allow user to use registered credentials to log in
    if (id === 1) {
      signInWithEmailAndPassword(authentification, email, password).then(
        (response) => {
          navigate("/home");
          sessionStorage
            .setItem("Auth Token", response._tokenResponse.refreshToken)
            .catch((error) => {
              // below is from Toastify
              if (error.code === "auth/wrong-password") {
                toast.error("Please check the Password");
              }
              if (error.code === "auth/user-not-found") {
                toast.error("Please check the Email");
              }
            });
        }
      );
    }

    // if register screen then create user
    if (id === 2) {
      // create user using the state (which is equal to value of input boxes)
      createUserWithEmailAndPassword(authentification, email, password).then(
        (response) => {
          navigate("/home");
          // store the token response in the session storage. So, if that token exists in session storage, we will be on that private route. If the token doesn't exist, we will be pushed back to the Register or Login Screen.
          sessionStorage
            .setItem("Auth Token", response._tokenResponse.refreshToken)
            .catch((error) => {
              //  check for exisitng email
              if (error.code === "auth/email-already-in-use") {
                toast.error("Email Already in Use");
              }
            });
        }
      );
    }
  };

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/home");
    }
  }, []);

  return (
    //   <UserProvider>
    //     { {logInModal ? (
    //     <LogIn setLogInModal={setLogInModal} />
    //   ) : (
    //     <Card data={data} />
    //   )}
    //  </UserProvider>

    <div className={styles.app}>
      <>
        {/* create routes for login in options */}
        <ToastContainer />
        <Routes>
          <Route
            path="/login"
            element={
              <LogInForm
                title="Login"
                setEmail={setEmail}
                setPassword={setPassword}
                handleLogIn={() => handleLogIn(1)}
              />
            }
          />
          <Route
            path="/register"
            element={
              <LogInForm
                title="Register"
                setEmail={setEmail}
                setPassword={setPassword}
                handleLogIn={() => handleLogIn(2)}
              />
            }
          />

          <Route path="/home" element={<LogIn />} />
        </Routes>
      </>
    </div>
  );
};

export default App;
