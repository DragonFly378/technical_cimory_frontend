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
      img: destinationImage1,
      url: "/destinasi/diary-onvalley",
    },
    {
      title: "Minimania - Miniatur Dunia",
      location: "Lembang, Jawa Barat",
      img: destinationImage1,
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
      <section className="destinations-section md:mt-40">
        <div className="md:w-10/12 mx-auto">
          <Header
            title="Destinasi Favorit untuk Liburan Anda"
            caption="Jelajahi berbagai tempat menarik dan nikmati wisata seru di Cimory Dairyland. Dari peternakan hewan yang edukatif hingga taman bermain yang penuh kegembiraan, setiap sudut Dairyland menawarkan pengalaman unik dan mengesankan."
          />
          <div className="destination-list  md:mt-10">
            <div className="grid md:grid-cols-12 md:gap-x-4 justify-center items-center">
              {destinationPlaces.map((place, placeIdx) => {
                return (
                  <>
                    {" "}
                    <div
                      key={placeIdx}
                      className="destination-item md:col-span-3 md:rounded-t-2xl overflow-clip"
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
            <div className="btn-ticket flex md:mt-6 text-center justify-center mx-auto">
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
        <div className="flex flex-col md:rounded-xl">
          <div className="img-destination">
            <img src={image} alt="" />
          </div>
          <div className="desc-destination md:px-3 md:py-3 flex flex-col md:gap-y-5 bg-[url(assets/card_bg.svg)] bg-cover bg-center bg-no-repeat">
            <div className="title-loc text-white">
              <h2>{title}</h2>
              <div className="location flex flex-row ">
                <LocationIcon className="my-auto fill-white w-5" />
                <h3>{location}</h3>
              </div>
            </div>
            <div className="btn-ticket flex md:mb-6">
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
