import React, { createContext, useState } from "react";

export const UserContext = createContext({});

const UserProvider = (props) => {
  // set intiial values
  const user = {
    name: "Tamzin",
    email: "test@email.co.uk",
  };

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};

export default UserProvider;
