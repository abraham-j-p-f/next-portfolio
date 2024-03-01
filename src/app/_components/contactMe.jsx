"use client";

import SeparatedWord from "@/components/separatedWord";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ContactMe() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-me",
        start: "top 30%",
      },
    });
    tl.from(".contact-me-title", {
      y: 100,
      opacity: 0,
      ease: "power4.out",
      duration: 0.4,
      stagger: 0.03,
    });
  });
  return (
    <section className="contact-me flex justify-center lg:py-16 py-8">
      <div className="container flex lg:flex-row flex-col lg:gap-16 gap-8 md:px-8 px-4">
        <h2 className="font-grandstander font-bold 2xl:text-4xl md:text-3xl text-2xl leading-tight lg:hidden block">
          <div className="flex 2xl:gap-x-8 xl:gap-x-6 md:gap-x-4 gap-x-3 flex-wrap">
            <SeparatedWord
              sentence={"A un correo de distancia"}
              className={"contact-me-title"}
            />
          </div>
        </h2>
        <div className="w-full flex lg:flex-row flex-col-reverse xl:gap-16 gap-8">
          <div className="flex flex-col lg:gap-16 gap-0 2xl:w-[800px] xl:w-[600px] lg:w-[500px] w-full">
            <div className="">
              <h2 className="font-grandstander font-bold 2xl:text-4xl md:text-3xl text-2xl leading-tight hidden lg:block">
                <div className="flex 2xl:gap-x-8 xl:gap-x-6 md:gap-x-4 gap-x-3 flex-wrap">
                  <SeparatedWord
                    sentence={"A un correo de distancia"}
                    className={"contact-me-title"}
                  />
                </div>
              </h2>
            </div>
            <div className="md:text-base text-sm">
              <form className="grid grid-cols-12 lg:gap-8 gap-4">
                <input
                  type="text"
                  name=""
                  id=""
                  className="border-portfolio-black placeholder-shown: md:text-base text-sm border-4 bg-white md:px-6 px-4 py-4 col-span-12 md:placeholder:text-base placeholder:text-sm placeholder:capitalize placeholder:font-light rounded-none focus:border-portfolio-black/90 focus:outline-none"
                  placeholder="Tu correo"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  className="border-portfolio-black md:text-base text-sm border-4 bg-white md:px-6 px-4 py-4 lg:col-span-6 col-span-12 md:placeholder:text-base placeholder:text-sm placeholder:capitalize placeholder:font-light rounded-none focus:border-portfolio-black/90 focus:outline-none"
                  placeholder="Tu nombre"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  className="border-portfolio-black md:text-base text-sm border-4 bg-white md:px-6 px-4 py-4 lg:col-span-6 col-span-12 md:placeholder:text-base placeholder:text-sm placeholder:capitalize placeholder:font-light rounded-none focus:border-portfolio-black/90 focus:outline-none"
                  placeholder="Asunto del correo"
                />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="border-portfolio-black min-h-80 md:text-base text-sm border-4 bg-white md:px-6 px-4 py-4 col-span-12 md:placeholder:text-base placeholder:text-sm placeholder:capitalize placeholder:font-light rounded-none focus:border-portfolio-black/90 focus:outline-none"
                  placeholder="Cuerpo del correo"
                ></textarea>
                <div className="col-span-12 flex lg:flex-row flex-col-reverse lg:gap-8 gap-4">
                  <button className="px-6 py-4 bg-portfolio-blue-lighest1 text-portfolio-blue-light flex lg:flex-row flex-row-reverse items-center lg:justify-start justify-center font-bold capitalize gap-4">
                    <div className="w-6 h-6 flex-none">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="w-full h-full"
                      />
                    </div>
                    <span>Copiar correo</span>
                  </button>
                  <button className="flex-1 px-6 py-4 bg-portfolio-blue-light hover:bg-portfolio-blue-dark transition-all text-white flex lg:justify-end justify-center items-center font-bold capitalize gap-4">
                    <span>enviar</span>
                    <div className="w-6 h-6 flex-none">
                      <FontAwesomeIcon
                        icon={faPaperPlane}
                        className="w-full h-full"
                      />
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex lg:flex-1 lg:h-auto h-96 flex-auto p-4 bg-white border-portfolio-black lg:border-[8px] md:border-[6px] border-4"></div>
        </div>
      </div>
    </section>
  );
}
