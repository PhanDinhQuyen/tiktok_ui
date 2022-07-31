import { Fragment, useEffect, useState, useRef } from "react";
import classNames from "classnames/bind";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import Tippy from "@tippyjs/react/headless";

import { useDebounce } from "~/hooks";
import * as request from "~/utils/httpRequest";
import styles from "./Search.module.scss";
import Button from "~/components/Button";
import { ClearIcon, SearchIcon } from "~/components/Icons";
const cx = classNames.bind(styles);

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [listAccount, setListAccount] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const debounceValue = useDebounce(searchTerm, 700);
  useEffect(() => {
    if (!debounceValue.trim()) return;

    setLoading(true);
    // Call api
    const fetchApi = async () => {
      try {
        const res = await request.get("/users/search", {
          params: {
            q: debounceValue,
            type: "less",
          },
        });
        setLoading(false);
        setListAccount(res.data);
        console.log(res.data);
      } catch (err) {
        setLoading(false);
        throw new Error(err);
      }
    };

    fetchApi();
  }, [debounceValue]);

  const handleChangeSearchTerm = (e) => {
    setListAccount([]);
    const value = e.target.value;
    if (value.startsWith(" ")) return;
    setSearchTerm(e.target.value);
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
          visible={searchTerm && listAccount.length > 0}
          interactive
          placement='bottom-start'
          render={(attrs) => (
            <ul className={cx("listAccount")} tabIndex='-1' {...attrs}>
              {listAccount.map((account) => (
                <li key={account.id}>{account.nickname}</li>
              ))}
            </ul>
          )}
        >
          <input
            ref={inputRef}
            type='text'
            className={cx("searchInput")}
            placeholder='Search accounts and videos'
            value={searchTerm}
            onChange={handleChangeSearchTerm}
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
