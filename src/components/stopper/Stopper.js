import { useContext } from "react";
import StopperContext from "../../context/stopper-context";

import classes from "./Stopper.module.css";

const Stopper = (props) => {
  const stopperCtx = useContext(StopperContext);

  const hours = stopperCtx.showHours;
  const minutes = stopperCtx.showMinutes;
  const seconds = stopperCtx.showSeconds;
  const milliseconds = stopperCtx.showMilliseconds;

  return (
    <div className={classes.stopper}>
      <div className={classes.time}>
        {hours}:{minutes}:{seconds}
      </div>
      <div className={classes.milliseconds}>{milliseconds/10}</div>
    </div>
  );
};

export default Stopper;
