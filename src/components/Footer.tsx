import { Heart, Linkedin, Github, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/shubhamgupta',
      label: 'LinkedIn'
    },
    {
      icon: Github,
      href: 'https://github.com/shubhamgupta',
      label: 'GitHub'
    },
    {
      icon: Mail,
      href: 'mailto:shubham.gupta@email.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="relative bg-gradient-primary text-primary-foreground">
      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full p-3 shadow-lg"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>

      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="font-heading text-2xl font-bold mb-4">
              Shubham Gupta
            </h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Commerce and accounting passionate about finance, business strategy, and 
              transforming organizations through analytical excellence.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-3 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg transition-all duration-200 hover:scale-110"
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-heading text-lg font-semibold mb-6">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 hover:translate-x-1 transform"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="font-heading text-lg font-semibold mb-6">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-primary-foreground/60 text-sm mb-1">Email</p>
                <a
                  href="mailto:shubham.gupta@email.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  shubham.gupta@email.com
                </a>
              </div>
              <div>
                <p className="text-primary-foreground/60 text-sm mb-1">Phone</p>
                <a
                  href="tel:+91 96545 21125"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  +91 96545 21125
                </a>
              </div>
              <div>
                <p className="text-primary-foreground/60 text-sm mb-1">Location</p>
                <p className="text-primary-foreground/80">New Delhi, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-primary-foreground/80">
              <span>© {currentYear} Shubham Gupta. Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>and dedication.</span>
            </div>
            
            <div className="text-primary-foreground/60 text-sm">
              <span className="block md:inline">Driven by Knowledge.</span>
              <span className="block md:inline md:ml-2">Inspired by Growth.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;