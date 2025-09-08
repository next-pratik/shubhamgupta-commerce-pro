import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Eye, FileText, Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-6">
              Resume
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my academic achievements, skills, and professional experiences.
            </p>
          </div>

          {/* Resume Preview Card */}
          <Card className="shadow-corporate border-0 bg-surface-elevated mb-8 animate-scale-in">
            <CardContent className="p-8">
              {/* Resume Header */}
              <div className="text-center mb-8 pb-8 border-b border-border/20">
                <h1 className="font-heading text-4xl font-bold text-primary mb-4">
                  SHUBHAM GUPTA
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Commerce Graduate | Finance Professional | Business Analyst
                </p>
                
                <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <span>shubham.gupta@email.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <span>+91 9876543210</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>New Delhi, India</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Linkedin className="w-4 h-4 text-primary" />
                    <span>linkedin.com/in/shubhamgupta</span>
                  </div>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="mb-8">
                <h3 className="font-heading text-2xl font-semibold text-primary mb-4 flex items-center">
                  <div className="w-1 h-6 bg-accent mr-4" />
                  Professional Summary
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Dynamic Commerce graduate with comprehensive expertise in financial accounting, 
                  taxation, and business analysis. Proven track record of delivering data-driven 
                  insights and process improvements. Strong analytical mindset combined with 
                  leadership capabilities and proficiency in financial technologies. Seeking to 
                  leverage academic excellence and practical project experience to contribute to 
                  organizational growth in finance and accounting roles.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="mb-8">
                <h3 className="font-heading text-2xl font-semibold text-primary mb-4 flex items-center">
                  <div className="w-1 h-6 bg-accent mr-4" />
                  Key Highlights
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    '85.2% aggregate in B.Com with First Class Distinction',
                    'Tally ERP 9 Certified Professional',
                    'Advanced Excel & Financial Modeling Expertise',
                    'GST Compliance & Tax Planning Specialist',
                    'Leadership experience in academic projects',
                    '6+ Successful financial analysis projects completed'
                  ].map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-teal rounded-full mt-2" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Competencies */}
              <div className="mb-8">
                <h3 className="font-heading text-2xl font-semibold text-primary mb-4 flex items-center">
                  <div className="w-1 h-6 bg-accent mr-4" />
                  Core Competencies
                </h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    'Financial Accounting',
                    'Taxation & GST',
                    'Business Analysis',
                    'Audit & Assurance',
                    'Cost Management',
                    'Financial Modeling',
                    'Risk Assessment',
                    'Process Optimization',
                    'Team Leadership',
                    'Data Analytics',
                    'Compliance Management',
                    'Strategic Planning'
                  ].map((skill, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-center font-medium text-sm"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Proficiency */}
              <div>
                <h3 className="font-heading text-2xl font-semibold text-primary mb-4 flex items-center">
                  <div className="w-1 h-6 bg-accent mr-4" />
                  Technical Proficiency
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Accounting Software</h4>
                    <p className="text-muted-foreground">
                      Tally ERP 9 (Advanced), QuickBooks, SAP (Basic), Zoho Books
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Analytics Tools</h4>
                    <p className="text-muted-foreground">
                      Advanced Excel, Power BI, Google Analytics, Statistical Analysis
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume (PDF)
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary/10"
            >
              <Eye className="w-5 h-5 mr-2" />
              View Full Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-teal text-teal hover:bg-teal/10"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Mail className="w-5 h-5 mr-2" />
              Request References
            </Button>
          </div>

          {/* Additional Info */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <Card className="shadow-lg border-0 bg-surface-elevated">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <FileText className="w-6 h-6 text-primary mr-3" />
                  <h3 className="font-heading text-xl font-semibold text-primary">
                    Portfolio Samples
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Access detailed case studies, financial models, and project documentation.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  View Portfolio Samples
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-gradient-accent">
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-semibold text-accent-foreground mb-4">
                  Career Objective
                </h3>
                <p className="text-accent-foreground/90">
                  "To leverage my strong foundation in commerce and finance to contribute 
                  meaningfully to an organization's financial excellence while continuously 
                  growing as a finance professional in dynamic business environments."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;