import { projects } from "@/components/workCards";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowLeft,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Footer from "@/app/_components/footer";

export function generateStaticParams() {
  return projects.map((post) => ({
    slug: post.slug,
  }));
}

export default function Work({ params }) {
  const project = projects.find(({ link }) => params.slug == link);

  if (project) {
    return (
      <>
        <section className="w-full h-auto">
          <div className="flex relative lg:flex-row flex-col gap-8 w-full h-full 2xl:pl-[calc((100%-1536px+64px)/2)] xl:pl-[calc((100%-1280px+64px)/2)] lg:pl-[calc((100%-1024px+64px)/2)] lg:px-0 md:px-[calc((100%-768px+64px)/2)] sm:px-[calc((100%-640px+64px)/2)] px-5">
            <div className="2xl:w-[480px] lg:w-[450px] w-full h-full lg:pt-16 pt-8 flex flex-col">
              <div className="h-full max-h-full flex flex-col gap-16">
                <div className="flex md:gap-8 gap-4">
                  <Link href={"/work"} className="w-12 h-12 flex-none">
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      className="w-full h-full"
                    />
                  </Link>
                  <h1 className="font-grandstander font-bold 2xl:text-4xl md:text-3xl text-2xl capitalize leading-tight text-pretty">
                    {project.title}
                  </h1>
                </div>
                <div className="flex gap-12 flex-col pb-16 *:flex *:gap-6 *:flex-col">
                  <div>
                    <h2 className="font-grandstander font-bold text-xl capitalize leading-tight text-pretty">
                      Acerca del cliente
                    </h2>
                    <p className="text-base leading-normal">
                      {project.description}
                    </p>
                  </div>
                  <div>
                    <h2 className="font-grandstander font-bold text-xl capitalize leading-tight text-pretty">
                      Objetivo
                    </h2>
                    <p className="text-base leading-normal">
                      {project.objective}
                    </p>
                  </div>
                  <div>
                    <h2 className="font-grandstander font-bold text-xl capitalize leading-tight text-pretty">
                      Herramientas usadas
                    </h2>
                    <div className="flex flex-wrap gap-8 *:w-16 *:h-16">
                      {project.tools}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-1 lg:p-4 pl-0 p-0 lg:pb-4 pb-8 h-screen sticky top-0">
              <div className="w-full lg:max-h-full lg:h-auto h-full border-portfolio-black lg:border-[8px] md:border-[6px] border-4 relative">
                <iframe src={project.iframe} className="w-full h-full"></iframe>
                <div className="absolute bottom-8 right-8 flex gap-8">
                  <Link
                    className="bg-portfolio-white w-24 aspect-square border-portfolio-black md:border-[6px] border-4 flex justify-center items-center"
                    href="https://github.com/abraham-j-p-f"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faGithub} className="w-12 h-12" />
                  </Link>
                  <Link
                    className="bg-portfolio-white w-24 aspect-square border-portfolio-black md:border-[6px] border-4 flex justify-center items-center"
                    href={project.iframe}
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="w-12 h-12"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <section className="w-full h-screen flex justify-center items-center">
          <h1>Proyecto {params.slug} no encontrado</h1>
        </section>
        <Footer />
      </>
    );
  }
}
