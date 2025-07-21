'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { Calendar, ArrowRight, BookOpen, Users, Code, Lightbulb, Award, Rocket, GraduationCap, CheckCircle } from 'lucide-react';

export default function ProgramsPage() {
  const containerRef = useRef(null);
  const [activeWeek, setActiveWeek] = useState(1);
  
  // Scroll animation setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });
  
  // Timeline animation values
  const timelineProgress = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  
  // Program weeks data
  const programWeeks = [
    {
      week: 1,
      title: "Onboarding & Foundations",
      description: "Get acquainted with the program structure, meet your mentors and peers, and establish your learning goals.",
      icon: <Users className="h-6 w-6" />,
      color: "primary",
      activities: [
        "Program orientation and platform introduction",
        "Mentor matching and initial 1:1 sessions",
        "AI ethics and responsible innovation workshop",
        "Learning path selection and goal setting"
      ]
    },
    {
      week: 2,
      title: "Core AI Concepts",
      description: "Build a solid foundation in essential AI concepts relevant to your chosen learning path.",
      icon: <BookOpen className="h-6 w-6" />,
      color: "secondary",
      activities: [
        "Fundamentals of machine learning and neural networks",
        "Data preparation and feature engineering",
        "Introduction to popular AI frameworks and tools",
        "Path-specific technical workshops"
      ]
    },
    {
      week: 3,
      title: "Specialized Learning",
      description: "Dive deeper into your chosen path with specialized content and hands-on exercises.",
      icon: <Code className="h-6 w-6" />,
      color: "purple-500",
      activities: [
        "Path-specific advanced concepts and techniques",
        "Guided coding exercises and problem-solving",
        "Industry case studies and applications",
        "Project ideation and planning workshop"
      ]
    },
    {
      week: 4,
      title: "Project Kickoff",
      description: "Begin work on your capstone project with guidance from mentors and peers.",
      icon: <Rocket className="h-6 w-6" />,
      color: "primary",
      activities: [
        "Project proposal presentations and feedback",
        "Technical requirements and architecture planning",
        "Resource allocation and timeline development",
        "Initial development and prototyping"
      ]
    },
    {
      week: 5,
      title: "Mid-Program Review",
      description: "Assess your progress, refine your project, and address any challenges with mentor support.",
      icon: <Lightbulb className="h-6 w-6" />,
      color: "secondary",
      activities: [
        "Mid-program assessment and progress review",
        "Peer feedback sessions and project refinement",
        "Advanced technical workshops based on common challenges",
        "Industry expert guest lectures"
      ]
    },
    {
      week: 6,
      title: "Accelerated Development",
      description: "Focus intensively on your project development with increased mentor support.",
      icon: <Rocket className="h-6 w-6" />,
      color: "purple-500",
      activities: [
        "Intensive development sprints with daily check-ins",
        "Technical troubleshooting and problem-solving sessions",
        "Integration of advanced features and optimizations",
        "User testing and feedback incorporation"
      ]
    },
    {
      week: 7,
      title: "Project Finalization",
      description: "Complete your project, prepare documentation, and get ready for the final presentation.",
      icon: <CheckCircle className="h-6 w-6" />,
      color: "primary",
      activities: [
        "Final development push and feature completion",
        "Comprehensive testing and bug fixing",
        "Documentation and code review",
        "Presentation preparation and practice sessions"
      ]
    },
    {
      week: 8,
      title: "Graduation & Next Steps",
      description: "Showcase your work, celebrate your achievements, and plan your next career steps.",
      icon: <GraduationCap className="h-6 w-6" />,
      color: "secondary",
      activities: [
        "Final project presentations to industry partners",
        "Portfolio development and career strategy sessions",
        "Networking event with alumni and industry professionals",
        "Graduation ceremony and certificate awarding"
      ]
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Our 8-Week AI Horizons Program</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">A transformative journey from AI fundamentals to industry-ready expertise, guided by top professionals.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Download Syllabus
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </section>

      {/* Program Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Program Overview</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Our comprehensive 8-week program is designed to transform beginners into industry-ready AI professionals.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="flex flex-col items-center text-center space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">8-Week Intensive</h3>
              <p className="text-muted-foreground">A structured program with clear weekly objectives and milestones to ensure steady progress.</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center text-center space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="p-3 rounded-full bg-secondary/10 text-secondary">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Expert Mentorship</h3>
              <p className="text-muted-foreground">Weekly 1:1 sessions with industry professionals who provide personalized guidance and feedback.</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center text-center space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="p-3 rounded-full bg-purple-500/10 text-purple-500">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Capstone Project</h3>
              <p className="text-muted-foreground">Build a comprehensive AI project that showcases your skills and can be featured in your professional portfolio.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Timeline */}
      <section className="py-16 md:py-24 bg-muted/30" ref={containerRef}>
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Program Timeline</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">A week-by-week breakdown of your learning journey with AI Horizons.</p>
          </motion.div>
          
          {/* Week selector (mobile) */}
          <div className="md:hidden mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Select Week:</h3>
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setActiveWeek(Math.max(1, activeWeek - 1))}
                  disabled={activeWeek === 1}
                >
                  Previous
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setActiveWeek(Math.min(8, activeWeek + 1))}
                  disabled={activeWeek === 8}
                >
                  Next
                </Button>
              </div>
            </div>
            
            {/* Mobile week card */}
            <Card className="w-full">
              <CardHeader>
                <div className={`p-2 rounded-full bg-${programWeeks[activeWeek-1].color}/10 text-${programWeeks[activeWeek-1].color} w-fit mb-2`}>
                  {programWeeks[activeWeek-1].icon}
                </div>
                <CardTitle>Week {activeWeek}: {programWeeks[activeWeek-1].title}</CardTitle>
                <CardDescription>{programWeeks[activeWeek-1].description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {programWeeks[activeWeek-1].activities.map((activity, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className={`h-5 w-5 text-${programWeeks[activeWeek-1].color} shrink-0 mt-0.5`} />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          
          {/* Desktop timeline */}
          <div className="hidden md:block relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-muted">
              <motion.div 
                className="absolute top-0 left-0 w-full bg-primary" 
                style={{ 
                  height: timelineProgress,
                  transformOrigin: 'top'
                }}
              />
            </div>
            
            {/* Timeline items */}
            <div className="space-y-24">
              {programWeeks.map((week, index) => (
                <motion.div 
                  key={week.week}
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Timeline node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-card border-4 border-background flex items-center justify-center z-10">
                    <span className="font-bold">{week.week}</span>
                  </div>
                  
                  {/* Content card */}
                  <motion.div 
                    className={`w-5/12 ${index % 2 === 0 ? 'pr-16 text-right' : 'pl-16 text-left'}`}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <Card className="overflow-hidden">
                      <CardHeader>
                        <div className={`p-2 rounded-full bg-${week.color}/10 text-${week.color} w-fit ${index % 2 === 0 ? 'ml-auto' : ''} mb-2`}>
                          {week.icon}
                        </div>
                        <CardTitle className="text-xl">{week.title}</CardTitle>
                        <CardDescription>{week.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className={`space-y-2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                          {week.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="flex items-start gap-2">
                              <CheckCircle className={`h-5 w-5 text-${week.color} shrink-0 mt-0.5 ${index % 2 === 0 ? 'order-2 ml-auto' : ''}`} />
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                  
                  {/* Empty space for the other side */}
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Banner */}
      <section className="py-12 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="rounded-xl bg-card p-6 md:p-8 shadow-lg border border-primary/20 overflow-hidden relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <motion.h2 
                className="text-2xl md:text-3xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Join our next cohort starting August 1, 2025
              </motion.h2>
              
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white font-medium w-full sm:w-auto"
                >
                  Apply Now - Limited Spots
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto"
                >
                  Request Information
                </Button>
              </motion.div>
              
              <motion.div 
                className="flex items-center justify-center text-sm text-muted-foreground gap-1"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Calendar className="h-4 w-4 mr-1" />
                <span>Applications close: <span className="font-medium">July 25, 2025</span> • Program duration: <span className="font-medium">8 weeks</span></span>
              </motion.div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}