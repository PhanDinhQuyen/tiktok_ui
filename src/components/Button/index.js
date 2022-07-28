import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);
export default function Button({
  children,
  leftIcon,
  rightIcon,
  onClick,
  tag = "span",
  to,
  href,
  outline = false,
  primary = false,
  disable = false,
  className,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };
  if (disable) {
    Object.key(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function")
        delete props[key];
    });
  }
  if (to) {
    Comp = Link;
    props.to = to;
  }
  if (href) {
    Comp = "a";
    props.href = href;
  }

  const classes = cx("wrapper", {
    [className]: className,
    primary,
    outline,
    disable,
  });
  const Tag = tag;
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <Tag>{children}</Tag>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}
Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  disable: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  className: PropTypes.string,
};
