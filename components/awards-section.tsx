"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Trophy } from "lucide-react"
import { motion } from "framer-motion"

export function AwardsSection() {
  const awards = [
    {
      title: "Funding for Smart Helmet",
      description: "Secured research funding for developing an innovative IoT-based safety helmet.",
      icon: <Award className="h-6 w-6" />,
      color: "text-yellow-500 bg-yellow-500/10",
    },
    {
      title: "Student Tribe Member",
      description: "Active contributor to the largest student community, fostering peer learning and networking.",
      icon: <Users className="h-6 w-6" />,
      color: "text-blue-500 bg-blue-500/10",
    },
    {
      title: "Technical Lead",
      description: "Organized and led multiple successful college-level technical hackathons and workshops.",
      icon: <Trophy className="h-6 w-6" />,
      color: "text-purple-500 bg-purple-500/10",
    },
  ]

  return (
    <section id="awards" className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4">Achievements</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recognition of impact and commitment to excellence.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all border-border/50 group">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className={`p-4 rounded-full ${award.color} group-hover:scale-110 transition-transform duration-300`}>
                      {award.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{award.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{award.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
