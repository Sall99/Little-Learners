import {
  Benefits,
  Faq,
  Footer,
  HeroSection,
  LinksToPages,
  Testimonials,
} from "@/components";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Benefits />
      <Testimonials />
      <Faq />
      <LinksToPages />
      <Footer />
    </>
  );
}
