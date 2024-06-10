import React from "react";
import Header from "../../Components/Header";
import galleryImage from "../../assets/gallery.png";

const Gallery = () => {
  return (
    <>
      <section className="gallery-section md:mt-40 bg-[url('assets/bg_gallery.png')] bg-cover bg-center bg-no-repeat">
        <div className="md:w-10/12 mx-auto md:py-20">
          <Header
            style="[&>*:nth-child(odd)]:text-white [&>*:nth-child(even)]:text-tertiary"
            title="Galeri Petualangan Anda"
            caption="Nikmati pemandangan indah dan aktivitas seru yang ada di Cimory Dairyland melalui galeri kami. Lihatlah foto-foto menakjubkan dari berbagai atraksi, momen-momen seru bersama hewan, serta pemandangan alam yang memukau. "
          />
          <div className="gallery-list  md:mt-10">
            <img src={galleryImage} alt="gallery" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
