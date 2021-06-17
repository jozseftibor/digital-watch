import NavHeader from "../nav/NavHeader";
import Clock from "../watch/Clock";
import Card from "../UI/Card";
import TimeFormat from "../watch/TimeFormat";
import DayOfWeek from "../watch/DayOfWeek";
import Day from "../watch/Day";

import Stopper from "../stopper/Stopper";

import classes from "./Layout.module.css";
import { useContext } from "react";
import UIContext from "../../context/ui-context";

const Layout = (props) => {
  const uiCtx = useContext(UIContext);
  const statuses = uiCtx.statuses;

  const status = uiCtx.status;

  return (
    <div className={classes.App}>
      <NavHeader />
      <main>
        <div className={classes.container}>
          <section className={classes.watch}>
            <Card height="300" width="400">
              <div>
                <TimeFormat />
                <DayOfWeek />
                <Day />
              </div>
              <div>
                {status === statuses.WATCH && <Clock />}
                {status === statuses.STOPPER && <Stopper />}
              </div>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Layout;
