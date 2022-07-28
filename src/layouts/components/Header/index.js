import { Fragment } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Button from "~/components/Button";
import {
  PlusIcon,
  MoreIcon,
  LanguageIcon,
  FeedbackIcon,
  KeyboardIcon,
} from "~/components/Icons";
import MoreMenu from "~/components/Tippy/More";
import Search from "~/components/Tippy/Search";
const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    name: "English",
    leftIcon: <LanguageIcon />,
    children: {
      title: "Language",
      data: [
        { name: "Tiếng Việt" },
        { name: "English" },
        { name: "China" },
        { name: "Korean" },
        { name: "Japanese" },
        { name: "Tiếng Việt" },
        { name: "English" },
        { name: "China" },
        { name: "Korean" },
        { name: "Japanese" },
        { name: "Tiếng Việt" },
        { name: "English" },
        { name: "China" },
        { name: "Korean" },
        { name: "Japanese" },
        { name: "Japanese" },
        { name: "Tiếng Việt" },
        { name: "English" },
        { name: "China" },
        { name: "Korean" },
        { name: "Japanese" },
        { name: "Tiếng Việt" },
        { name: "English" },
        { name: "China" },
        { name: "Korean" },
        { name: "Japanese" },
      ],
    },
  },
  {
    name: "Feedback and help",
    leftIcon: <FeedbackIcon />,
    to: "/feedback",
  },
  {
    name: "Keyboard shortcuts",
    leftIcon: <KeyboardIcon />,
  },
];

function Header() {
  return (
    <header className={cx("header")}>
      <div className={cx("wrapper")}>
        {/* Logo */}
        <Button to='/' tag={Fragment}>
          <svg height='42' width='118' alt='TikTok'>
            <use xlinkHref='#svg-header-logo'></use>
          </svg>
        </Button>
        {/* Search */}
        <div className={cx("center")}>
          <Search />
        </div>
        {/* Action */}
        <div className={cx("right")}>
          <Button to='/upload' className={cx("upload")} leftIcon={<PlusIcon />}>
            Upload
          </Button>
          <Button tag={Fragment} primary className={cx("login")}>
            Log in
          </Button>

          <MoreMenu items={MENU_ITEMS}>
            <i className={cx("more")}>
              <MoreIcon />
            </i>
          </MoreMenu>
        </div>
      </div>
    </header>
  );
}

export default Header;
