import React from "react";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import CouponIcon from "../../assets/coupon.svg?react";

const Jumbotron = () => {
  return (
    <>
      <section className="jumbotron-section  bg-[url('assets/bg_jumbotron.png')] bg-cover bg-center bg-no-repeat">
        <div className="w-11/12 md:w-10/12 mx-auto py-40 md:py-56">
          <div className="jumbotron-content grid grid-cols-12 gap-y-8 md:gap-x-12">
            <div className="left-content col-span-12 md:col-span-6 my-auto w-full md:w-11/12 text-center md:text-left">
              <h3 className="text-white md:text-base mb-3">
                DAIRYLAND - Taman WIsata keluarga
              </h3>
              <h1 className="uppercase text-lg md:text-3xl font-bold text-white mb-5">
                Destinasi Utama Liburan Seru dan Wisata Edukasi Keluarga
                Indonesia
              </h1>
              <div className="btn inline-block">
                <Button
                  as={Link}
                  type="primary"
                  icon={CouponIcon}
                  iconStyle="w-5 stroke-white"
                  text="LIHAT PROMO"
                  target={"/promo"}
                  style="text-white bg-merah hover:text-primary [&>*:nth-child(odd)]:hover:stroke-primary [&>*:nth-child(odd)]:transition [&>*:nth-child(odd)]:delay-150 hover:bg-tertiary transition ease-in-out delay-150"
                />
              </div>
            </div>
            <div className="rigth-content col-span-12 md:col-span-6 my-auto">
              <div className="video-responsive">
                <iframe
                  className="w-full h-[240px] md:h-[380px] rounded-lg"
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
