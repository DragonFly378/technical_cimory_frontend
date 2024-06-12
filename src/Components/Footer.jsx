import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="footer-section mt-16 md:mt-40">
        <div className="w-11/12 md:w-10/12 mx-auto md:py-20">
          <section className="footer-content grid grid-cols-12">
            <div className="col-span-3">
              <h3 className="text-primary font-bold uppercase md:text-xl">
                Perusahaan
              </h3>
              <div className="links-footer flex flex-col md:gap-y-2 md:mt-5">
                <Link
                  to={"/about"}
                  className="link-item text-primary hover:underline"
                >
                  Tentang
                </Link>
                <Link
                  to={"/destinasi"}
                  className="link-item text-primary hover:underline"
                >
                  Taman Wisata{" "}
                </Link>
                <Link
                  to={"/destinasi"}
                  className="link-item text-primary hover:underline"
                >
                  Pesan Tiket{" "}
                </Link>
                <Link
                  to={"/berita"}
                  className="link-item text-primary hover:underline"
                >
                  Artikel
                </Link>
                <Link
                  to={"/kontak"}
                  className="link-item text-primary hover:underline"
                >
                  Kontak
                </Link>
              </div>
            </div>
            <div className="col-span-3">
              <h3 className="text-primary font-bold uppercase md:text-xl">
                Bantuan
              </h3>
              <div className="links-footer flex flex-col md:gap-y-2 md:mt-5">
                <Link
                  to={"/privacy"}
                  className="link-item text-primary hover:underline"
                >
                  Privacy Policy
                </Link>
                <Link
                  to={"/terms"}
                  className="link-item text-primary hover:underline"
                >
                  Terms & Condition{" "}
                </Link>
                <Link
                  to={"/disclaimer"}
                  className="link-item text-primary hover:underline"
                >
                  Disclaimer{" "}
                </Link>
                <Link
                  to={"/contact"}
                  className="link-item text-primary hover:underline"
                >
                  Customer Services
                </Link>
                <Link
                  to={"/pertanyaan"}
                  className="link-item text-primary hover:underline"
                >
                  Faq
                </Link>
              </div>
            </div>{" "}
            <div className="col-span-3">
              {" "}
              <h3 className="text-primary font-bold uppercase md:text-xl">
                Newsletter
              </h3>
              <div className="links-footer flex flex-col md:gap-y-2 md:mt-5">
                <p className="text-primary md:text-base">
                  Subscribe newsletter kami untuk informasi terbaru & terupdate
                  dari Dairyland, dan dapatkan Yoghurt Stick GRATIS!!
                </p>
                <form
                  className="flex rounded-sm overflow-clip"
                  id="email-newsletter"
                  action=""
                >
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Masukkan email anda"
                  />
                  <button
                    className="bg-primary text-white md:px-3 text-sm"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
        <div className="bg-primary py-4">
          <div className="copyright text-sm md:text-base text-center text-white">
            Copyright Dairyland All Right Reserved © 2024
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
