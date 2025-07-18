'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { CheckCircle, Code, Briefcase, PenTool} from 'lucide-react';
import PathComparisonModal from './PathComparisonModal';

export default function LearningPathsSection() {
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Choose Your Learning Path</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Customize your internship experience based on your background and career goals.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="relative group"
          >
            <Card className="h-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardHeader>
                <div className="p-2 rounded-full bg-primary/10 text-primary w-fit mb-2">
                  <Code className="h-5 w-5" />
                </div>
                <CardTitle className="text-2xl">AI Innovators</CardTitle>
                <CardDescription>For coders, developers, data scientists</CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Advanced ML algorithms & neural networks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Practical AI model deployment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Technical mentorship from AI engineers</span>
                  </li>
                </ul>
              </CardContent>
              
              <CardFooter className="flex justify-between border-t pt-6">
                <Button variant="outline">Learn More</Button>
                <div className="w-full max-w-[120px] h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[85%]" />
                </div>
              </CardFooter>
            </Card>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="relative group"
          >
            <Card className="h-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardHeader>
                <div className="p-2 rounded-full bg-secondary/10 text-secondary w-fit mb-2">
                  <Briefcase className="h-5 w-5" />
                </div>
                <CardTitle className="text-2xl">AI Strategists</CardTitle>
                <CardDescription>For analysts, PMs, marketers</CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span>AI implementation strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span>Business case development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span>Mentorship from product & business leaders</span>
                  </li>
                </ul>
              </CardContent>
              
              <CardFooter className="flex justify-between border-t pt-6">
                <Button variant="outline">Learn More</Button>
                <div className="w-full max-w-[120px] h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-[70%]" />
                </div>
              </CardFooter>
            </Card>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="relative group"
          >
            <Card className="h-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardHeader>
                <div className="p-2 rounded-full bg-purple-500/10 text-purple-500 w-fit mb-2">
                  <PenTool className="h-5 w-5" />
                </div>
                <CardTitle className="text-2xl">AI Creators</CardTitle>
                <CardDescription>For designers, copywriters, storytellers</CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                    <span>Generative AI for design & content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                    <span>AI-assisted creative workflows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                    <span>Mentorship from creative technologists</span>
                  </li>
                </ul>
              </CardContent>
              
              <CardFooter className="flex justify-between border-t pt-6">
                <Button variant="outline">Learn More</Button>
                <div className="w-full max-w-[120px] h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 w-[60%]" />
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button 
            size="lg"
            onClick={() => setIsComparisonOpen(true)}
          >
            Compare All Paths
          </Button>
        </motion.div>
      </div>
      
      <PathComparisonModal 
        isOpen={isComparisonOpen} 
        onClose={() => setIsComparisonOpen(false)} 
      />
    </section>
  );
}