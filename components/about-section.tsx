"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import profilePic from "../lib/profile.jpeg"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            About Me
          </motion.h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative max-w-xs mx-auto">
              <div className="absolute inset-0 bg-primary/20 translate-x-4 translate-y-4 rounded-2xl -z-10"></div>
              <div className="aspect-square bg-muted rounded-2xl overflow-hidden relative border border-border">
                <Image
                  src={profilePic}
                  alt="Profile picture"
                  fill
                  className="object-cover"
                  sizes="(max-width: 600px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              I am a motivated <span className="font-semibold text-foreground">B.Tech student in Artificial Intelligence and Data Science</span> with a strong passion for uncovering insights from data and building intelligent solutions.
            </p>
            <p>
              My journey involves hands-on experience with tools like <span className="text-foreground">Power BI, SQL, Python, and Tableau</span>. I enjoy turning complex datasets into actionable visualizations.
            </p>
            <p>
              Beyond data, I explore <span className="text-foreground">Machine Learning</span> and <span className="text-foreground">Big Data Analytics</span>, always eager to learn new technologies and apply them to solve real-world problems.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
