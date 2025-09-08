import { Button } from '@/components/ui/button';
import { FileText, Mail, ArrowDown, Linkedin, Github } from 'lucide-react';
import shubhamHeadshot from '@/assets/shubham-headshot.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-white/10" />
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto">
          
          {/* Content */}
          <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0 lg:pr-12">
            <div className="animate-fade-in">
              <h1 className="font-heading text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
                Shubham
                <span className="block text-accent">Gupta</span>
              </h1>
              
              <div className="text-xl lg:text-2xl text-primary-foreground/90 mb-4 font-medium">
                Commerce Graduate | Future Finance Leader
              </div>
              
              <div className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0">
                Passionate about transforming businesses through strategic financial analysis, 
                corporate governance, and data-driven decision making.
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button
                  size="lg"
                  onClick={() => scrollToSection('resume')}
                  className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg font-semibold"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  View Resume
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get in Touch
                </Button>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4 justify-center lg:justify-start">
                <a
                  href="https://linkedin.com/in/shubhamgupta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground rounded-lg transition-all duration-200 hover:scale-105"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/shubhamgupta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground rounded-lg transition-all duration-200 hover:scale-105"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-scale-in">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-primary-foreground/20">
                <img
                  src={shubhamHeadshot}
                  alt="Shubham Gupta - Professional Headshot"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating accent decoration */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full blur-xl opacity-60 animate-float" />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-teal rounded-full blur-lg opacity-40 animate-float" style={{ animationDelay: '1.5s' }} />
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="p-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;