'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { ChevronRight } from 'lucide-react';

export default function CallToActionSection() {
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Ready to Shape the Future of AI?</h2>
          <p className="text-xl text-muted-foreground mb-8">Applications for our Summer 2025 cohort are now open. Join a community of innovators and launch your AI career.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Apply Now
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Download Brochure
            </Button>
          </div>
          
          <p className="mt-8 text-sm text-muted-foreground">
            Have questions? <a href="#" className="text-primary hover:underline">Contact our admissions team</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}