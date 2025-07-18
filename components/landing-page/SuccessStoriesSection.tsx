'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function SuccessStoriesSection() {
  // Create refs for each story card
  const containerRef = useRef(null);
  const firstCardRef = useRef(null);
  const secondCardRef = useRef(null);
  const thirdCardRef = useRef(null);
  
  // Set up scroll animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });
  
  // Transform values for each card based on scroll position
  const firstCardY = useTransform(scrollYProgress, [0, 0.5, 1], [0, -50, 0]);
  const secondCardY = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 0]);
  const thirdCardY = useTransform(scrollYProgress, [0, 0.5, 1], [0, 50, 0]);
  
  return (
    <section className="py-16 md:py-24 bg-muted/50 overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Hear from our alumni who have transformed their careers through our program.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <motion.div 
            ref={firstCardRef}
            className="bg-card border rounded-xl p-6 shadow-sm md:transform-gpu"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ y: firstCardY }}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          >
            <div className="flex flex-col gap-4">
              <div className="text-4xl text-primary">&quot;</div>
              <p className="italic">The AI Horizons internship was the turning point in my career. The hands-on projects and mentorship helped me land a role at a leading AI research lab.</p>
              <div className="mt-4">
                <p className="font-semibold">Sarah Chen</p>
                <p className="text-sm text-muted-foreground">AI Research Engineer, DeepMind</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            ref={secondCardRef}
            className="bg-card border rounded-xl p-6 shadow-sm md:transform-gpu"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ y: secondCardY }}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          >
            <div className="flex flex-col gap-4">
              <div className="text-4xl text-secondary">&quot;</div>
              <p className="italic">As a business major, I was intimidated by AI. This program made it accessible and showed me how to leverage AI for business strategy. Now I lead AI initiatives at my company.</p>
              <div className="mt-4">
                <p className="font-semibold">Marcus Johnson</p>
                <p className="text-sm text-muted-foreground">Product Manager, Salesforce</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            ref={thirdCardRef}
            className="bg-card border rounded-xl p-6 shadow-sm md:transform-gpu"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ y: thirdCardY }}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          >
            <div className="flex flex-col gap-4">
              <div className="text-4xl text-purple-500">&quot;</div>
              <p className="italic">The creative AI path opened my eyes to how AI can enhance rather than replace creative work. I&quot;ve since built a thriving design studio that specializes in AI-human collaboration.</p>
              <div className="mt-4">
                <p className="font-semibold">Aisha Patel</p>
                <p className="text-sm text-muted-foreground">Founder, Fusion Design Co.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}