import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">About Me</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>

        <Card className="bg-card border-border">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-48 h-48 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <span className="text-6xl text-white">ST</span>
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <p className="text-lg leading-relaxed text-card-foreground">
                  An individual with a keen interest in Software programs, possessing good interpersonal and analytical
                  skills, who wishes to use technical knowledge catering to the needs of the company.
                </p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Location</h3>
                    <p className="text-muted-foreground">Hyderabad, Telangana</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Focus Areas</h3>
                    <p className="text-muted-foreground">AI, Data Science, Analytics</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
