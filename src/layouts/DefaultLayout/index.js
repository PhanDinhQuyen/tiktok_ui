import { Fragment } from "react";
import classNames from "classnames/bind";

import { Header, SideBar } from "../components";

import styles from "../Layout.module.scss";
const cx = classNames.bind(styles);
export default function DefaultLayout({ children }) {
  return (
    <Fragment>
      <Header />
      <div className={cx("container")}>
        <SideBar />
        <div className={cx("content")}>{children}</div>
      </div>
    </Fragment>
  );
}
