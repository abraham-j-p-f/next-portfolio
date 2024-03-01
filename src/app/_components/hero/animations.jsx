"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";

export default function Animations() {
  useGSAP(() => {
    let tl = gsap.timeline({ delay: 0 });
    gsap.registerPlugin(TextPlugin);

    tl.from(".oracion-1", wordOptions)
      .from(".oracion-2", wordOptions)
      .from(".oracion-3", wordOptions);

    tl.from(".work-card", {
      opacity: 0,
      y: 100,
      ease: "power4.out",
      duration: 2,
      stagger: 0.2,
    });
  });
}
