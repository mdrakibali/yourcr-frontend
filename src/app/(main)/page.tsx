import { HeroSection } from "@/components/main/hero-section";
import { TrustedInstitutions } from "@/components/main/trusted-institutions";
import { FeaturesSection } from "@/components/main/features-section";

export default function Home() {
  return (
    <section>
      <HeroSection />
      <TrustedInstitutions />
      <FeaturesSection />
    </section>
  );
}
