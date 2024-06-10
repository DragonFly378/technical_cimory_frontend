import React from "react";

const Header = ({ title, caption, style }) => {
  return (
    <>
      <article
        className={`text-center flex flex-col justify-center gap-y-3 ${style}`}
      >
        <h1 className="md:text-2xl text-hitam font-bold">{title}</h1>
        <p className="md:text-lg text-hitam md:w-8/12 mx-auto">{caption}</p>
      </article>
    </>
  );
};

export default Header;
