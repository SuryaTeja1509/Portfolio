"use client"

import { Button } from "@/components/ui/button"
import { Download, ExternalLink, ArrowRight, Database, Binary, LineChart, Network, Brain, Server, Search, Cpu, Share2, BrainCircuit } from "lucide-react"
import { motion } from "framer-motion"

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
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-5xl mx-auto z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          className="text-left space-y-6"
        >
          <div
            className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium mb-4"
          >
            Available for collabs & internships
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            Hi, I'm <br />
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              Surya Teja
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
            I transform raw data into actionable insights and build intelligent AI models.
            Aspiring Data Scientist & Analyst.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" onClick={scrollToProjects} className="rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-2 hover:bg-secondary/10">
              <Download className="mr-2 h-4 w-4" /> Resume
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="relative hidden lg:block"
        >
          {/* Visual representation of Data Science ecosystem */}
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl rotate-3 blur-sm" />
            <div className="absolute inset-0 bg-background border border-border rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center">
              {/* Background Grid of Icons */}
              <div className="grid grid-cols-3 gap-8 p-4 opacity-10 transform -rotate-12 scale-125">
                <Database className="w-16 h-16 text-foreground" />
                <Binary className="w-16 h-16 text-foreground" />
                <LineChart className="w-16 h-16 text-foreground" />
                <Network className="w-16 h-16 text-foreground" />
                <Brain className="w-16 h-16 text-foreground" />
                <Server className="w-16 h-16 text-foreground" />
                <Search className="w-16 h-16 text-foreground" />
                <Cpu className="w-16 h-16 text-foreground" />
                <Share2 className="w-16 h-16 text-foreground" />
              </div>

              {/* Central Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-background/60 backdrop-blur-sm">
                <div className="p-4 bg-primary/10 rounded-full mb-4 ring-2 ring-primary/20">
                  <BrainCircuit className="w-16 h-16 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Turning data into decisions</h3>
                <p className="text-muted-foreground mt-2">through analytics and AI.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
