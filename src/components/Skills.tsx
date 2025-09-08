import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Calculator, 
  TrendingUp, 
  FileText, 
  BarChart3, 
  Users, 
  Target,
  MessageSquare,
  Lightbulb,
  Clock,
  Handshake
} from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: 'Financial Accounting', level: 95, icon: Calculator },
    { name: 'Taxation & GST', level: 90, icon: FileText },
    { name: 'Tally ERP 9', level: 88, icon: BarChart3 },
    { name: 'Advanced Excel', level: 92, icon: TrendingUp },
    { name: 'Financial Analysis', level: 87, icon: BarChart3 },
    { name: 'Auditing', level: 85, icon: FileText },
  ];

  const softSkills = [
    { name: 'Leadership', level: 90, icon: Users },
    { name: 'Communication', level: 88, icon: MessageSquare },
    { name: 'Problem Solving', level: 92, icon: Target },
    { name: 'Team Collaboration', level: 89, icon: Handshake },
    { name: 'Time Management', level: 87, icon: Clock },
    { name: 'Innovation', level: 85, icon: Lightbulb },
  ];

  const tools = [
    'Tally ERP 9',
    'Microsoft Excel',
    'QuickBooks',
    'SAP (Basic)',
    'Google Analytics',
    'Power BI',
    'Zoho Books',
    'MS Office Suite',
  ];

  const certificationBadges = [
    'Tally Certified',
    'GST Expert',
    'Excel Advanced',
    'Financial Modeling',
    'Business Analytics',
    'Digital Marketing',
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-6">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive skill set combining technical expertise with 
              strong leadership and analytical capabilities.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Technical Skills */}
            <Card className="shadow-corporate border-0 bg-surface-elevated animate-slide-in-right">
              <CardContent className="p-8">
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-primary/10 rounded-full mr-4">
                    <Calculator className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-primary">
                    Technical Skills
                  </h3>
                </div>

                <div className="space-y-6">
                  {technicalSkills.map((skill, index) => (
                    <div key={index} className="group">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <skill.icon className="w-5 h-5 text-teal" />
                          <span className="font-medium text-foreground">{skill.name}</span>
                        </div>
                        <span className="text-sm font-semibold text-primary">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-3 bg-muted"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Soft Skills */}
            <Card className="shadow-corporate border-0 bg-surface-elevated animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8">
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-teal/10 rounded-full mr-4">
                    <Users className="w-6 h-6 text-teal" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-primary">
                    Leadership & Soft Skills
                  </h3>
                </div>

                <div className="space-y-6">
                  {softSkills.map((skill, index) => (
                    <div key={index} className="group">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <skill.icon className="w-5 h-5 text-accent" />
                          <span className="font-medium text-foreground">{skill.name}</span>
                        </div>
                        <span className="text-sm font-semibold text-primary">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-3 bg-muted"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tools & Technologies */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="shadow-lg border-0 bg-surface-elevated animate-fade-in">
              <CardContent className="p-8">
                <h3 className="font-heading text-2xl font-semibold text-primary mb-6">
                  Tools & Software
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {tools.map((tool, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="font-medium text-sm">{tool}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-surface-elevated animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8">
                <h3 className="font-heading text-2xl font-semibold text-primary mb-6">
                  Certifications
                </h3>
                <div className="flex flex-wrap gap-3">
                  {certificationBadges.map((cert, index) => (
                    <Badge
                      key={index}
                      className="px-4 py-2 bg-accent/20 text-accent hover:bg-accent/30 border-0 font-medium"
                    >
                      {cert}
                    </Badge>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-accent rounded-lg">
                  <h4 className="font-heading text-xl font-semibold text-accent-foreground mb-4">
                    Continuous Learning
                  </h4>
                  <p className="text-accent-foreground/90">
                    Committed to staying updated with the latest trends in finance, 
                    technology, and business management through ongoing professional development.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skill Categories */}
          <Card className="shadow-corporate border-0 bg-primary/5 animate-scale-in">
            <CardContent className="p-8">
              <h3 className="font-heading text-3xl font-semibold text-primary mb-8 text-center">
                Core Competencies
              </h3>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: 'Financial Management', items: ['Budget Planning', 'Cash Flow Analysis', 'Investment Evaluation', 'Risk Assessment'] },
                  { title: 'Compliance & Audit', items: ['GST Filing', 'Tax Planning', 'Statutory Compliance', 'Internal Auditing'] },
                  { title: 'Business Analysis', items: ['Market Research', 'Performance Metrics', 'Process Optimization', 'Strategic Planning'] },
                  { title: 'Technology Integration', items: ['ERP Implementation', 'Data Analytics', 'Process Automation', 'Digital Transformation'] }
                ].map((category, index) => (
                  <div
                    key={index}
                    className="p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <h4 className="font-heading text-lg font-semibold text-primary mb-4">
                      {category.title}
                    </h4>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-teal rounded-full" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
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

export default Skills;