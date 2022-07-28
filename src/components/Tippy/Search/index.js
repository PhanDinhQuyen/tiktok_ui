import { Fragment } from "react";
import classNames from "classnames/bind";
import { ImSpinner10 } from "react-icons/im";

import Tippy from "@tippyjs/react/headless";

import styles from "./Search.module.scss";
import Button from "~/components/Button";
import { ClearIcon, SearchIcon } from "~/components/Icons";
const cx = classNames.bind(styles);

export default function Search() {
  return (
    <Fragment>
      <div className={cx("wrapper")}>
        <Tippy
          visible
          interactive
          placement='bottom-start'
          render={(attrs) => (
            <ul className={cx("listAccount")} tabIndex='-1' {...attrs}>
              <li>Oke</li>
              <li>Oke</li>
              <li>Oke</li>
            </ul>
          )}
        >
          <input
            type='text'
            className={cx("searchInput")}
            placeholder='Search accounts and videos'
          />
        </Tippy>
      </div>
      {false && <ImSpinner10 className={cx("icon")} />}
      <Button className={cx("icon")} tag={Fragment}>
        {<ClearIcon />}
      </Button>
      <span className={cx("spliter")}></span>
      <Button className={cx("search")} tag={Fragment}>
        {<SearchIcon />}
      </Button>
    </Fragment>
  );
}
