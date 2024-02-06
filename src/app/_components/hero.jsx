"use client";

import Link from "next/link";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import "@splidejs/react-splide/css";

const projects = [
  {
    category: "diseño web",
    title: "universidad páramo",
  },
  {
    category: "diseño de interfáz",
    title: "kick",
  },
  {
    category: "diseño web",
    title: "NetReady",
  },
];

const sizes = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  Bxl: 1536,
};

function ProjectCard({ category = "default", title = "default" }) {
  return (
    <SplideSlide className="work-card">
      <Link
        className=" aspect-[4/3] lg:h-[312px] md:h-[280px] sm:h-[250px] h-[200px] lg:border-[8px] md:border-[6px] border-4 border-portfolio-black bg-portfolio-white pl-6 pt-6 flex"
        href={"#"}
        target="_blank"
      >
        <div className="h-full w-full flex">
          <div className="flex flex-col sm:gap-8 gap-4 w-1/2 capitalize">
            <h3 className="sm:text-base text-sm font-light leading-none">
              {category}
            </h3>
            <h2 className="sm:text-xl text-base font-grandstander font-bold leading-none">
              {title}
            </h2>
          </div>
          <div className="h-full w-1/2 bg-slate-200"></div>
        </div>
      </Link>
    </SplideSlide>
  );
}

function HeroTitle({ width }) {
  return (
    <div className="px-6 pt-1 pb-0 border-portfolio-black lg:border-[8px] md:border-[6px] border-4 flex flex-none bg-portfolio-white gap-8 items-center justify-evenly">
      <div className="">
        <h1 className="font-grandstander 2xl:text-5xl xl:text-4xl md:text-3xl text-2xl font-bold leading-[1.2] capitalize whitespace-nowrap sm:text-left text-center">
          Hola, soy{" "}
          <span className="text-portfolio-blue-light">
            {width > 420 ? "Abraham" : "Abe"}
          </span>{" "}
          <br />Y te presento mi <br />
          <span className="text-portfolio-blue-light uppercase">
            Portafolio
          </span>
        </h1>
      </div>
      <div className="bg-slate-200 md:w-48 w-40 aspect-square sm:block hidden"></div>
    </div>
  );
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

export default function Hero() {
  const { width, height } = useWindowSize();

  useGSAP(() => {
    gsap.from(".work-card", {
      opacity: 0,
      ease: "power4.out",
      duration: 5,
      stagger: 0.5,
    });
  });

  return (
    <section
      className={`w-full lg:pb-0 md:pb-8 pb-5 ${
        width / height > 1 && width > 1024 ? "h-screen" : ""
      }`}
    >
      <div className="w-full h-full flex lg:flex-row flex-col lg:gap-0 sm:gap-8 gap-5">
        <div className="flex justify-center lg:pt-0 sm:pt-8 pt-5 lg:px-0 sm:px-8 px-5 2xl:w-[calc(50vw-96px)] xl:w-[calc(50vw-64px)] lg:w-1/2 w-full">
          <div className="flex flex-col lg:gap-0 sm:gap-8 gap-5 w-full container">
            <div className="lg:hidden block">
              <HeroTitle width={width} />
            </div>
            <div className="border-portfolio-black lg:border-[8px] md:border-[6px] lg:border-l-0 lg:border-t-0 border-4 w-full h-full flex lg:aspect-auto sm:aspect-[4/3] aspect-square lg:max-h-max max-h-[600px]"></div>
          </div>
        </div>
        <div className="flex 2xl:w-[calc(50vw+96px)] xl:w-[calc(50vw+64px)] lg:w-1/2 w-full flex-col lg:pt-8 lg:gap-16 sm:gap-8 gap-5">
          <div className="2xl:mr-[calc((100vw-1472px)/2)] xl:mr-[calc((100vw-1216px)/2)] lg:mr-[calc((100vw-960px)/2)] lg:block hidden">
            <div className="w-full flex justify-end">
              <HeroTitle width={width} />
            </div>
          </div>
          <div className="2xl:mr-[calc((100vw-1472px)/2)] xl:mr-[calc((100vw-1216px)/2)] lg:mr-[calc((100vw-960px)/2)] lg:text-xl text-base">
            <div className="flex lg:justify-end justify-center lg:px-0 sm:px-8 px-5">
              <div className="font-roboto text-nowrap flex lg:flex-row flex-col flex-none justify-end leading-none lg:w-auto w-full">
                <div className="border-4 border-portfolio-black p-3 leading-none bg-portfolio-white capitalize flex items-center lg:justify-start justify-center">
                  <span>
                    {width > 409 && "Diseñador web"} apasionado por crear
                  </span>
                </div>
                <Link
                  href={"#"}
                  className="bg-portfolio-blue-light font-bold p-4 hover:bg-portfolio-blue-dark transition-all duration-150 text-portfolio-white capitalize flex items-center lg:justify-start justify-center"
                >
                  <span>productos increíbles</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full flex">
            <div className="flex w-full">
              <Splide
                aria-label="My Favorite Images"
                hasTrack={false}
                className="w-full"
                options={{
                  padding: {
                    left: width > sizes.lg ? 64 : width > sizes.sm ? 32 : 20,
                    right: width > sizes.sm ? 32 : 20,
                  },
                  gap: width > sizes.sm ? 32 : 16,
                  arrows: false,
                  pagination: false,
                  drag: "free",
                  autoWidth: true,
                  wheel: true,
                  releaseWheel: true,
                  keyboard: true,
                }}
              >
                <SplideTrack className="h-full w-full overflow-visible">
                  {projects.map(({ category, title }, i) => {
                    return (
                      <ProjectCard category={category} title={title} key={i} />
                    );
                  })}
                </SplideTrack>
              </Splide>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
