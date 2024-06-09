import React from "react";
import bg_jumbotron from "../assets/bg_jumbotron.png";
import Button from "./Button";
import { Link } from "react-router-dom";
import CouponIcon from "../assets/coupon.svg?react";

const Jumbotron = () => {
  return (
    <>
      <section className="jumbotron-section  bg-[url('./assets/bg_jumbotron.png')] bg-cover bg-no-repeat">
        <div className="md:w-9/12 mx-auto md:py-56">
          <div className="jumbotron-content grid grid-cols-12">
            <div className="left-content col-span-6">
              <h3 className="text-white md:text-base md:mb-3">
                DAIRYLAND - Taman WIsata keluarga
              </h3>
              <h1 className="uppercase md:text-3xl font-bold text-white md:mb-5">
                Destinasi Utama Liburan Seru dan Wisata Edukasi Keluarga
                Indonesia
              </h1>
              <div className="btn inline-block">
                <Button
                  as={Link}
                  type="primary"
                  icon={CouponIcon}
                  iconStyle="md:w-5"
                  text="LIHAT PROMO"
                  target={"/destinasi"}
                  style="text-white bg-merah "
                />
              </div>
            </div>
            <div className="col-span-6">adaw</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Jumbotron;
