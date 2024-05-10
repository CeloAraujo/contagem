import React, { children, useState } from "react";

const CountDownContext = React.createContext(null);

const CountdownProvider = ({ children }) => {
  const [event, setEvent] = useState(null);

  return (
    <CountDownContext.Provider value={{ event, setEvent }}>
      {children}
    </CountDownContext.Provider>
  );
};

export { CountDownContext, CountdownProvider };
