import React from "react";
import Layout from "../Layout/Index";
import { Link } from "react-router-dom";
import navLogo from "../assets/logo.png";
import Button from "../Components/Button";
import Jumbotron from "../Components/Jumbotron";
import Promos from "../Components/Promos";
import "../style/home.scss";

const Home = () => {
  return (
    <>
      <Layout>
        <Jumbotron />
        <Promos />
      </Layout>
    </>
  );
};
export default Home;
