import { Card, CardContent } from "@/components/ui/card"

export function SkillsSection() {
  const skills = [
    {
      name: "Python",
      icon: "🐍",
      description: "Data analysis, machine learning, and automation",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Tableau",
      icon: "📊",
      description: "Data visualization and business intelligence",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Power BI",
      icon: "📈",
      description: "Interactive dashboards and reporting",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Excel",
      icon: "⚡",
      description: "Advanced data manipulation and analysis",
      color: "from-orange-500 to-yellow-500",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="group skill-card-hover card-gradient border-0 relative overflow-hidden">
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${skill.color}`}></div>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{skill.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
