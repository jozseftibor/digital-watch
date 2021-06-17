import React, { useEffect, useState } from "react";

const WatchContext = React.createContext({
  hours: 0,
  minutes: 0,
  seconds: 0,
  dayOfWeek: null,
  day: null,
  is24Hours: false,
  toggle24Hours: () => {},
});
const weekday = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

export const WatchContextProvider = (props) => {
  const time = new Date();
  let intervalToken = null;

  const [currentTime, setCurrentTime] = useState({
    time: time,
    hours: time.getHours(),
    minutes: time.getMinutes(),
    seconds: time.getSeconds(),
    dayOfWeek: weekday[time.getDay()],
    day: time.getDate(),
    is24Hours: true,
  });

  const toggle24HoursHandler = () => {
    setCurrentTime((prev) => {
      return {
        ...prev,
        is24Hours: !prev.is24Hours,
      };
    });
  };

  useEffect(() => {
    if (!!intervalToken) {
      clearTimeout(intervalToken);
    }

    intervalToken = setInterval(() => {
      setCurrentTime((prev) => {
        const time = new Date();
        return {
          ...prev,
          time: time,
          hours: time.getHours(),
          minutes: time.getMinutes(),
          seconds: time.getSeconds(),
          dayOfWeek: weekday[time.getDay()],
          day: time.getDate(),
        };
      }, 1000);
    });
  }, [intervalToken, setCurrentTime]);

  return (
    <WatchContext.Provider
      value={{
        hours: currentTime.hours,
        minutes: currentTime.minutes,
        seconds: currentTime.seconds,
        dayOfWeek: currentTime.dayOfWeek,
        day: currentTime.day,
        is24Hours: currentTime.is24Hours,
        toggle24Hours: toggle24HoursHandler,
      }}
    >
      {props.children}
    </WatchContext.Provider>
  );
};

export default WatchContext;
