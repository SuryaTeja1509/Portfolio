import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Camera, Shield, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Insurance Claims and Risks Analysis Dashboard",
      description: "Customizable Power BI template that provides interactive insights into insurance claims, risk levels, policy performance, customer demographics, and financial metrics to support data-driven decision-making.",
      tech: ["Power BI", "Excel"],
      icon: <Eye className="h-6 w-6" />,
      github: "https://github.com/SuryaTeja1509/Insurance_Claims_And_Risks_Analysis_Dashboard",
    },
    {
      title: "LED Distance Indicator",
      description: "Ultrasonic sensor with LEDs for accurate distance measurement.",
      tech: ["Arduino", "Sensors"],
      icon: <Camera className="h-6 w-6" />,
    },
    {
      title: "Smart Helmet",
      description: "Helmet with drowsy detection, alcohol detection, anti-sleep alarm, and vehicle safety.",
      tech: ["IoT", "Sensors", "Safety"],
      icon: <Shield className="h-6 w-6" />,
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Projects</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of my technical projects and innovations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-slate-200/60 hover:border-primary/20"
            >
              <CardHeader>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      {project.icon}
                    </div>
                    <CardTitle className="text-lg text-card-foreground">{project.title}</CardTitle>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-100 rounded-lg text-slate-700 hover:bg-slate-800 hover:text-white transition-colors duration-300"
                    title="View on GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs bg-cyan-100/80 text-cyan-800 hover:bg-cyan-200/80"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
