import { useContext } from "react";
import WatchContext from "../../context/watch-context";
import classes from "./TimeFormat.module.css";

const TimeFormat = (props) => {
  const watchCtx = useContext(WatchContext);

  return (
    <div className={classes.timeformat}>
      {watchCtx.is24Hours && <div className={classes.content}>24H</div>}
    </div>
  );
};

export default TimeFormat;
