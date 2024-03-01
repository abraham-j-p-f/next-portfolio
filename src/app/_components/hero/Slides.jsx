"use client";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import useWindowSize from "@/components/useWindowSize";
import ProjectCard, { projects } from "@/components/workCards";

const sizes = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  Bxl: 1536,
};

export default function Carrusel() {
  const { width, height } = useWindowSize();

  return (
    <Splide
      aria-label="My Favorite Images"
      hasTrack={false}
      className="w-full"
      options={{
        padding: {
          left:
            width > sizes.lg
              ? 64
              : width > sizes.md
              ? (width - sizes.md) / 2
              : width > sizes.sm
              ? (width - sizes.sm) / 2
              : 20,
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
        {projects.map(
          ({ category, title, link, svg, classContainer, classImage }, i) => {
            return (
              <SplideSlide
                className="work-card aspect-[4/3] lg:h-[312px] md:h-[280px] sm:h-[250px] h-[200px]"
                key={i}
              >
                <ProjectCard
                  category={category}
                  title={title}
                  link={link}
                  svg={svg}
                  classContainer={classContainer}
                  classImage={classImage}
                />
              </SplideSlide>
            );
          }
        )}
      </SplideTrack>
    </Splide>
  );
}
