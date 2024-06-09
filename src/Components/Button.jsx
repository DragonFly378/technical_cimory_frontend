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
  icon,
  onClick,
}) => {
  const variants = {
    auth: "login py-2.5 px-3.5  rounded-md hover:border hover:border-white hover:bg-transparent hover:text-white hover:border-2 transition ease-in-out delay-150",
    primary:
      "primary py-[10px] px-[10px] md:py-[10px] md:px-[20px]  flex gap-x-3 rounded-md ",
    secondary:
      "secondary py-[10px] px-[10px] md:py-[10px] md:px-[20px]  flex gap-x-3  border-b-2 ",
  };

  return (
    <Component
      type={btnType}
      onClick={onClick}
      to={target}
      className={`${variants[type]} ${style}`}
    >
      {text}

      {icon && <FontAwesomeIcon icon={icon} className="my-auto md:text-lg" />}
    </Component>
  );
};

export default Button;
