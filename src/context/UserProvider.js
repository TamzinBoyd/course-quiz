import React, { createContext, useState } from "react";
import LogIn from "../components/LogIn/LogIn";

export const UserContext = createContext({});

const UserProvider = (props) => {
  const [user, setUser] = useState("");

  const data = {
    user: user,
    setUser: setUser,
  };

  return (
    <UserContext.Provider value={data}>{props.children}</UserContext.Provider>
  );
};

export default UserProvider;
