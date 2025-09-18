import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Trophy } from "lucide-react"

export function AwardsSection() {
  const awards = [
    {
      title: "Received funding for Smart Helmet Project",
      description: "Successfully secured funding for innovative safety technology project",
      icon: <Award className="h-6 w-6" />,
    },
    {
      title: "Member of Student Tribe",
      description: "Active member of the largest student network, fostering connections and learning",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Leadership roles in college technical events",
      description: "Led and organized various technical events and competitions at college level",
      icon: <Trophy className="h-6 w-6" />,
    },
  ]

  return (
    <section id="awards" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Awards & Accomplishments</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Recognition and achievements that highlight my dedication and impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300 flex-shrink-0">
                    {award.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2 leading-tight">{award.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{award.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
