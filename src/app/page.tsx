import {
  Benefits,
  Faq,
  HeroSection,
  LinksToPages,
  Testimonials,
} from "@/components";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Benefits />
      <Testimonials />
      <Faq />
      <LinksToPages />
    </div>
  );
}
