'use client';

import { motion } from 'framer-motion';
import { Code, Lightbulb, Users, Briefcase } from 'lucide-react';

export default function WhyChooseSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Why Choose Elevate?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Our program is designed to provide you with the skills, experience, and connections needed to thrive in the AI industry.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div 
            className="flex flex-col items-center text-center space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="p-3 rounded-full bg-primary/10 text-primary">
              <Code className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold">Practical Hands-on Learning</h3>
            <p className="text-muted-foreground">Build real AI projects that solve actual problems, not just theoretical exercises.</p>
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
            <h3 className="text-xl font-semibold">Industry Mentorship</h3>
            <p className="text-muted-foreground">Learn directly from experienced professionals working at leading AI companies.</p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center text-center space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="p-3 rounded-full bg-purple-500/10 text-purple-500">
              <Briefcase className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold">Career-Aligned Projects</h3>
            <p className="text-muted-foreground">Develop a portfolio of work that demonstrates your capabilities to future employers.</p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center text-center space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="p-3 rounded-full bg-primary/10 text-primary">
              <Lightbulb className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold">Community-Driven Learning</h3>
            <p className="text-muted-foreground">Join a supportive network of peers and mentors passionate about AI innovation.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}