"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, GraduationCap } from "lucide-react"
import { motion } from "framer-motion"

export function EducationSection() {
  const education = [
    {
      school: "Sri Indu College of Engineering & Technology",
      degree: "B.Tech in Artificial Intelligence & Data Science",
      year: "2023 - 2026",
    },
    {
      school: "TRR College of Engineering and Technology",
      degree: "Diploma",
      year: "2020 - 2023",
    },
    {
      school: "Sri Krishnaveni Talent School",
      degree: "High School",
      year: "2019 - 2020",
    },
  ]

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education Journey</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
          </motion.div>
        </div>

        <div className="relative border-l-2 border-primary/20 ml-3 md:ml-6 space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />

              <Card className="border-border/50 hover:shadow-md transition-all">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-primary">{edu.school}</h3>
                    <Badge variant="outline" className="w-fit flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {edu.year}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-medium text-foreground flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-muted-foreground" />
                    {edu.degree}
                  </CardTitle>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
