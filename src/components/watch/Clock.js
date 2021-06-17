import { useContext } from "react";
import WatchContext from "../../context/watch-context";
import classes from "./Clock.module.css";

const Clock = (props) => {
  const watchCtx = useContext(WatchContext);

  let hourpart = watchCtx.hours;
  if (!watchCtx.is24Hours && hourpart > 12) {
    hourpart -= 12;
  }

  const timeString = hourpart + ":" + watchCtx.minutes;
  const seconds = watchCtx.seconds;

  return (
    <div className={classes.clock}>
      <div className={classes.time}>{timeString}</div>
      <div className={classes.seconds}>{seconds}</div>
    </div>
  );
};

export default Clock;
