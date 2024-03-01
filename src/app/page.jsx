import Hero from "./_components/hero";
import Experience from "./_components/experience";
import HowIwork from "./_components/howWork";
import Tools from "./_components/tools";
import AboutMe from "./_components/aboutMe";
import ContactMe from "./_components/contactMe";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-center bg-portfolio-white text-portfolio-black selection:bg-portfolio-blue-dark selection:text-portfolio-white lg:gap-16 gap-8">
      <Hero />
      <Experience />
      <div className="w-full flex flex-col">
        <HowIwork />
        <Tools />
      </div>
      <AboutMe />
      <ContactMe />
      <Footer />
    </main>
  );
}
