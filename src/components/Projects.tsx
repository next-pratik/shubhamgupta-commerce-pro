import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  ExternalLink, 
  Github, 
  TrendingUp, 
  Calculator, 
  BarChart3, 
  FileText,
  DollarSign,
  Target
} from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Financial Ratio Analysis Dashboard',
      category: 'financial-analysis',
      description: 'Comprehensive financial ratio analysis system for XYZ Manufacturing Ltd. analyzing liquidity, profitability, and solvency ratios over 3-year period.',
      longDescription: 'Developed an advanced financial analysis dashboard that automated the calculation and visualization of key financial ratios. The project involved analyzing three years of financial statements, identifying trends, and providing actionable insights for management decision-making.',
      tools: ['Excel', 'Power BI', 'Financial Modeling', 'Data Analytics'],
      outcomes: [
        'Identified 15% improvement opportunity in working capital management',
        'Automated ratio calculations reducing analysis time by 60%',
        'Provided strategic recommendations adopted by management',
        'Created reusable templates for future analysis'
      ],
      icon: TrendingUp,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'GST Compliance & Automation System',
      category: 'taxation',
      description: 'Designed and implemented automated GST filing system for multi-location retail chain, ensuring 100% compliance and reducing manual errors.',
      longDescription: 'Created a comprehensive GST management system that streamlined the entire compliance process from invoice generation to return filing. The system handled complex scenarios including interstate transactions, input tax credit reconciliation, and reverse charge mechanism.',
      tools: ['Tally ERP 9', 'Excel VBA', 'GST Portal', 'Process Automation'],
      outcomes: [
        'Achieved 100% on-time GST return filing',
        'Reduced compliance costs by 40%',
        'Eliminated manual calculation errors',
        'Improved cash flow through optimized ITC utilization'
      ],
      icon: Calculator,
      color: 'text-teal',
      bgColor: 'bg-teal/10',
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Cost Optimization Analysis',
      category: 'business-analysis',
      description: 'Conducted comprehensive cost analysis for service-based startup, identifying cost reduction opportunities and improving profit margins by 25%.',
      longDescription: 'Performed detailed cost-benefit analysis for a growing tech startup, examining all cost centers and revenue streams. Developed cost allocation models and recommended strategic changes to improve operational efficiency.',
      tools: ['Excel', 'Cost Accounting', 'Process Mapping', 'Statistical Analysis'],
      outcomes: [
        'Identified $50K annual cost savings opportunities',
        'Improved gross profit margin by 25%',
        'Streamlined operational processes',
        'Established KPI monitoring system'
      ],
      icon: DollarSign,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Investment Portfolio Tracker',
      category: 'investment',
      description: 'Built personal investment tracking system with real-time portfolio monitoring, risk assessment, and performance analytics.',
      longDescription: 'Developed a comprehensive investment tracking system that monitors portfolio performance, calculates risk metrics, and provides investment insights. The system tracks multiple asset classes and provides detailed performance reporting.',
      tools: ['Excel', 'VBA', 'Financial APIs', 'Risk Modeling'],
      outcomes: [
        'Real-time portfolio valuation tracking',
        'Automated risk-return calculations',
        'Performance benchmarking against indices',
        'Tax-loss harvesting optimization'
      ],
      icon: BarChart3,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      link: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'Business Plan & Financial Model',
      category: 'business-planning',
      description: 'Created detailed business plan and financial projections for e-commerce startup, including funding requirements and growth scenarios.',
      longDescription: 'Developed comprehensive business plan including market analysis, competitive positioning, operational strategy, and detailed financial projections. Created multiple scenario models to assess different growth trajectories and funding requirements.',
      tools: ['Excel', 'Financial Modeling', 'Market Research', 'Scenario Planning'],
      outcomes: [
        'Secured $100K seed funding based on projections',
        'Created 5-year financial forecast model',
        'Identified key success metrics and milestones',
        'Established investor reporting framework'
      ],
      icon: Target,
      color: 'text-teal',
      bgColor: 'bg-teal/10',
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'Audit Process Digitization',
      category: 'audit',
      description: 'Digitized manual audit processes for mid-size accounting firm, improving efficiency and accuracy of audit procedures.',
      longDescription: 'Led the digital transformation of traditional audit processes by implementing automated testing procedures, digital working papers, and risk-based audit approaches. The project significantly improved audit quality and reduced completion time.',
      tools: ['Excel', 'Audit Software', 'Process Automation', 'Quality Control'],
      outcomes: [
        'Reduced audit completion time by 35%',
        'Improved audit quality scores by 20%',
        'Eliminated paper-based processes',
        'Enhanced client satisfaction ratings'
      ],
      icon: FileText,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      link: '#',
      github: '#'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'financial-analysis', label: 'Financial Analysis', count: projects.filter(p => p.category === 'financial-analysis').length },
    { id: 'taxation', label: 'Taxation', count: projects.filter(p => p.category === 'taxation').length },
    { id: 'business-analysis', label: 'Business Analysis', count: projects.filter(p => p.category === 'business-analysis').length },
    { id: 'investment', label: 'Investment', count: projects.filter(p => p.category === 'investment').length },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-6">
              Projects & Case Studies
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world projects showcasing analytical expertise, problem-solving skills, 
              and practical application of commerce knowledge.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'border-primary/20 text-primary hover:bg-primary/10'
                }`}
              >
                {category.label}
                <Badge 
                  variant="secondary" 
                  className="ml-2 text-xs bg-primary-foreground/20 text-primary-foreground"
                >
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="shadow-corporate border-0 bg-surface-elevated hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 ${project.bgColor} rounded-lg`}>
                      <project.icon className={`w-8 h-8 ${project.color}`} />
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Project Content */}
                  <h3 className="font-heading text-2xl font-semibold text-primary mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tools Used */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Tools & Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, idx) => (
                        <Badge 
                          key={idx}
                          variant="secondary"
                          className="px-3 py-1 bg-muted/50 text-muted-foreground border-0"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Outcomes */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Outcomes</h4>
                    <ul className="space-y-2">
                      {project.outcomes.slice(0, 2).map((outcome, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-teal rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-3 pt-4 border-t border-border/50">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 border-primary/20 text-primary hover:bg-primary/10"
                    >
                      View Details
                    </Button>
                    <Button 
                      size="sm"
                      className="flex-1 bg-gradient-primary text-primary-foreground hover:opacity-90"
                    >
                      Case Study
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="shadow-lg border-0 bg-gradient-accent max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="font-heading text-2xl font-semibold text-accent-foreground mb-4">
                  Interested in Collaboration?
                </h3>
                <p className="text-accent-foreground/90 mb-6">
                  I'm always excited to work on challenging financial projects and 
                  business analysis cases. Let's discuss how I can add value to your organization.
                </p>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-accent-foreground/20 text-accent-foreground hover:bg-accent-foreground/10"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Start a Project
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;