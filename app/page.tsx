import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { EducationSection } from "@/components/education-section"
import { ProjectsSection } from "@/components/projects-section"
import { AwardsSection } from "@/components/awards-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <div className="gradient-bg-1">
        <AboutSection />
      </div>
      <div className="gradient-bg-2">
        <SkillsSection />
      </div>
      <div className="gradient-bg-3">
        <EducationSection />
      </div>
      <div className="gradient-bg-4">
        <ProjectsSection />
      </div>
      <div className="gradient-bg-5">
        <AwardsSection />
      </div>
      <div className="gradient-bg-1">
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}
