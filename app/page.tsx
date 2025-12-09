import { AnimatedHero } from "@/components/animated-hero";
import { TrustedBySection } from "@/components/trusted-by-section";
import { SeamlessDevicesSection } from "@/components/seamless-devices-section";
import { ProjectManagementSection } from "@/components/project-management-section";
import { FinancialManagementSection } from "@/components/financial-management-section";
import { FeaturesGridSection } from "@/components/features-grid-section";
import { TestimonialsAnimated } from "@/components/testimonials-animated";
import { PricingSectionDreelio } from "@/components/pricing-section-dreelio";
import { BlogSection } from "@/components/blog-section";
import { CommunitySection } from "@/components/community-section";
import { CTASection } from "@/components/cta-section";
import { FooterSection } from "@/components/footer-section";
import StackSlider from "@/components/StackSlider";
import { Header } from "@/components/header";
import HorizontalScrollSection from "@/components/horizontal-scroll-section";
import { FAQSection } from "@/components/faq-section";



export default function LandingPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        <AnimatedHero />
        {/* <TrustedBySection /> */}
        <StackSlider />
        {/* <SeamlessDevicesSection /> */}

        <HorizontalScrollSection />
        <ProjectManagementSection />
        <FinancialManagementSection />
        <FeaturesGridSection />
        <TestimonialsAnimated />
        <PricingSectionDreelio />
        <BlogSection />
        <CommunitySection />
        <FAQSection />
        <CTASection />
        <FooterSection />
      </div>
    </>
  );
}
