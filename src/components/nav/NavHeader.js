import { useContext } from "react";
import StopperContext from "../../context/stopper-context";
import UIContext from "../../context/ui-context";
import WatchContext from "../../context/watch-context";
import classes from "./NavHeader.module.css";

const NavHeader = (props) => {
  const watchContext = useContext(WatchContext);
  const uiContext = useContext(UIContext);
  const stopperContext = useContext(StopperContext);

  const { status, statuses } = uiContext;

  const {
    status: stopperStatus,
    statuses: stopperStatuses,
    isCleared,
  } = stopperContext;

  const timeFormatClickHandler = (event) => {
    watchContext.toggle24Hours();
  };

  const watchClickHandler = (event) => {
    uiContext.setWatch();
  };

  const stopperClickHandler = (event) => {
    uiContext.setStopper();
  };

  const stopperStartHandler = (event) => {
    console.log("start");
    stopperContext.Start();
  };

  const stopperStopHandler = (event) => {
    console.log("stop");
    stopperContext.Stop();
  };

  const stopperClearHandler = (event) => {
    console.log("clear");
    stopperContext.Clear();
  };

  const stopperPauseHandler = (event) => {
    console.log("pause");
    stopperContext.Pause();
  };

  return (
    <header className={classes.header}>
      <h2>Digital watch</h2>
      <nav>
        <ul>
          {status !== statuses.WATCH && (
            <li>
              <a href="#" onClick={watchClickHandler}>
                Watch
              </a>
            </li>
          )}
          {status !== statuses.STOPPER && (
            <li>
              <a href="#" onClick={stopperClickHandler}>
                Stopper
              </a>
            </li>
          )}
          <li> | </li>
          {status === statuses.WATCH && (
            <li>
              <a href="#" onClick={timeFormatClickHandler}>
                24h/12h
              </a>
            </li>
          )}
          {status === statuses.STOPPER &&
            stopperStatus === stopperStatuses.stopped && (
              <li>
                <a href="#" onClick={stopperStartHandler}>
                  Start
                </a>
              </li>
            )}
          {status === statuses.STOPPER &&
            (stopperStatus === stopperStatuses.running ||
              stopperStatus === stopperStatuses.paused) && (
              <li>
                <a href="#" onClick={stopperStopHandler}>
                  Stop
                </a>
              </li>
            )}
          {status === statuses.STOPPER &&
            stopperStatus === stopperStatuses.stopped &&
            !isCleared && (
              <li>
                <a href="#" onClick={stopperClearHandler}>
                  Clear
                </a>
              </li>
            )}
          {status === statuses.STOPPER &&
            (stopperStatus === stopperStatuses.running ||
              stopperStatus === stopperStatuses.paused) && (
              <li>
                <a href="#" onClick={stopperPauseHandler}>
                  Pause
                </a>
              </li>
            )}
        </ul>
      </nav>
    </header>
  );
};

export default NavHeader;
