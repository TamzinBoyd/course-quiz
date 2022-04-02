import React, { useState, useContext } from "react";
import styles from "./App.module.scss";
import Card from "./components/Card";
import data from "./data";
import LogIn from "./components/LogIn";
import UserProvider from "./context/UserProvider";

const App = () => {
  const [logInModal, setLogInModal] = useState(true);

  return (
    <UserProvider>
      {logInModal ? (
        <LogIn setLogInModal={setLogInModal} />
      ) : (
        <Card data={data} />
      )}
    </UserProvider>
  );
};

export default App;
