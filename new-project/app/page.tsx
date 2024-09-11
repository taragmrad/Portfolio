import Image from "next/image";
import "./globals.css";
import { AboutPage } from "@/components/aboutPage";
import { NavBar } from "@/components/navBar";
import { Skills } from "@/components/skills";
import { FunFacts } from "@/components/funFacts";
import { Footer } from "@/components/footer";
import { Projects } from "@/components/projects";
export default function Home() {
  return (
      <div className="home-bg flex flex-col w-screen md:w-full h-full bg-cover bg-no-repeat mb-10" id="home">
        <NavBar/>
        <div className="flex flex-col items-center justify-center h-screen text-white px-4">
          <h1 className="studentName text-4xl md:text-5xl mb-6 font-bold text-center">Tara Ghasemi Monfared Rad</h1>
          <h1 className="text-white text-2xl md:text-3xl font-bold mb-3">Student</h1>
        </div>
        <AboutPage />
        <Skills/>
        <Projects/>
        <FunFacts/>
        <Footer/>
      </div>
  );
}
