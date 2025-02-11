import Experiences from "@/components/Experiences";
import TechStack from "@/components/TechStack";
import Nav from "@/components/Nav";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";

export default async function Home() {
  return (
    <main className="m-auto max-w-3xl flex flex-col gap-16 p-4 md:p-0">
      <Nav />
      <AboutMe />
      <TechStack />
      <Experiences />
      <Footer />
    </main>
  );
}