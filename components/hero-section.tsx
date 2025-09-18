"use client"

import { Button } from "@/components/ui/button"
import { Download, ExternalLink } from "lucide-react"

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 hero-gradient relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance text-white">
            Hi, I'm <span className="text-cyan-300">Surya Teja</span> 👋
          </h1>
          <p className="text-xl sm:text-2xl text-cyan-100 text-balance max-w-3xl mx-auto">
            B.Tech in Artificial Intelligence & Data Science | Data Analyst | AI Enthusiast
          </p>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Passionate about leveraging data and AI to solve real-world problems. Currently pursuing my degree while
            building innovative projects and gaining hands-on experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button size="lg" className="w-full sm:w-auto bg-cyan-600 hover:bg-cyan-700 text-white border-0">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-transparent border-cyan-300 text-cyan-300 hover:bg-cyan-300 hover:text-slate-900"
              onClick={scrollToProjects}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              View Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
