import React, { Fragment } from "react";
import classNames from "classnames/bind";
import { useLocation } from "react-router-dom";

import { HomeIcon, FollowingIcon, LiveIcon } from "~/components/Icons";
import Button from "~/components/Button";

import style from "./SideBar.module.scss";

export default function SideBar() {
  const cx = classNames.bind(style);
  const location = useLocation().pathname;
  const ACTIONS = [
    { title: "For You", leftIcon: <HomeIcon />, to: "/", tag: "h3" },
    {
      title: "Following",
      leftIcon: <FollowingIcon />,
      to: "/following",
      tag: "h3",
    },
    { title: "LIVE", leftIcon: <LiveIcon />, to: "/live", tag: "h3" },
  ];

  return (
    <div className={cx("styleScroll")}>
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <div className={cx("actions")}>
            {ACTIONS.map((action, index) => (
              <div
                key={index}
                className={cx("actionChild", {
                  active: action.to === location,
                })}
              >
                <Button {...action}>{action.title}</Button>
              </div>
            ))}
          </div>
          <div className={cx("frameLogin")}>
            <p className={cx("loginTip")}>
              Log in to follow creators, like videos, and view comments
            </p>
            <Button className={cx("loginButton")} tag={Fragment} outline>
              Log in
            </Button>
          </div>

          <div className={cx("suggestAccounts")}>
            <p className={cx("suggestTip")}>Suggested accounts</p>
          </div>

          <div className={cx("discover")}></div>

          <div className={cx("footer")}></div>
        </div>
      </div>
    </div>
  );
}
