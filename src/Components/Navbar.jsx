import React from "react";
import TicketIcon from "../assets/ticket.svg?react";
import { Link } from "react-router-dom";
import navLogo from "../assets/logo.png";
import Button from "../Components/Button";

const Navbar = () => {
  const tabs = [
    { name: "Destinasi", value: "/destinasi" },
    { name: "Aktivitas", value: "/aktivitas" },
    { name: "Promo", value: "/promo" },
    { name: "Paket", value: "/paket" },
    { name: "Kemitraan", value: "/kemitraan" },
    { name: "Tentang", value: "/about" },
    { name: "Artikel", value: "/artikel" },
  ];

  return (
    <>
      <nav className="navbar-section md:absolute w-full">
        <div className="md:w-11/12 md:flex md:justify-between mx-auto md:py-5">
          <Link to="/" className="nav-brand">
            <img src={navLogo} alt="" className="w-32" />
          </Link>
          <div className="nav-links flex gap-x-8 my-auto text-white md:text-base">
            {tabs.map((item, itemIdx) => {
              return (
                <div key={itemIdx}>
                  <Link to={`${item.value}`}>{item.name}</Link>
                </div>
              );
            })}
          </div>

          <Button
            as={Link}
            type="primary"
            icon={TicketIcon}
            iconStyle="w-5 fill-primary"
            text="BELI TIKET"
            target={"/destinasi"}
            style="text-primary bg-tertiary "
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
