import React, { useEffect, useState } from "react";

const stopperStatuses = { stopped: 1, running: 2, paused: 3 };

const StopperContext = React.createContext({
  statuses: stopperStatuses,
  status: stopperStatuses.stopped,
  time: new Date(),
  showTime: new Date(),
  showHours: null,
  showMinutes: null,
  showSeconds: null,
  showMilliseconds: null,
  Start: () => {},
  Stop: () => {},
  Pause: () => {},
  Clear: () => {},
  isCleared: true,
});

const initialTime = new Date();
initialTime.setHours(0, 0, 0, 0);

export const StopperContextProvider = (props) => {
  const [stopperIntervalToken, setStopperIntervalToken] = useState(null);

  const [stopperState, setStopperState] = useState({
    statuses: stopperStatuses,
    status: stopperStatuses.stopped,
    time: initialTime,
    showTime: initialTime,
    showHours: initialTime.getHours(),
    showMinutes: initialTime.getMinutes(),
    showSeconds: initialTime.getSeconds(),
    showMilliseconds: initialTime.getMilliseconds(),
    Start: () => {},
    Stop: () => {},
    Pause: () => {},
    Clear: () => {},
    isCleared: true,
  });

  const Start = () => {
    console.log("Start");
    if (!!stopperIntervalToken) {
      return;
    }

    setStopperIntervalToken(
      setInterval(() => {
        setStopperState((prev) => {
          const newTime = prev.time;
          newTime.setMilliseconds(newTime.getMilliseconds() + 10);

          if (prev.status===stopperStatuses.paused) {
            return {
              ...prev, time: newTime
            };
          }

          return {
            ...prev,
            time: newTime,
            showTime: newTime,
            showHours: newTime.getHours(),
            showMinutes: newTime.getMinutes(),
            showSeconds: newTime.getSeconds(),
            showMilliseconds: newTime.getMilliseconds(),
          };
        });
      }, 10)
    );

    setStopperState((prev) => {
      return { ...prev, status: stopperStatuses.running, isCleared: false };
    });
  };

  const Stop = () => {
    if (!!stopperIntervalToken) {
      clearInterval(stopperIntervalToken);
      setStopperIntervalToken(null);
    }

    setStopperState((prev) => {
      return {
        ...prev,
        status: stopperStatuses.stopped,
      };
    });
  };

  const Pause = () => {
    console.log("Pause");
    if (stopperState.status === stopperStatuses.running) {
      setStopperState((prev) => {
        return { ...prev, status: stopperStatuses.paused };
      });
    } else if (stopperState.status === stopperStatuses.paused) {
      setStopperState((prev) => {
        return { ...prev, status: stopperStatuses.running };
      });
    }
  };

  const Clear = () => {
    console.log("Clear");

    if (stopperState.status === stopperStatuses.stopped) {
      setStopperState((prev) => {
        const newTime = prev.time;
        newTime.setHours(0, 0, 0, 0);
        return {
          ...prev,
          time: newTime,
          showTime: newTime,
          showHours: newTime.getHours(),
          showMinutes: newTime.getMinutes(),
          showSeconds: newTime.getSeconds(),
          showMilliseconds: newTime.getMilliseconds(),
          isCleared: true,
        };
      });
    }
  };

  return (
    <StopperContext.Provider
      value={{
        statuses: stopperStatuses,
        status: stopperState.status,
        time: stopperState.stopperTime,
        showTime: stopperState.showTime,
        showHours: stopperState.showHours,
        showMinutes: stopperState.showMinutes,
        showSeconds: stopperState.showSeconds,
        showMilliseconds: stopperState.showMilliseconds,
        Start: Start,
        Stop: Stop,
        Pause: Pause,
        Clear: Clear,
        isCleared: stopperState.isCleared,
      }}
    >
      {props.children}
    </StopperContext.Provider>
  );
};

export default StopperContext;
