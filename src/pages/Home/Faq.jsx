import React from "react";
import Header from "../../Components/Header";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";

const Faq = () => {
  const questions = [
    {
      title: "Bagaimana cara membeli tiket diaryland / minimania?",
      desc: "Tiket masuk Dairyland bisa kamu dapatkan melalui sistem pemesanan di website kami atau kamu juga bisa langsung mengunjungi Dairyland / Minimania yaaa!!",
    },
    {
      title: "Apa saja opsi pembayaran untuk pembelian tiket?",
      desc: "Tiket masuk Dairyland bisa kamu dapatkan melalui sistem pemesanan di website kami atau kamu juga bisa langsung mengunjungi Dairyland / Minimania yaaa!!",
    },
    {
      title: "bagaimana cara menggunakan tiket digital?",
      desc: "Tiket masuk Dairyland bisa kamu dapatkan melalui sistem pemesanan di website kami atau kamu juga bisa langsung mengunjungi Dairyland / Minimania yaaa!!",
    },
    {
      title: "Apa yang harus disiapkan ketika ingin ke diaryland?",
      desc: "Tiket masuk Dairyland bisa kamu dapatkan melalui sistem pemesanan di website kami atau kamu juga bisa langsung mengunjungi Dairyland / Minimania yaaa!!",
    },
  ];
  return (
    <>
      <section className="faq-section mt-16 md:mt-40">
        <div className="w-11/12 md:w-10/12 mx-auto">
          <Header
            title="FAQ"
            caption="Temukan informasi penting dan jawaban atas pertanyaan yang sering diajukan di sini. Dapatkan penjelasan lengkap mengenai jam operasional, harga tiket, fasilitas, dan berbagai tips untuk memaksimalkan kunjungan Anda."
          />
          <section className="question-list mt-4 md:mt-10">
            <div className="grid grid-cols-12 gap-x-3 gap-y-4 md:gap-x-8">
              {questions.map((question, questionIdx) => {
                return (
                  <>
                    {" "}
                    <div
                      key={questionIdx}
                      className="ask-item col-span-6 md:col-span-3"
                    >
                      <div className="rounded-md md:rounded-xl bg-abu-muda py-4 h-full px-2 md:py-6 md:px-3 bg-[url('assets/bg_faq.png')] bg-contain bg-bottom bg-no-repeat">
                        <h4 className="line-clamp-3 font-bold text-sm mb-2">
                          {question.title}
                        </h4>
                        <p className="text-sm line-clamp-2 mb-9">
                          {question.desc}
                        </p>

                        <Link
                          to={"/pertanyaan"}
                          className="text-sm underline hover:text-primary hover:no-underline"
                        >
                          LIHAT DETAIL
                        </Link>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="btn flex justify-center mt-5">
              <Button
                as={Link}
                type="secondary"
                text="LIHAT PERTANYAAN LAINNYA"
                target={"/pertanyaan"}
                style="text-primary hover:underline bg-transparent border border-primary hover:border-tertiary hover:text-primary [&>*:nth-child(odd)]:hover:stroke-primary [&>*:nth-child(odd)]:transition [&>*:nth-child(odd)]:delay-150 hover:bg-tertiary transition ease-in-out delay-150"
              />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Faq;
