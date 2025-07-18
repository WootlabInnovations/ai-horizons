'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, Play, X } from 'lucide-react';

export default function ProgramBannerSection() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
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
              Join 500+ students in our free 8-week program
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
                Apply Now - Cohort 3
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto group"
                onClick={() => setVideoModalOpen(true)}
              >
                <Play className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
                Watch Success Stories
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
              <span>Next cohort starts: <span className="font-medium">Aug 1, 2025</span> • Applications close: <span className="font-medium">July 25, 2025</span></span>
            </motion.div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {videoModalOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVideoModalOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-2 right-2 z-10 text-white bg-black/50 hover:bg-black/70 rounded-full"
                onClick={() => setVideoModalOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
              <video
                className="w-full aspect-video"
                controls
                autoPlay
                src="/hero.mp4"
              >
                <source src="/hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}