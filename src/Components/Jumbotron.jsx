import React from "react";
import bg_jumbotron from "../assets/bg_jumbotron.png";
import Button from "./Button";
import { Link } from "react-router-dom";
import CouponIcon from "../assets/coupon.svg?react";

const Jumbotron = () => {
  return (
    <>
      <section className="jumbotron-section  bg-[url('./assets/bg_jumbotron.png')] bg-cover bg-center bg-no-repeat">
        <div className="md:w-10/12 mx-auto md:py-56">
          <div className="jumbotron-content grid grid-cols-12 gap-x-12">
            <div className="left-content col-span-6 my-auto">
              <h3 className="text-white md:text-base md:mb-3">
                DAIRYLAND - Taman WIsata keluarga
              </h3>
              <h1 className="uppercase md:text-2xl font-bold text-white md:mb-5">
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
                  target={"/promo"}
                  style="text-white bg-merah "
                />
              </div>
            </div>
            <div className="rigth-content col-span-6 my-auto">
              <div className="video-responsive">
                <iframe
                  className="w-full md:h-60 rounded-lg"
                  src="https://www.youtube.com/embed/_g0EAQafWEE?si=wjQeKOPqoyfCdTc6"
                  title="Cimory Dairyland"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Jumbotron;
