import 'aos/dist/aos.css';
import AOS from 'aos';
import Navbar from "@/components/navbar";
import HomePage from "@/components/homepage";
import AboutSection from "@/components/aboutsection";
import ProjectsSection from "@/components/projectsection";
import ContactSection from "@/components/contactsection";
import ScrollToTop from '@/components/scrolltotop';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomePage />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <ScrollToTop />
    </main>
  );
}