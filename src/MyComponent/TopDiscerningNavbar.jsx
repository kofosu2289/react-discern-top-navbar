import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function TopDiscerningNavbar(props) {
  const {
    className,
    topClassName,
    height,
    width,
    backgroundColor,
    topBackgroundColor,
    style,
    topStyle
  } = props;
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const topPosition = window.scrollY;
      if (topPosition <= 0) {
        setIsTop(true);
      } else if (topPosition > 0) {
        setIsTop(false);
      }
    });
    topClassName &&
      !className &&
      console.error(
        "If you are declaring a topClassName, you need to declare a className first"
      );
  }, [setIsTop, className, topClassName]);

  const defaultStyle = {
    height: height ? `${height}px` : "66px",
    width: width ? `${width}vw` : "100vw",
    background: topBackgroundColor
      ? topBackgroundColor
      : backgroundColor
        ? backgroundColor
        : "white",
    position: "fixed"
  };

  return (
    <div
      className={
        isTop ? className && className.concat(" ", topClassName)
          : className
      }
      style={
        isTop
          ? topStyle || topClassName
            ? topStyle
            : defaultTopStyle
          : style || className
            ? style
            : defaultStyle
      }
    >
      {props.children}
    </div>
  );
}

TopDiscerningNavbar.propTypes = {
  className: PropTypes.string,
  topClassName: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  backgroundColor: PropTypes.string,
  topBackgroundColor: PropTypes.string,
  children: PropTypes.any,
  style: PropTypes.object,
  topStyle: PropTypes.object
};

