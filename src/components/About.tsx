import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, TrendingUp, Target, Users, Award, Coffee } from 'lucide-react';

const About = () => {
  const qualities = [
    { icon: TrendingUp, label: 'Analytical Thinking', color: 'text-teal' },
    { icon: Target, label: 'Problem Solving', color: 'text-primary' },
    { icon: Users, label: 'Leadership', color: 'text-accent' },
    { icon: Award, label: 'Excellence Driven', color: 'text-teal' },
  ];

  const interests = [
    'Financial Markets Analysis',
    'Corporate Strategy',
    'Business Economics',
    'Taxation & Compliance',
    'Entrepreneurship',
    'Investment Research',
  ];

  const funFacts = [
    { icon: BookOpen, text: 'Reads 2 finance books monthly' },
    { icon: TrendingUp, text: 'Tracks stock market daily' },
    { icon: Coffee, text: 'Strategic chess player' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A dedicated commerce graduate with a passion for financial excellence 
              and strategic business transformation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Main Content */}
            <div className="animate-slide-in-right">
              <Card className="shadow-corporate border-0 bg-surface-elevated">
                <CardContent className="p-8">
                  <h3 className="font-heading text-2xl font-semibold text-primary mb-6">
                    My Story
                  </h3>
                  
                  <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                    <p>
                      As a commerce student with a deep-rooted passion for finance and business strategy, 
                      I bring a unique blend of analytical rigor and creative problem-solving to every challenge.
                    </p>
                    
                    <p>
                      My academic journey has equipped me with comprehensive knowledge in accounting, 
                      taxation, financial management, and corporate governance. I thrive on transforming 
                      complex financial data into actionable insights that drive business growth.
                    </p>
                    
                    <p>
                      With a keen eye for detail and a strategic mindset, I'm committed to excellence 
                      in every project I undertake, whether it's financial analysis, business planning, 
                      or corporate compliance.
                    </p>
                  </div>

                  {/* Core Qualities */}
                  <div className="mt-8">
                    <h4 className="font-heading text-xl font-semibold text-primary mb-6">
                      Core Qualities
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {qualities.map((quality, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                        >
                          <quality.icon className={`w-5 h-5 ${quality.color}`} />
                          <span className="font-medium text-sm">{quality.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Interests & Fun Facts */}
            <div className="space-y-8 animate-fade-in">
              {/* Passions */}
              <Card className="shadow-lg border-0 bg-surface-elevated">
                <CardContent className="p-8">
                  <h3 className="font-heading text-2xl font-semibold text-primary mb-6">
                    My Passions
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {interests.map((interest, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="px-4 py-2 text-sm bg-primary/10 text-primary hover:bg-primary/20 border-0"
                      >
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Fun Facts */}
              <Card className="shadow-lg border-0 bg-surface-elevated">
                <CardContent className="p-8">
                  <h3 className="font-heading text-2xl font-semibold text-primary mb-6">
                    Fun Facts
                  </h3>
                  <div className="space-y-4">
                    {funFacts.map((fact, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-4 p-4 bg-muted/30 rounded-lg"
                      >
                        <div className="p-2 bg-accent/20 rounded-full">
                          <fact.icon className="w-5 h-5 text-accent" />
                        </div>
                        <span className="text-muted-foreground">{fact.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Vision Statement */}
              <Card className="shadow-lg border-0 bg-gradient-accent">
                <CardContent className="p-8 text-center">
                  <h3 className="font-heading text-2xl font-semibold text-accent-foreground mb-4">
                    My Vision
                  </h3>
                  <p className="text-accent-foreground/90 text-lg leading-relaxed">
                    "To become a transformative finance leader who bridges traditional 
                    business practices with innovative financial strategies."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;