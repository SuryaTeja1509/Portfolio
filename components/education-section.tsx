import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Education</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>

        <Card className="bg-card border-border">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">
                  B.Tech in Artificial Intelligence and Data Science
                </h3>
                <h4 className="text-lg font-semibold text-primary mb-3">
                  Sri Indu College of Engineering and Technology
                </h4>
                <div className="flex items-center text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Aug 2023 – Aug 2026</span>
                </div>
                <p className="text-card-foreground leading-relaxed">
                  Currently pursuing a comprehensive degree program focused on artificial intelligence, machine
                  learning, data science, and their practical applications. Gaining hands-on experience with modern AI
                  technologies and data analysis techniques.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
