'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/button';

export default function HeroSection() {
    return (
        <section className="relative min-h-[80vh] w-full overflow-hidden text-white">
            {/* Background video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                poster="/hero.jpg"
                className="absolute inset-0 object-cover w-full h-full"
            >
                <source src="/hero.mp4" type="video/mp4" />
            </video>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-0" />

            {/* Content */}
            <div className="relative z-10 py-20 md:py-24 container mx-auto px-4 md:px-8 flex items-center">
                <div className="max-w-2xl space-y-6">
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        Accelerate Your AI Career Journey
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl text-white/90"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    >
                        Join AI Horizons and master cutting-edge AI skills through hands-on projects, 
                        expert mentorship, and a supportive community of innovators.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                    >
                        <Button
                            size="lg"
                            className="bg-primary w-1/2 h-12 text-xl text-white font-semibold hover:bg-primary/90 transition-all duration-300"
                        >
                            Apply Now
                        </Button>
                        <Button variant='outline' className="text-primary w-1/2 h-12 text-xl underline hover:text-primary/90 transition-all duration-300">
                            Explore Programs
                        </Button>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 text-white/90 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="p-3 rounded-lg backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300"
                        >
                            <p className="text-xl font-semibold text-primary">95%</p>
                            <p className="text-sm">Job placement rate for graduates</p>
                        </motion.div>
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="p-3 rounded-lg backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300"
                        >
                            <p className="text-xl font-semibold text-primary">12</p>
                            <p className="text-sm">Weeks of intensive AI training</p>
                        </motion.div>
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="p-3 rounded-lg backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300"
                        >
                            <p className="text-xl font-semibold text-primary">30+</p>
                            <p className="text-sm">Industry expert mentors</p>
                        </motion.div>
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="p-3 rounded-lg backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300"
                        >
                            <p className="text-xl font-semibold text-primary">8</p>
                            <p className="text-sm">Real-world AI projects</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
