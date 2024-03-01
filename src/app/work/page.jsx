import ProjectCard, { projects } from "@/components/workCards";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Footer from "../_components/footer";

export const metadata = {
  title: "Mis trabajos",
};

export default function Work() {
  return (
    <>
      <section className="w-full min-h-screen flex justify-center">
        <div className="container flex flex-col lg:py-16 py-8 lg:px-8 px-5 lg:gap-16 gap-8">
          <div className="flex md:gap-8 gap-4">
            <Link href={"/"} className="w-12 h-12 flex-none">
              <FontAwesomeIcon icon={faArrowLeft} className="w-full h-full" />
            </Link>
            <h1 className="font-grandstander font-bold 2xl:text-4xl md:text-3xl text-2xl capitalize leading-tight text-pretty">
              Todos mis trabajos
            </h1>
          </div>
          <div className="grid grid-cols-12 lg:gap-8 gap-4">
            {projects.map(
              (
                { category, title, link, svg, classContainer, classImage },
                i
              ) => {
                return (
                  <div
                    className="2xl:col-span-3 lg:col-span-4 min-[580px]:col-span-6 col-span-12 aspect-[4/3]"
                    key={i}
                  >
                    <ProjectCard
                      category={category}
                      title={title}
                      link={link}
                      className={""}
                      svg={svg}
                      classContainer={classContainer}
                      classImage={classImage}
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
