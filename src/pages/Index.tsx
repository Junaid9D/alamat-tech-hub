import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/ui/navigation";
import ServiceCard from "@/components/ui/service-card";
import { ArrowRight, Mail, Phone, MapPin, Smartphone, Globe, Bot, CheckCircle, Users, Award, Zap, Sparkles } from "lucide-react";
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
        {/* 3D Background Layers */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 transform-gpu"
            style={{ 
              backgroundImage: `url(${heroBg})`,
              transform: 'perspective(1000px) rotateX(2deg) scale(1.1)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background/40" />
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-12 rounded-3xl mx-auto max-w-5xl glow-effect">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent floating">
              Alamat Technologies
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Empowering businesses with cutting-edge IT solutions, innovative app development, 
              and intelligent AI agents that drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow card-3d text-primary-foreground border-0 px-8 py-4"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="glass-card border-primary/30 hover:border-primary/60 hover:bg-primary/10 card-3d px-8 py-4"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary/40 rounded-full blur-sm animate-bounce delay-300" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-accent/40 rounded-full blur-sm animate-bounce delay-700" />
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-primary/30 rounded-full blur-sm animate-bounce delay-500" />
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 glass-card" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="glass-card p-6 rounded-2xl card-3d group-hover:scale-110 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary mb-4 shadow-lg">
                    <stat.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground/80">{stat.label}</div>
                </div>
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
      <section id="about" className="py-20 relative">
        <div className="absolute inset-0 glass-card opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">About Alamat Technologies</h2>
              <p className="text-lg text-muted-foreground/90 mb-6 leading-relaxed">
                At Alamat Technologies, we are passionate about leveraging technology to solve complex business challenges. 
                Our team of experienced developers and AI specialists work closely with clients to deliver innovative solutions 
                that drive growth and efficiency.
              </p>
              <p className="text-lg text-muted-foreground/90 mb-8 leading-relaxed">
                From custom mobile applications to intelligent AI agents, we combine creativity with technical expertise 
                to build solutions that not only meet today's needs but are scalable for tomorrow's opportunities.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="glass-card p-4 rounded-xl border border-white/10 group hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-foreground font-medium">Expert Development Team</span>
                  </div>
                </div>
                <div className="glass-card p-4 rounded-xl border border-white/10 group hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-foreground font-medium">24/7 Support</span>
                  </div>
                </div>
                <div className="glass-card p-4 rounded-xl border border-white/10 group hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-foreground font-medium">Cutting-edge Technology</span>
                  </div>
                </div>
                <div className="glass-card p-4 rounded-xl border border-white/10 group hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-foreground font-medium">Custom Solutions</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="glass-card border border-white/10 card-3d glow-effect">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-foreground">Why Choose Us?</CardTitle>
                  <CardDescription className="text-muted-foreground/80">
                    We deliver excellence through innovation and dedication
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="w-3 h-3 rounded-full bg-gradient-primary mt-2 group-hover:scale-125 transition-transform" />
                    <div>
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">Innovation First</h4>
                      <p className="text-sm text-muted-foreground/80 leading-relaxed">We stay ahead of technology trends to deliver cutting-edge solutions.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <div className="w-3 h-3 rounded-full bg-gradient-primary mt-2 group-hover:scale-125 transition-transform" />
                    <div>
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">Client-Centric Approach</h4>
                      <p className="text-sm text-muted-foreground/80 leading-relaxed">Your success is our priority, and we tailor solutions to your unique needs.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <div className="w-3 h-3 rounded-full bg-gradient-primary mt-2 group-hover:scale-125 transition-transform" />
                    <div>
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">Quality Assurance</h4>
                      <p className="text-sm text-muted-foreground/80 leading-relaxed">Rigorous testing and quality control ensure reliable, scalable solutions.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Floating elements around the card */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/30 rounded-full blur-lg animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-accent/30 rounded-full blur-lg animate-pulse delay-1000" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Get In Touch</h2>
            <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your business with innovative technology solutions? Let's discuss your project.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="glass-card border border-white/10 card-3d glow-effect">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground">Contact Information</CardTitle>
                  <CardDescription className="text-muted-foreground/80">
                    Reach out to us through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4 group">
                    <div className="glass-card p-3 rounded-xl border border-white/10 group-hover:border-primary/30 transition-all duration-300">
                      <Mail className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground/80">info@alamattechnologies.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="glass-card p-3 rounded-xl border border-white/10 group-hover:border-primary/30 transition-all duration-300">
                      <Phone className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-muted-foreground/80">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="glass-card p-3 rounded-xl border border-white/10 group-hover:border-primary/30 transition-all duration-300">
                      <MapPin className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground/80">Serving clients worldwide</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="glass-card border border-white/10 card-3d glow-effect">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground">Start Your Project</CardTitle>
                  <CardDescription className="text-muted-foreground/80">
                    Ready to begin? Send us a message and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-primary hover:shadow-glow card-3d text-primary-foreground border-0 py-4 font-semibold"
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
        
        {/* Background decoration */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-24 h-24 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden">
        <div className="absolute inset-0 glass-card border-t border-white/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0 group">
              <div className="relative">
                <Sparkles className="h-6 w-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300" />
              </div>
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Alamat Technologies
              </div>
            </div>
            <div className="text-muted-foreground/80 text-center md:text-right">
              <p>&copy; {new Date().getFullYear()} Alamat Technologies. All rights reserved.</p>
              <p className="text-sm mt-2 text-muted-foreground/60">Innovating the future, one solution at a time.</p>
            </div>
          </div>
        </div>
        
        {/* Subtle background elements */}
        <div className="absolute bottom-0 left-1/4 w-16 h-16 bg-primary/5 rounded-full blur-2xl" />
        <div className="absolute top-0 right-1/3 w-12 h-12 bg-accent/5 rounded-full blur-2xl" />
      </footer>
    </div>
  );
};

export default Index;