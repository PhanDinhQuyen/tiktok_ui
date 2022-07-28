import { Fragment } from "react";
import { Header } from "../components";

import classNames from "classnames/bind";

import styles from "../Layout.module.scss";

const cx = classNames.bind(styles);
export default function HeaderOnly({ children }) {
  return (
    <Fragment>
      <Header />
      <div className={cx("container")}>
        <div className={cx("content")}>{children}</div>
      </div>
    </Fragment>
  );
}
