import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/ui/navigation";
import ServiceCard from "@/components/ui/service-card";
import { ArrowRight, Mail, Phone, MapPin, Smartphone, Globe, Bot, CheckCircle, Users, Award, Zap } from "lucide-react";
import appDevImage from "@/assets/app-development.jpg";
import webDevImage from "@/assets/web-development.jpg";
import aiAgentsImage from "@/assets/ai-agents.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const services = [
    {
      title: "App Development",
      description: "Custom mobile applications built with cutting-edge technologies for iOS and Android platforms.",
      icon: Smartphone,
      image: appDevImage,
      features: [
        "Native & Cross-platform apps",
        "React Native & Flutter",
        "App Store optimization",
        "Maintenance & support"
      ]
    },
    {
      title: "Website Development",
      description: "Professional websites and web applications designed to drive your business forward.",
      icon: Globe,
      image: webDevImage,
      features: [
        "Responsive web design",
        "E-commerce solutions",
        "CMS integration",
        "Performance optimization"
      ]
    },
    {
      title: "AI Agents Deployment",
      description: "Intelligent automation solutions that transform your business processes and customer interactions.",
      icon: Bot,
      image: aiAgentsImage,
      features: [
        "Custom AI chatbots",
        "Process automation",
        "Machine learning models",
        "Integration & deployment"
      ]
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", icon: CheckCircle },
    { number: "30+", label: "Happy Clients", icon: Users },
    { number: "5+", label: "Years Experience", icon: Award },
    { number: "24/7", label: "Support Available", icon: Zap }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/80" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-pulse">
            Alamat Technologies
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Empowering businesses with cutting-edge IT solutions, innovative app development, 
            and intelligent AI agents that drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-primary-foreground"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-primary/20 mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive IT solutions tailored to meet your business needs and drive digital transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">About Alamat Technologies</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Alamat Technologies, we are passionate about leveraging technology to solve complex business challenges. 
                Our team of experienced developers and AI specialists work closely with clients to deliver innovative solutions 
                that drive growth and efficiency.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                From custom mobile applications to intelligent AI agents, we combine creativity with technical expertise 
                to build solutions that not only meet today's needs but are scalable for tomorrow's opportunities.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Expert Development Team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">24/7 Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Cutting-edge Technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Custom Solutions</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="bg-gradient-card border border-border shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-foreground">Why Choose Us?</CardTitle>
                  <CardDescription>
                    We deliver excellence through innovation and dedication
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div>
                      <h4 className="font-medium text-foreground">Innovation First</h4>
                      <p className="text-sm text-muted-foreground">We stay ahead of technology trends to deliver cutting-edge solutions.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div>
                      <h4 className="font-medium text-foreground">Client-Centric Approach</h4>
                      <p className="text-sm text-muted-foreground">Your success is our priority, and we tailor solutions to your unique needs.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div>
                      <h4 className="font-medium text-foreground">Quality Assurance</h4>
                      <p className="text-sm text-muted-foreground">Rigorous testing and quality control ensure reliable, scalable solutions.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your business with innovative technology solutions? Let's discuss your project.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="bg-gradient-card border border-border">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground">Contact Information</CardTitle>
                  <CardDescription>
                    Reach out to us through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">info@alamattechnologies.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">Serving clients worldwide</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="bg-gradient-card border border-border">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground">Start Your Project</CardTitle>
                  <CardDescription>
                    Ready to begin? Send us a message and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 text-primary-foreground"
                    onClick={() => window.location.href = 'mailto:info@alamattechnologies.com'}
                  >
                    Send us an Email
                    <Mail className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/50 backdrop-blur-sm border-t border-border py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4 md:mb-0">
              Alamat Technologies
            </div>
            <div className="text-muted-foreground text-center md:text-right">
              <p>&copy; {new Date().getFullYear()} Alamat Technologies. All rights reserved.</p>
              <p className="text-sm mt-1">Innovating the future, one solution at a time.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;