import React from "react";
import Layout from "../../Layout/Index";
import { Link } from "react-router-dom";
import navLogo from "../../assets/logo.png";
import Button from "../../Components/Button";
import Jumbotron from "./Jumbotron";
import Promos from "./Promos";
import "../../style/home.scss";
import Destination from "./Destination";
import Gallery from "./Gallery";
import News from "./News";
import Faq from "./Faq";
import GetTicket from "./GetTicket";

const Home = () => {
  return (
    <>
      <Layout>
        <Jumbotron />
        <Promos />
        <Destination />
        <Gallery />
        <News />
        <Faq />
        <GetTicket />
      </Layout>
    </>
  );
};
export default Home;
