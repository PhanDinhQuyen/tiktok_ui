import Tippy from "@tippyjs/react/headless";
import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import classNames from "classnames/bind";
import Button from "~/components/Button";
import { BackIcon } from "~/components/Icons";
import styles from "./MoreMenu.module.scss";

const cx = classNames.bind(styles);
function MoreMenu({ children, items = [] }) {
  const [dataMenu, setDataMenu] = useState([{ data: items }]);
  const currentMenu = dataMenu[dataMenu.length - 1];
  const handleOnClick = (children) => {
    if (!children) return;
    setDataMenu((pre) => [...pre, children]);
  };
  const handleOnBack = () => {
    setDataMenu((pre) => pre.slice(0, pre.length - 1));
  };
  const renderItems = () =>
    currentMenu.data.map((item, index) => {
      return (
        <li key={index}>
          <Button
            className={cx("itemMenu", dataMenu.length > 1 && "smallText")}
            onClick={() => handleOnClick(item.children)}
            {...item}
          >
            {item.name}
          </Button>
        </li>
      );
    });
  const handleResetMenu = () => setDataMenu((pre) => pre.slice(0, 1));
  return (
    <Tippy
      onHidden={handleResetMenu}
      delay={[0, 700]}
      interactive
      placement='bottom-end'
      render={(attrs) => (
        <div className={cx("wrapper")}>
          {dataMenu.length > 1 && (
            <div className={cx("header")}>
              <Button
                tag={Fragment}
                className={cx("back")}
                onClick={handleOnBack}
              >
                <BackIcon />
              </Button>
              <h2>{currentMenu.title}</h2>
            </div>
          )}
          <ul className={cx("listMenu")} tabIndex='-1' {...attrs}>
            {renderItems()}
          </ul>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default MoreMenu;

MoreMenu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
};
