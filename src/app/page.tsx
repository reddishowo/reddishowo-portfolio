import 'aos/dist/aos.css';
import Navbar from "@/components/navbar";
import HomePage from "@/components/homepage";
import AboutSection from "@/components/aboutsection";
import ProjectsSection from "@/components/projectsection";
import ContactSection from "@/components/contactsection";
import ScrollToTop from '@/components/scrolltotop';
import TestimonialSection from '@/components/testimonialsection';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomePage />
      <AboutSection />
      <ProjectsSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}