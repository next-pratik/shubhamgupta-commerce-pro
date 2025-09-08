import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Commerce (B.Com)',
      institution: 'Delhi University',
      duration: '2020 - 2023',
      grade: 'First Class with Distinction',
      percentage: '85.2%',
      highlights: [
        'Major in Financial Accounting & Taxation',
        'Minor in Business Analytics',
        'Dean\'s List for Academic Excellence',
        'Commerce Society Executive Member'
      ]
    },
    {
      degree: 'Higher Secondary Certificate',
      institution: 'Central Board of Secondary Education',
      duration: '2018 - 2020',
      grade: 'Commerce Stream',
      percentage: '92.8%',
      highlights: [
        'Subjects: Accountancy, Business Studies, Economics',
        'School Topper in Business Studies',
        'Mathematics (Additional Subject)',
        'Student Council Member'
      ]
    }
  ];

  const certifications = [
    {
      name: 'Tally ERP 9 Certification',
      issuer: 'Tally Solutions',
      date: '2023',
      level: 'Advanced'
    },
    {
      name: 'GST Compliance & Returns',
      issuer: 'Institute of Chartered Accountants',
      date: '2023',
      level: 'Professional'
    },
    {
      name: 'Advanced Excel & Financial Modeling',
      issuer: 'Microsoft Certified',
      date: '2022',
      level: 'Expert'
    },
    {
      name: 'Financial Risk Management',
      issuer: 'Coursera - Wharton',
      date: '2022',
      level: 'Intermediate'
    },
    {
      name: 'Digital Marketing for Business',
      issuer: 'Google Analytics',
      date: '2021',
      level: 'Certified'
    }
  ];

  const coursework = [
    'Financial Accounting & Reporting',
    'Corporate Finance & Investment',
    'Taxation & Tax Planning',
    'Auditing & Assurance Services',
    'Cost & Management Accounting',
    'Business Law & Corporate Governance',
    'Banking & Financial Services',
    'International Business & Trade',
    'Business Statistics & Analytics',
    'Entrepreneurship & Innovation'
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-6">
              Education & Learning
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A strong academic foundation complemented by continuous learning 
              and professional development.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="mb-16">
            <h3 className="font-heading text-3xl font-semibold text-primary mb-8 text-center">
              Academic Journey
            </h3>
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <Card key={index} className="shadow-corporate border-0 bg-surface-elevated animate-slide-in-right" style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-full">
                          <GraduationCap className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-heading text-2xl font-semibold text-primary mb-2">
                            {edu.degree}
                          </h4>
                          <p className="text-lg text-muted-foreground mb-1">{edu.institution}</p>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{edu.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Award className="w-4 h-4" />
                              <span>{edu.grade}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 lg:mt-0">
                        <Badge variant="secondary" className="bg-accent/20 text-accent border-0 text-lg px-4 py-2">
                          {edu.percentage}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      {edu.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-teal rounded-full" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <h3 className="font-heading text-3xl font-semibold text-primary mb-8 text-center">
              Professional Certifications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="shadow-lg border-0 bg-surface-elevated hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="p-2 bg-teal/20 rounded-lg">
                        <Award className="w-5 h-5 text-teal" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-primary mb-1">{cert.name}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">
                            {cert.date}
                          </Badge>
                          <Badge 
                            className={`text-xs ${
                              cert.level === 'Expert' ? 'bg-accent/20 text-accent' :
                              cert.level === 'Advanced' ? 'bg-primary/20 text-primary' :
                              cert.level === 'Professional' ? 'bg-teal/20 text-teal' :
                              'bg-muted text-muted-foreground'
                            }`}
                          >
                            {cert.level}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Relevant Coursework */}
          <Card className="shadow-corporate border-0 bg-gradient-section animate-fade-in">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <BookOpen className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-heading text-3xl font-semibold text-primary mb-4">
                  Key Coursework
                </h3>
                <p className="text-muted-foreground">
                  Comprehensive study across core commerce and finance disciplines
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {coursework.map((course, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-card rounded-lg hover:shadow-md transition-all duration-200"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-muted-foreground font-medium">{course}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;