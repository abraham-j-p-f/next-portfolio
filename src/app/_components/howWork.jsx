function WorkCardItemList({ children }) {
  return (
    <div className="flex gap-4">
      <div className="w-6 h-6 bg-slate-200 flex-none"></div>
      <li className="text-pretty	">{children}</li>
    </div>
  );
}

function WorkCard({ children, title }) {
  return (
    <div className="flex flex-col md:p-8 p-4 md:gap-8 gap-4 lg:border-[8px] md:border-[6px] border-4 border-portfolio-black lg:w-[464px] w-full">
      <div className="lg:border-[8px] md:border-[6px] border-4 border-portfolio-black h-[200px]"></div>
      <div className="flex flex-col md:gap-8 gap-4">
        <div className="sm:text-xl text-base font-bold capitalize">
          <h3>{title}</h3>
        </div>
        <div>
          <ul className="flex flex-col sm:gap-4 gap-2 sm:text-base text-sm leading-tight">
            {children}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function HowIWork() {
  return (
    <section className="w-full flex flex-col lg:gap-16 gap-8 justify-center items-center ">
      <div className="w-full">
        <div className="flex w-full lg:flex-row flex-col lg:gap-16 gap-8">
          <div className="flex flex-col lg:gap-16 md:gap-8 gap-4 lg:w-[calc(50vw+128px)] w-full 2xl:pl-[calc((100%-1536px+64px)/2)] lg:px-0 xl:pl-[calc((100vw-1280px+64px)/2)] lg:pl-[calc((100vw-1024px+64px)/2)] md:px-[calc((100vw-768px+64px)/2)] sm:px-[calc((100vw-640px+32px)/2)] px-4">
            <div className="w-full relative lg:pt-16 pt-0">
              <h2 className="font-grandstander font-bold 2xl:text-4xl md:text-3xl text-2xl capitalize">
                mi manera de trabajar
              </h2>
            </div>
            <div>
              <p className="lg:text-xl sm:text-base text-sm leading-normal">
                Mi visión a la hora de asumir cualquier proyecto de desarrollo
                web es ponerme en los zapatos del cliente, es decir, intento
                siempre ponerme en su lugar y entender lo que el quiere y
                combinarlo con lo que realmente necesita.
              </p>
            </div>
          </div>
          <div className="bg-white lg:border-0 md:border-[6px] border-4 border-spacing-4 lg:border-y-[8px] lg:border-l-[8px] border-portfolio-black lg:w-[calc(50vw-128px)] 2xl:pr-[calc((100%-1536px+64px)/2)] lg:px-0 xl:pr-[calc((100vw-1280px+64px)/2)] lg:pr-[calc((100vw-1024px+64px)/2)] px-4 lg:mx-0 md:mx-[calc((100vw-768px+64px)/2)] sm:mx-[calc((100vw-640px+32px)/2)] mx-4">
            <div className="h-96 w-full relative"></div>
          </div>
        </div>
      </div>
      <div className="container flex lg:flex-row flex-col-reverse lg:gap-16 gap-8 px-4 md:px-8">
        <div className="flex lg:flex-1 flex-none lg:aspect-auto md:aspect-video sm:aspect-square aspect-[3/4] bg-gradient-to-t from-portfolio-blue-light to-portfolio-blue-lighest lg:border-[8px] md:border-[6px] border-4 border-portfolio-black"></div>
        <div className="flex 2xl:flex-row flex-col 2xl:pb-16 pb-0 gap-8">
          <div>
            <WorkCard title={"Para trabajo en equipo"}>
              <WorkCardItemList>
                Lleno de iniciativa para desarrollar ideas
              </WorkCardItemList>
              <WorkCardItemList>
                Comunicación efectiva y respetuosa
              </WorkCardItemList>
              <WorkCardItemList>
                Capaz de aprender nuevas tecnologías
              </WorkCardItemList>
              <WorkCardItemList>
                Proactivo en optimizar y mejorar trabajo ya existente
              </WorkCardItemList>
            </WorkCard>
          </div>
          <div>
            <WorkCard title={"Para proyectos freelance"}>
              <WorkCardItemList>
                Captación de cada una de las necesidades del proyecto
              </WorkCardItemList>
              <WorkCardItemList>
                Exploración de multiples ideas en cada proyecto
              </WorkCardItemList>
              <WorkCardItemList>
                Capaz de aprender nuevas tecnologías
              </WorkCardItemList>
              <WorkCardItemList>
                Trabajo personalizado y dedicado a cada cliente
              </WorkCardItemList>
            </WorkCard>
          </div>
        </div>
      </div>
    </section>
  );
}
