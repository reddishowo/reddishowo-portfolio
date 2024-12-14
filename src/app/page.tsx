import Navbar from "@/components/navbar";
import HomePage from "@/components/homepage";
import AboutSection from "@/components/aboutsection";
import ProjectsSection from "@/components/projectsection";
import ContactSection from "@/components/contactsection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomePage />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}