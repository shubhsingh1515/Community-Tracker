import { AnimatedHero } from "@/components/animated-hero"
import { TrustedBySection } from "@/components/trusted-by-section"
import { SeamlessDevicesSection } from "@/components/seamless-devices-section"
import { ProjectManagementSection } from "@/components/project-management-section"
import { FinancialManagementSection } from "@/components/financial-management-section"
import { FeaturesGridSection } from "@/components/features-grid-section"
import { TestimonialsAnimated } from "@/components/testimonials-animated"
import { PricingSectionDreelio } from "@/components/pricing-section-dreelio"
import { BlogSection } from "@/components/blog-section"
import { CommunitySection } from "@/components/community-section"
import { CTASection } from "@/components/cta-section"
import { FooterSection } from "@/components/footer-section"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <AnimatedHero />
      <TrustedBySection />
      <SeamlessDevicesSection />
      <ProjectManagementSection />
      <FinancialManagementSection />
      <FeaturesGridSection />
      <TestimonialsAnimated />
      <PricingSectionDreelio />
      <BlogSection />
      <CommunitySection />
      <CTASection />
      <FooterSection />
    </div>
  )
}
