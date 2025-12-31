import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Mail, Phone, Github, Linkedin } from "lucide-react"

export function ContactSection() {
  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Hyderabad, Telangana",
      href: null,
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "suryateja6220@gmail.com",
      href: "mailto:suryateja6220@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "83090772265",
      href: "tel:+9183090772265",
    },
  ]

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/SuryaTeja1509",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/g-surya-teja/",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Let's connect and discuss opportunities, collaborations, or just have a chat about technology!
          </p>
        </div>

        <Card className="bg-gradient-to-br from-white via-cyan-50/30 to-purple-50/20 border-slate-200/60 shadow-lg">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg text-primary">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-card-foreground hover:text-primary transition-colors duration-200"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-card-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-6">Connect With Me</h3>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start gap-3 bg-white/60 hover:bg-white/80 backdrop-blur-sm"
                      asChild
                    >
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.icon}
                        {link.label}
                      </a>
                    </Button>
                  ))}
                </div>
                <div className="mt-6">
                  <Button className="w-full" asChild>
                    <a href="mailto:suryateja6220@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Email
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
