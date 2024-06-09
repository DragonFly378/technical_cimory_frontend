import React from "react";
import Layout from "../Layout/Index";
import { Link } from "react-router-dom";
import navLogo from "../assets/logo.png";
import Button from "../Components/Button";

const Home = () => {
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
      <Layout>
        <nav className="navbar-section">
          <div className="md:w-11/12 md:flex md:justify-between mx-auto">
            <Link to="/" className="nav-brand w-28">
              <img src={navLogo} alt="" className="w-full" />
            </Link>
            <div className="nav-links flex gap-x-8 my-auto text-blue-700">
              {tabs.map((item, itemIdx) => {
                return (
                  <div key={itemIdx} className="">
                    <Link to={`${item.value}`}>{item.name}</Link>
                  </div>
                );
              })}
            </div>
            <Button
              as={Link}
              type="auth"
              text="BELI TIKET"
              target={"/destinasi"}
              style="text-soft bg-white"
            />
          </div>
        </nav>
      </Layout>
    </>
  );
};
export default Home;
