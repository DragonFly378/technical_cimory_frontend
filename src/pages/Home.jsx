import React from "react";
import Layout from "../Layout/Index";
import { Link } from "react-router-dom";
import navLogo from "../assets/logo.png";
import Button from "../Components/Button";
import Jumbotron from "../Components/Jumbotron";

const Home = () => {
  return (
    <>
      <Layout>
        <Jumbotron />
      </Layout>
    </>
  );
};
export default Home;
