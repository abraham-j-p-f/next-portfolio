"use client";

import SeparatedWord from "@/components/separatedWord";
import useIntersectionObserver from "@/components/useIntersectionObserver";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useInView } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const experiences = [
  {
    year: "2023",
    experience: [
      {
        title: "diseñador UI/UX freelance",
        description:
          "Durante este último año me he enfocado en el desarrollo de diseños dedicados a múltiples clientes. Desde diseños webs hasta diseños de interfaces de sistemas.",
      },
    ],
  },
  {
    year: "2021 - 2022",
    experience: [
      {
        title: "Desarrollador web INTT",
        description:
          "Durante este periodo aprendí verdaderamente a trabajar en un equipo más grande de desarrollo. Cumplí tareas como el diseño de interfaces, solucionar problemas relacionados con fallos en código de sistemas ya existentes, control de calidad y finalmente desarrollo de nuevos sistemas",
      },
      {
        title: "Desarrollador web Cancillería",
        description:
          "Durante este periodo cumplí un cargo de analista de sistemas, durante este periodo desarrollé por completo un sistema de gestión de usuarios relacionado con un proceso interno de dicho organismo.",
      },
    ],
  },
];

function ExperienceBlock({ year, experiences }) {
  return (
    <ul className="experience flex flex-col 2xl:gap-12 gap-6">
      <div className="relative">
        <h2 className="font-grandstander font-bold sm:text-2xl text-xl leading-none">
          {year}
        </h2>
        <div className="w-4 aspect-square sm:block hidden bg-portfolio-blue-light absolute xl:-left-[calc(80px)] -left-[calc(48px)] top-0"></div>
      </div>
      <div className="flex flex-col sm:gap-10 gap-5">
        {experiences.map((experience, index) => {
          return (
            <li
              className="font-roboto flex flex-col sm:gap-6 gap-3"
              key={index}
            >
              <h3 className="sm:text-xl text-base font-bold capitalize leading-none">
                {experience.title}
              </h3>
              <p className="sm:text-base text-sm leading-normal">
                {experience.description}
              </p>
            </li>
          );
        })}
      </div>
    </ul>
  );
}

export default function Experience() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".work",
        start: "top 30%",
      },
    });
    tl.from(".experience-title", {
      y: 100,
      opacity: 0,
      ease: "power4.out",
      duration: 0.4,
      stagger: 0.03,
    });
    tl.from(".line", {
      scaleY: 0,
      ease: "power4.out",
      duration: 0.8,
    });
    tl.from(".experience", {
      y: 100,
      opacity: 0,
      ease: "power4.out",
      duration: 0.8,
      stagger: 0.3,
    });
    tl.from(".experience-image", {
      y: 100,
      opacity: 0,
      ease: "power4.out",
      duration: 0.8,
      stagger: 0.3,
    });
  });

  return (
    <section className="w-full flex justify-center lg:py-16 py-8">
      <div className="work container flex lg:flex-row flex-col-reverse xl:gap-16 gap-8 md:px-8 px-4">
        <div className="flex flex-1 flex-wrap gap-8">
          <div className="w-full">
            <div className="grid grid-cols-2 sm:gap-8 gap-4 w-full">
              <div className="experience-image col-span-2 aspect-video lg:border-[8px] md:border-[6px] border-4 border-portfolio-black"></div>
              <div className="experience-image xl:col-span-1 lg:col-span-2 col-span-1 xl:aspect-square lg:aspect-video aspect-square lg:border-[8px] md:border-[6px] border-4 border-portfolio-black"></div>
              <div className="experience-image xl:col-span-1 lg:col-span-2 col-span-1 xl:aspect-square lg:aspect-video aspect-square lg:border-[8px] md:border-[6px] border-4 border-portfolio-black"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="font-grandstander font-bold 2xl:text-4xl md:text-3xl text-2xl lg:hidden">
            <div className="flex 2xl:gap-x-8 xl:gap-x-6 md:gap-x-4 gap-x-3 flex-wrap">
              <SeparatedWord
                sentence={"Mi trayectoria"}
                className={"experience-title"}
              />
            </div>
          </h1>
          <div className="flex xl:gap-16 gap-8">
            <div className="w-4 h-full 2xl:pt-40 lg:pt-28 pt-0 pb-24 sm:flex hidden justify-center">
              <div className="line w-1 bg-portfolio-blue-light h-full"></div>
            </div>
            <div className="flex flex-col 2xl:gap-16 gap-8 2xl:w-[620px] xl:w-[500px] lg:w-[400px] w-full">
              <h1 className="font-grandstander font-bold 2xl:text-4xl md:text-3xl text-2xl lg:block hidden">
                <div className="flex 2xl:gap-x-8 xl:gap-x-6 md:gap-x-4 gap-x-3 flex-wrap">
                  <SeparatedWord
                    sentence={"Mi trayectoria"}
                    className={"experience-title"}
                  />
                </div>
              </h1>
              <div className="flex flex-col sm:gap-16 gap-8">
                {experiences.map(({ year, experience }, index) => {
                  return (
                    <ExperienceBlock
                      year={year}
                      experiences={experience}
                      key={index}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
