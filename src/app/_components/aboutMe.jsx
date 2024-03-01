"use client";

import SeparatedWord from "@/components/separatedWord";
import {
  faBrain,
  faCircle,
  faFaceSmile,
  faQuestion,
  faShield,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Values({ children, icon = faCircle, className = "" }) {
  return (
    <div className={`flex gap-4 xl:col-span-1 col-span-2 ${className}`}>
      <div className="w-16 h-16 flex-none flex justify-center">
        <FontAwesomeIcon
          icon={icon}
          className="h-full *:fill-portfolio-white *:stroke-portfolio-black *:stroke-[20px] overflow-visible *:hover:stroke-[24px] *:transition-all"
        />
      </div>
      <p>{children}</p>
    </div>
  );
}

export default function AboutMe() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-me",
        start: "top 30%",
      },
    });
    tl.from(".about-me-title", {
      y: 100,
      opacity: 0,
      ease: "power4.out",
      duration: 0.4,
      stagger: 0.03,
    });
    tl.from(".about-me-description", {
      y: 100,
      opacity: 0,
      ease: "power4.out",
      duration: 0.8,
    });
    tl.from(".image-container-01", {
      x: "-100%",
      ease: "power4.out",
      duration: 0.8,
    });
    tl.from(".image-container-02", {
      x: "100%",
      ease: "power4.out",
      duration: 0.8,
    });
    tl.from(".value", {
      y: 100,
      opacity: 0,
      ease: "power4.out",
      duration: 0.8,
      stagger: 0.5,
    });
  });
  return (
    <section className="about-me flex justify-center w-full lg:py-16 py-8 flex-col lg:gap-16 gap-8">
      <div className="flex w-full lg:flex-row flex-col-reverse lg:gap-16 gap-8">
        <div className="image-container-01 flex flex-1 bg-white lg:border-0 md:border-[6px] border-4 border-spacing-4 lg:border-y-[8px] lg:border-r-[8px] border-portfolio-black lg:w-[calc(50%)] 2xl:pl-[calc((100%-1536px+64px)/2)] lg:px-0 xl:pl-[calc((100vw-1280px+64px)/2)] lg:pl-[calc((100vw-1024px+64px)/2)] px-4 lg:mx-0 md:mx-[calc((100vw-768px+64px)/2)] sm:mx-[calc((100vw-640px+32px)/2)] mx-4">
          <div className="w-full lg:aspect-auto min-[380px]:aspect-video aspect-square"></div>
        </div>
        <div className="flex flex-col lg:gap-16 gap-8 lg:w-[calc(50%)] w-full 2xl:pr-[calc((100%-1536px+64px)/2)] lg:px-0 xl:pr-[calc((100vw-1280px+64px)/2)] lg:pr-[calc((100vw-1024px+64px)/2)] md:px-[calc((100vw-768px+64px)/2)] sm:px-[calc((100vw-640px+32px)/2)] px-4">
          <h2 className="font-grandstander font-bold 2xl:text-4xl md:text-3xl text-2xl">
            <div className="flex-col 2xl:gap-x-8 xl:gap-x-6 md:gap-x-4 gap-x-3 flex-wrap">
              <SeparatedWord
                sentence={"Conóceme"}
                className={"about-me-title"}
              />
              <div className="flex 2xl:gap-x-8 xl:gap-x-6 md:gap-x-4 gap-x-3 flex-wrap">
                <SeparatedWord
                  sentence={"un poco más"}
                  className="about-me-title text-portfolio-blue-light"
                />
              </div>
            </div>
          </h2>
          <p className="about-me-description lg:text-xl sm:text-base text-sm leading-normal">
            Soy Abraham Pérez, <b>Desarrollador Web</b> autodidacta enfocado en
            el maravilloso mundo del <b>Diseño UI/UX.</b> Actualmente ubicado en
            Caracas Venezuela mi principal objetivo es trabajar en la creación
            de proyectos{" "}
            <strong className="font-grandstander uppercase font-bold">
              impresionantes
            </strong>
            .
          </p>
        </div>
      </div>
      <div className="flex w-full lg:flex-row flex-col lg:gap-16 gap-8">
        <div className="sm:text-base text-sm grid grid-cols-2 lg:gap-8 gap-4 lg:w-[calc(50%+100px)] 2xl:pl-[calc((100%-1536px+64px)/2)] lg:px-0 xl:pl-[calc((100vw-1280px+64px)/2)] lg:pl-[calc((100vw-1024px+64px)/2)] lg:mx-0 md:mx-[calc((100vw-768px+64px)/2)] sm:mx-[calc((100vw-640px+32px)/2)] mx-4">
          <Values icon={faShield} className="value">
            <b>Resiliente:</b> Soy una persona que se vuelve más resistente y
            determinada mientras más adverso sea la situación o el reto.
          </Values>
          <Values icon={faBrain} className="value">
            <b>Creativo:</b> Mientras más demandante y complejo sea mi tarea más
            se estimula mi cerebro en encontrar soluciones{" "}
            <strong className="font-grandstander uppercase font-bold">
              CREATIVAS
            </strong>
          </Values>
          <Values icon={faQuestion} className="value">
            <b>Curioso:</b> Amo lo que hago y por esa misma razón siempre tengo
            el deseo de aprender cosas nuevas que me ayuden a mejorar
          </Values>
          <Values icon={faFaceSmile} className="value">
            <b>Empático:</b> Siempre me gusta tener múltiples puntos de vista
            ante un mismo tema o situación.
          </Values>
        </div>
        <div className="image-container-02 flex flex-1 bg-white lg:border-0 md:border-[6px] border-4 border-spacing-4 lg:border-y-[8px] lg:border-l-[8px] border-portfolio-black lg:w-[calc(50%-100px)] 2xl:pr-[calc((100%-1536px+64px)/2)] lg:px-0 xl:pr-[calc((100vw-1280px+64px)/2)] lg:pr-[calc((100vw-1024px+64px)/2)] px-4 lg:mx-0 md:mx-[calc((100vw-768px+64px)/2)] sm:mx-[calc((100vw-640px+32px)/2)] mx-4">
          <div className="w-full lg:aspect-auto min-[380px]:aspect-video aspect-square"></div>
        </div>
      </div>
    </section>
  );
}
