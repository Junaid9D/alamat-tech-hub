import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LucideIcon, ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  features: string[];
}

const ServiceCard = ({ title, description, icon: Icon, image, features }: ServiceCardProps) => {
  return (
    <Card className="group overflow-hidden glass-card border border-white/10 hover:border-primary/30 card-3d glow-effect">
      <div className="relative h-52 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{
            backgroundImage: `url(${image})`,
            filter: 'brightness(0.7) contrast(1.1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-60" />
        
        <div className="absolute top-4 right-4 glass-card p-3 rounded-2xl border border-white/20">
          <Icon className="h-6 w-6 text-primary drop-shadow-lg" />
        </div>
        
        {/* Floating particles */}
        <div className="absolute top-6 left-6 w-2 h-2 bg-primary/60 rounded-full animate-pulse" />
        <div className="absolute bottom-8 right-8 w-1 h-1 bg-accent/60 rounded-full animate-ping delay-300" />
      </div>
      
      <CardHeader className="relative z-10">
        <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-all duration-300 flex items-center justify-between">
          {title}
          <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </CardTitle>
        <CardDescription className="text-muted-foreground/80 leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6 relative z-10">
        <div className="grid grid-cols-1 gap-3">
          {features.map((feature, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="justify-start text-xs glass-card border border-white/10 hover:border-primary/30 transition-all duration-300 py-2"
            >
              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
              {feature}
            </Badge>
          ))}
        </div>
        
        <Button 
          className="w-full bg-gradient-primary hover:shadow-glow card-3d text-primary-foreground border-0 py-3 font-medium"
          variant="default"
        >
          Explore Service
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </Card>
  );
};

export default ServiceCard;