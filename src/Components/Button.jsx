import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

const Button = ({
  target,
  type,
  // if you want to use as Link, change parent props as={Link}
  as: Component = "button",
  btnType,
  style,
  text,
  icon: Icon,
  iconStyle,
  onClick,
}) => {
  const variants = {
    primary:
      "flex gap-x-2 md:text-lg text-sm px-5 md:px-8 py-1 md:py-3 my-auto rounded-md md:rounded-xl",
    secondary:
      "flex gap-x-1 md:text-sm text-sm px-5 md:px-4 py-1 md:py-2 my-auto rounded-md md:rounded-xl",
  };

  return (
    <Component
      type={btnType}
      onClick={onClick}
      to={target}
      className={`${variants[type]} ${style} `}
    >
      {Icon && <Icon className={`${iconStyle} my-auto`} />}
      {text}
    </Component>
  );
};

export default Button;
