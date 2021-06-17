import { useContext } from "react";
import WatchContext from "../../context/watch-context";
import classes from "./DayOfWeek.module.css";

const DayOfWeek = (props) => {
  const watchCtx = useContext(WatchContext);
  const twoletterday=watchCtx.dayOfWeek;

  return (
    <div className={classes.dayofweek}>
      <div className={classes.content}>{twoletterday}</div>
    </div>
  );
};

export default DayOfWeek;
