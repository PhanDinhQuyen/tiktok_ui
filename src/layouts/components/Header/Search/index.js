import { Fragment, useEffect, useState, useRef } from "react";
import classNames from "classnames/bind";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import Tippy from "@tippyjs/react/headless";

import { useDebounce } from "~/hooks";

import * as request from "~/utils/httpRequest";

import Button from "~/components/Button";
import { ClearIcon, SearchIcon } from "~/components/Icons";

import styles from "./Search.module.scss";
const cx = classNames.bind(styles);

export default function Search() {
  const [listAccount, setListAccount] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showListAccount, setShowListAccount] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const debounceValue = useDebounce(searchTerm, 700);
  useEffect(() => {
    if (!debounceValue.trim()) return;

    setLoading(true);
    // Call API
    (async () => {
      try {
        const res = await request.get("/users/search", {
          params: {
            q: debounceValue,
            type: "less",
          },
        });
        setLoading(false);
        setListAccount(res.data);
      } catch (err) {
        setLoading(false);
        throw new Error(err);
      }
    })();
  }, [debounceValue]);

  const handleChangeSearchTerm = (e) => {
    setListAccount([]);
    const value = e.target.value;
    if (value.startsWith(" ")) return;
    setSearchTerm(e.target.value);
  };

  const handleHideListAccount = () => {
    setShowListAccount(false);
  };

  const handleShowListAccount = () => {
    setShowListAccount(true);
  };

  const handleClearSearchTerm = () => {
    setSearchTerm("");
    setListAccount([]);
    inputRef.current.focus();
  };
  return (
    <Fragment>
      <div className={cx("wrapper")}>
        <Tippy
          interactive
          placement='bottom-start'
          onClickOutside={handleHideListAccount}
          visible={listAccount.length > 0 && showListAccount}
          render={(attrs) => (
            <ul className={cx("listAccount")} tabIndex='-1' {...attrs}>
              {listAccount.map((account) => (
                <li key={account.id}>{account.nickname}</li>
              ))}
            </ul>
          )}
        >
          <input
            type='text'
            className={cx("searchInput")}
            placeholder='Search accounts and videos'
            spellCheck='false'
            ref={inputRef}
            value={searchTerm}
            onChange={handleChangeSearchTerm}
            onFocus={handleShowListAccount}
          />
        </Tippy>
      </div>
      {loading && <CgSpinnerTwoAlt className={cx("icon", "spin")} />}
      {!loading && searchTerm && (
        <Button
          onClick={handleClearSearchTerm}
          className={cx("icon")}
          tag={Fragment}
        >
          {<ClearIcon />}
        </Button>
      )}
      <span className={cx("spliter")}></span>
      <Button className={cx("search")} tag={Fragment}>
        {<SearchIcon />}
      </Button>
    </Fragment>
  );
}
