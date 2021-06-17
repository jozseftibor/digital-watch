import { useContext } from "react";
import WatchContext from "../../context/watch-context";
import classes from "./Day.module.css";

const Day = (props) => {
  const watchCtx = useContext(WatchContext);

  return (
    <div className={classes.day}>
      <div className={classes.content}>{watchCtx.day}</div>
    </div>
  );
};

export default Day;
