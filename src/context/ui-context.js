import React from "react";
import { useState } from "react";

const statuses = { WATCH: 1, STOPPER: 2 };

const UIContext = React.createContext({
  statuses: statuses,
  status: statuses.WATCH,
  setStopper: () => {},
  setWatch: () => {},
});

export const UIContextProvider = (props) => {
  const [status, setStatus] = useState(statuses.WATCH);

  const setStopper = () => {
    console.log(statuses.STOPPER);
    setStatus(statuses.STOPPER);
  };

  const setWatch = () => {
    console.log(statuses.WATCH);
    setStatus(statuses.WATCH);
  };

  return (
    <UIContext.Provider
      value={{
        statuses: statuses,
        status: status,
        setStopper: setStopper,
        setWatch: setWatch,
      }}
    >
      {props.children}
    </UIContext.Provider>
  );
};

export default UIContext;
