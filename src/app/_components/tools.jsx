"use client";
import SeparatedWord from "@/components/separatedWord";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Tools() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".tools",
        start: "top 30%",
      },
    });
    tl.from(".tools-title", {
      y: 100,
      opacity: 0,
      ease: "power4.out",
      duration: 0.4,
      stagger: 0.03,
    });
  });

  return (
    <section className="bg-portfolio-black flex justify-center tools">
      <div className="container md:px-8 px-4 flex lg:flex-row flex-col lg:gap-8 gap-0">
        <div className=" lg:w-[60%] lg:py-16 py-8 text-portfolio-white font-grandstander font-bold 2xl:text-4xl md:text-3xl text-2xl">
          <h2 className="text-center lg:text-left">
            <div className="flex 2xl:gap-x-8 xl:gap-x-6 md:gap-x-4 gap-x-3 flex-wrap">
              <SeparatedWord
                sentence={"Con las herramientas adecuadas todo es posible"}
                className={"tools-title"}
              />
            </div>
          </h2>
        </div>
        <div className="py-4 flex flex-1">
          <div className="w-full lg:aspect-auto min-[425px]:aspect-video aspect-square"></div>
        </div>
      </div>
    </section>
  );
}
