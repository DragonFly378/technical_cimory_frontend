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
      "flex gap-x-2 md:text-lg text-sm px-5 md:px-8 py-1 md:py-3 my-auto bg-tertiary rounded-md md:rounded-xl",
    secondary: "px-5 md:px-8 py-1 md:py-3 my-auto bg-red",
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
