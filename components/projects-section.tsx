"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Camera, Shield, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function ProjectsSection() {
  const projects = [
    {
      title: "Insurance Claims & Risks Dashboard",
      description: "Interactive Power BI dashboard for analyzing insurance claims, risk assessment, and policy performance insights.",
      tech: ["Power BI", "Excel", "DAX"],
      icon: <Eye className="h-5 w-5" />,
      github: "https://github.com/SuryaTeja1509/Insurance_Claims_And_Risks_Analysis_Dashboard",
      color: "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300"
    },
    {
      title: "LED Distance Indicator",
      description: "Arduino-based distance measurement system utilizing ultrasonic sensors and LED arrays for visual feedback.",
      tech: ["Arduino", "C++", "Electronics"],
      icon: <Camera className="h-5 w-5" />,
      color: "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300"
    },
    {
      title: "Smart Safety Helmet",
      description: "IoT-enabled helmet featuring drowsiness detection, alcohol sensing, and emergency alert systems for rider safety.",
      tech: ["IoT", "Python", "Sensors"],
      icon: <Shield className="h-5 w-5" />,
      color: "bg-orange-50 text-orange-700 dark:bg-orange-900/20 dark:text-orange-300"
    },
  ]

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-foreground">Featured Projects</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing practical applications of data analysis and embedded systems.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="flex flex-col h-full hover:shadow-xl transition-all duration-300 overflow-hidden group border-border/50">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div className={`p-3 rounded-xl ${project.color} mb-3`}>
                      {project.icon}
                    </div>
                    {project.github && (
                      <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="font-normal text-xs px-2.5 py-0.5">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      View Details <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
