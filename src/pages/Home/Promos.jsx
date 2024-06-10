import React from "react";
import Header from "../../Components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import promoImage1 from "../../assets/promos_1.png";
import promoImage2 from "../../assets/promos_2.png";
import promoImage3 from "../../assets/promos_3.png";
import promoImage4 from "../../assets/promos_4.png";
import { Link } from "react-router-dom";

const Promos = () => {
  const imgPromo = [
    {
      title: "promo 1",
      src: promoImage1,
    },
    {
      title: "promo 2",
      src: promoImage2,
    },
    {
      title: "promo 3",
      src: promoImage3,
    },
    {
      title: "promo 4",
      src: promoImage4,
    },
  ];

  return (
    <>
      <section className="promos-section md:mt-40">
        <div className="md:w-10/12 mx-auto">
          <Header
            title="Penawaran Spesial Bulan Ini!"
            caption="Nikmati penawaran spesial kami dan buat liburan Anda di Cimory Dairyland lebih berkesan. Dari tiket diskon hingga paket wisata eksklusif, temukan berbagai promo menarik yang akan menambah keseruan dan nilai edukatif untuk seluruh keluarga."
          />

          <div className="promos-wrapper md:mt-10">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="promos-swiper flex justify-center text-center rounded-2xl mx-auto w-full"
            >
              {imgPromo.map((image, imageIdx) => {
                return (
                  <>
                    {" "}
                    <SwiperSlide key={imageIdx} className="rounded-lg ">
                      <Link to={"/promos"}>
                        <img
                          className="w-full"
                          src={image.src}
                          alt={`${image.title}`}
                        />{" "}
                      </Link>
                    </SwiperSlide>
                  </>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Promos;
