import React from "react";
import Header from "../../Components/Header";
import image_1 from "../../assets/news_1.png";
import image_3 from "../../assets/news_3.png";
import image_2 from "../../assets/news_2.png";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";

const News = () => {
  return (
    <>
      <section className="gallery-section md:mt-40">
        <div className="md:w-10/12 mx-auto">
          <Header
            title="Berita dan Artikel Seru"
            caption="Baca berita terbaru, artikel menarik, dan update seputar kegiatan di Cimory Dairyland. Tetap terinformasi dengan segala hal yang terjadi di Dairyland, dari acara spesial dan promosi terbaru hingga tips liburan dan cerita inspiratif."
          />

          <section className="news-list grid grid-cols-12 md:gap-x-5 md:mt-10">
            <div className="latest-article col-span-6">
              <article className="news-item md:rounded-2xl overflow-clip shadow-[0px_0px_12.1px_#c8cae2]">
                <div className="news-image h-80">
                  <div className="h-full bg-[url('assets/news_1.png')] bg-cover bg-center bg-no-repeat"></div>
                  {/* <img className="" src={image_2} alt="news_1" /> */}
                </div>
                <div className="news-content md:p-5">
                  <h2 className="title-news md:text-3xl font-bold md:mb-3">
                    Cek Promo Tiket Dairyland Farm Theme Park Puncak Disini!
                  </h2>
                  <p className="desc md:text-base line-clamp-3">
                    Menjelajahi suasana pedesaan di Dairyland Farm Theme Park
                    Puncak adalah pilihan liburan sempurna untuk keluarga.
                    Dengan tiket promo Dairyland Farm Theme Park Puncak, kamu
                    bisa menikmati berbagai atraksi menarik
                  </p>
                  <div className="btn-news text-primary underline flex md:mt-3 hover:underline">
                    <Link to={"/berita"}>Lihat artikel</Link>
                  </div>
                </div>
              </article>
            </div>
            <div className="list-article col-span-6 flex flex-col gap-y-6">
              {" "}
              <article className="news-item md:rounded-2xl overflow-clip shadow-[0px_0px_12.1px_#c8cae2]">
                <div className="news-image h-44">
                  <div className="h-full bg-[url('assets/news_2.png')] bg-cover bg-center bg-no-repeat"></div>
                  {/* <img className="" src={image_2} alt="news_1" /> */}
                </div>
                <div className="news-content md:p-5">
                  <h2 className="title-news md:text-xl font-bold md:mb-1">
                    5 Pilihan Spot Foto Puncak Bogor, Pecinta Foto Wajib Tahu!{" "}
                  </h2>
                  <p className="desc md:text-sm line-clamp-2">
                    Puncak Bogor terkenal dengan keindahan alamnya yang memukau,
                    udara yang sejuk, dan berbagai tempat wisata menarik. Tak
                    heran, kawasan ini menjadi destinasi favorit bagi banyak
                    orang, termasuk para pecinta fotografi. Bagi kamu yang ingin
                    mengabadikan momen indah, berikut 5 pilihan spot foto Puncak
                    Bogor yang wajib kamu kunjungi!
                  </p>
                  <div className="btn-news text-primary underline flex md:mt-3 hover:underline">
                    <Link className="md:text-sm" to={"/berita"}>
                      Lihat artikel
                    </Link>
                  </div>
                </div>
              </article>
              <article className="news-item md:rounded-2xl overflow-clip shadow-[0px_0px_12.1px_#c8cae2]">
                <div className="news-image h-44">
                  <div className="h-full bg-[url('assets/news_3.png')] bg-cover bg-center bg-no-repeat"></div>
                  {/* <img className="" src={image_2} alt="news_1" /> */}
                </div>
                <div className="news-content md:p-5">
                  <h2 className="title-news md:text-xl font-bold md:mb-1">
                    3 Rekomendasi Tempat Wisata Di Puncak Untuk Liburan 2024{" "}
                  </h2>
                  <p className="desc md:text-sm line-clamp-2">
                    Puaskan selera Anda dengan hidangan lezat di restoran
                    Dairyland Riverside. Pilihan menu yang beragam, mulai dari
                    hidangan lokal khas Indonesia hingga hidangan internasional
                    yang menggoda selera. Tak hanya itu, Anda juga dapat
                    berbelanja berbagai produk menarik di toko-toko yang
                    tersedia di Dairyland Riverside. Temukan souvenir, camilan,
                    dan pernak-pernik lucu untuk dibawa pulang sebagai
                    oleh-oleh.
                  </p>
                  <div className="btn-news text-primary underline flex md:mt-3 hover:underline">
                    <Link className="md:text-sm" to={"/berita"}>
                      Lihat artikel
                    </Link>
                  </div>
                </div>
              </article>
              <div className="btn-news flex text-end justify-end ">
                <Button
                  as={Link}
                  type="primary"
                  // icon={TicketIcon}
                  iconStyle="w-3 fill-primary"
                  text="BERITA LAINNYA"
                  target={"/berita"}
                  style="text-primary bg-transparent border border-primary hover:bg-primary hover:text-white transition ease-in-out delay-150 "
                />
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default News;
