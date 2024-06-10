import React from "react";
import Header from "../../Components/Header";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import TicketIcon from "../../assets/ticket.svg?react";

const GetTicket = () => {
  return (
    <>
      {" "}
      <section className="gallery-section md:mt-40 bg-[url('assets/get_ticket.png')] bg-cover bg-center bg-no-repeat">
        <div className="md:w-10/12 mx-auto md:py-52">
          <Header
            style="[&>*]:text-white "
            title="Galeri Petualangan Anda"
            caption="Nikmati pemandangan indah dan aktivitas seru yang ada di Cimory Dairyland melalui galeri kami. Lihatlah foto-foto menakjubkan dari berbagai atraksi, momen-momen seru bersama hewan, serta pemandangan alam yang memukau. "
          />
          <div className="btn-ticket flex justify-center md:mt-10">
            <Button
              as={Link}
              type="primary"
              icon={TicketIcon}
              iconStyle="w-5 fill-primary"
              text="BELI TIKET"
              target={"/destinasi"}
              style="text-primary bg-tertiary hover:text-white [&>*:nth-child(odd)]:hover:fill-white [&>*:nth-child(odd)]:transition [&>*:nth-child(odd)]:delay-150 hover:bg-merah transition ease-in-out delay-150 "
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default GetTicket;
