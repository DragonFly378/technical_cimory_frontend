import React from "react";
import Header from "../../Components/Header";

import destinationImage1 from "../../assets/destination_1.png";
import destinationImage2 from "../../assets/destination_2.png";
import destinationImage3 from "../../assets/destination_3.png";
import LocationIcon from "../../assets/location.svg?react";
import TicketIcon from "../../assets/ticket.svg?react";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";

const Destination = () => {
  const destinationPlaces = [
    {
      title: "Dairyland Riverside",
      location: "Bogor, Jawa Barat",
      img: destinationImage1,
      url: "/destinasi/diary-riverside",
    },
    {
      title: "Dairyland On The Valley",
      location: "Bawen, Jawa Tengah",
      img: destinationImage2,
      url: "/destinasi/diary-onvalley",
    },
    {
      title: "Minimania - Miniatur Dunia",
      location: "Lembang, Jawa Barat",
      img: destinationImage3,
      url: "/destinasi/minimania",
    },
    {
      title: "Minimania - Miniatur Dunia",
      location: "Lembang, Jawa Barat",
      img: destinationImage1,
      url: "/destinasi/minimania",
    },
  ];

  return (
    <>
      <section className="destinations-section mt-16 md:mt-40">
        <div className="w-11/12 md:w-10/12 mx-auto">
          <Header
            title="Destinasi Favorit untuk Liburan Anda"
            caption="Jelajahi berbagai tempat menarik dan nikmati wisata seru di Cimory Dairyland. Dari peternakan hewan yang edukatif hingga taman bermain yang penuh kegembiraan, setiap sudut Dairyland menawarkan pengalaman unik dan mengesankan."
          />
          <div className="destination-list mt-4 md:mt-10 ">
            <div className="flex md:block overflow-x-scroll md:overflow-hidden">
              <div className="md:grid md:grid-cols-12 flex flex-nowrap gap-y-8 gap-x-4 md:gap-x-4 justify-center items-center">
                {destinationPlaces.map((place, placeIdx) => {
                  return (
                    <>
                      {" "}
                      <div
                        key={placeIdx}
                        className="destination-item inline-block md:col-span-3 rounded-t-xl md:rounded-t-2xl overflow-clip "
                      >
                        <Card
                          title={place.title}
                          image={place.img}
                          location={place.location}
                          url={place.url}
                        />
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="btn-ticket flex mt-3 md:mt-6 text-center justify-center mx-auto">
              <Button
                as={Link}
                type="primary"
                // icon={TicketIcon}
                iconStyle="w-3 fill-primary"
                text="LIHAT LAINNYA"
                target={"/destinasi"}
                style="text-white bg-primary hover:text-primary hover:bg-tertiary transition ease-in-out delay-150 "
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Card = ({ image, title, location, url }) => {
  return (
    <>
      <div className="card-destination ">
        <div className="flex flex-col">
          <div className={`img-destination w-[280px] md:w-full h-[180px]`}>
            <img className="w-full h-full object-cover" src={image} alt="" />
          </div>
          <div className="desc-destination px-3 py-3 flex flex-col gap-y-5 bg-[url(assets/card_bg.svg)] bg-contain md:bg-cover md:bg-bottom bg-no-repeat mt-[-5px]">
            <div className="title-loc text-white flex flex-col gap-y-1">
              <h2 className="text-lg font-bold">{title}</h2>
              <div className="location flex flex-row gap-x-1">
                <LocationIcon className="my-auto fill-white w-5" />
                <h3>{location}</h3>
              </div>
            </div>
            <div className="btn-ticket flex mb-6 md:mb-6">
              <Button
                as={Link}
                type="secondary"
                icon={TicketIcon}
                iconStyle="w-3 fill-primary"
                text="BELI TIKET"
                target={`${url}`}
                style="text-primary bg-tertiary hover:text-tertiary [&>*:nth-child(odd)]:hover:fill-tertiary [&>*:nth-child(odd)]:transition [&>*:nth-child(odd)]:delay-150 hover:bg-primary transition ease-in-out delay-150 "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
