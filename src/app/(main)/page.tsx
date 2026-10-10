import { HeroSection } from "@/components/main/hero-section";
import { TrustedInstitutions } from "@/components/main/trusted-institutions";
import { HowItWorksSection } from "@/components/main/how-it-works-section";
import { FeaturesSection } from "@/components/main/features-section";

export default function Home() {
  return (
    <section>
      <HeroSection />
      <TrustedInstitutions />
      <FeaturesSection />
      <HowItWorksSection />
    </section>
  );
}
