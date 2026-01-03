"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Code2, Database, BarChart3, PieChart, FileSpreadsheet, Sigma } from "lucide-react"

export function SkillsSection() {
  const skills = [
    {
      name: "Python",
      icon: <Code2 className="h-12 w-12" />,
      description: "Data analysis, ML & Automation",
      color: "from-blue-500 to-yellow-400",
    },
    {
      name: "SQL",
      icon: <Database className="h-12 w-12" />,
      description: "Database management & Querying",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Power BI",
      icon: <BarChart3 className="h-12 w-12" />,
      description: "Interactive dashboards & Analytics",
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "Tableau",
      icon: <PieChart className="h-12 w-12" />,
      description: "Visual analytics & Business Intelligence",
      color: "from-blue-600 to-indigo-600",
    },
    {
      name: "Excel",
      icon: <FileSpreadsheet className="h-12 w-12" />,
      description: "Data manipulation & Spreadsheets",
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "Statistics",
      icon: <Sigma className="h-12 w-12" />,
      description: "Data interpretation & Analysis",
      color: "from-red-500 to-pink-500",
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4">Technical Proficiency</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolset for data-driven solutions and intelligent systems.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={item}>
              <Card className="group h-full hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden text-center">
                <div className={`h-1.5 w-full bg-gradient-to-r ${skill.color}`} />
                <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-sm text-foreground/80 group-hover:text-primary">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
