import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send,
  MessageCircle,
  Clock,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shubham.gupta@email.com',
      href: 'mailto:shubham.gupta@email.com',
      color: 'text-primary'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 96545 21125',
      href: 'tel:+91 96545 21125',
      color: 'text-teal'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'New Delhi, India',
      href: '#',
      color: 'text-accent'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/shubhamgupta',
      href: 'https://linkedin.com/in/shubhamgupta',
      color: 'text-primary'
    }
  ];

  const quickTopics = [
    'Job Opportunities',
    'Freelance Projects',
    'Business Consultation',
    'Academic Collaboration',
    'Financial Analysis',
    'Tax Advisory'
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-6">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to discuss opportunities, collaborate on projects, or explore how 
              I can contribute to your organization's success. Let's connect!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <Card className="shadow-corporate border-0 bg-surface-elevated animate-slide-in-right">
              <CardContent className="p-8">
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-primary/10 rounded-full mr-4">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-primary">
                    Send Message
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="border-border/30 focus:border-primary"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="border-border/30 focus:border-primary"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground font-medium">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="border-border/30 focus:border-primary"
                      placeholder="What would you like to discuss?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="border-border/30 focus:border-primary resize-none"
                      placeholder="Tell me more about your requirements, project details, or any questions you have..."
                    />
                  </div>

                  {/* Quick Topics */}
                  <div>
                    <Label className="text-foreground font-medium mb-3 block">
                      Quick Topics (Optional)
                    </Label>
                    <div className="flex flex-wrap gap-2">
                      {quickTopics.map((topic, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => setFormData(prev => ({ 
                            ...prev, 
                            subject: topic 
                          }))}
                          className="px-3 py-1 text-sm bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary rounded-full transition-colors border border-border/20"
                        >
                          {topic}
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 mr-2 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>I typically respond within 24 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="shadow-lg border-0 bg-surface-elevated hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-6">
                      <a
                        href={item.href}
                        target={item.label === 'LinkedIn' ? '_blank' : undefined}
                        rel={item.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                        className="flex items-center space-x-4 group-hover:scale-105 transition-transform"
                      >
                        <div className={`p-3 ${item.color.replace('text-', 'bg-')}/10 rounded-full`}>
                          <item.icon className={`w-6 h-6 ${item.color}`} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{item.label}</h4>
                          <p className="text-muted-foreground">{item.value}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Availability Card */}
              <Card className="shadow-lg border-0 bg-gradient-accent">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-accent-foreground mr-3" />
                    <h3 className="font-heading text-xl font-semibold text-accent-foreground">
                      Currently Available
                    </h3>
                  </div>
                  <p className="text-accent-foreground/90 mb-4">
                    Open to full-time opportunities, freelance projects, and consulting engagements 
                    in finance, accounting, and business analysis.
                  </p>
                  <div className="space-y-2 text-sm text-accent-foreground/80">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      <span>Available for immediate start</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      <span>Open to remote & on-site opportunities</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      <span>Flexible project timelines</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="shadow-lg border-0 bg-surface-elevated">
                <CardContent className="p-8">
                  <h3 className="font-heading text-xl font-semibold text-primary mb-6 text-center">
                    Connect on Social Media
                  </h3>
                  <div className="flex justify-center space-x-4">
                    <a
                      href="https://linkedin.com/in/shubhamgupta"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-all duration-200 hover:scale-110"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                      href="https://github.com/shubhamgupta"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-foreground/10 hover:bg-foreground/20 text-foreground rounded-lg transition-all duration-200 hover:scale-110"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a
                      href="mailto:shubham.gupta@email.com"
                      className="p-4 bg-accent/10 hover:bg-accent/20 text-accent rounded-lg transition-all duration-200 hover:scale-110"
                    >
                      <Mail className="w-6 h-6" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;