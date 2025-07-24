'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Sparkles, ArrowRight, Star, Zap } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                {/* Floating orbs */}
                <motion.div 
                    className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
                    animate={{
                        y: [-20, 20, -20],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div 
                    className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
                    animate={{
                        y: [20, -20, 20],
                        scale: [1.1, 1, 1.1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />
                <motion.div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-full blur-3xl"
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </div>
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
            
            {/* Floating Icons */}
            <motion.div
                className="absolute top-32 right-20 text-primary/20"
                animate={{
                    y: [-10, 10, -10],
                    rotate: [0, 5, 0, -5, 0]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <Sparkles size={32} />
            </motion.div>
            <motion.div
                className="absolute bottom-40 left-20 text-purple-500/20"
                animate={{
                    y: [10, -10, 10],
                    rotate: [0, -5, 0, 5, 0]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            >
                <Zap size={28} />
            </motion.div>
            <motion.div
                className="absolute top-1/2 right-32 text-primary/15"
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <Star size={24} />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 py-20 md:py-32 container mx-auto px-4 md:px-8 flex items-center min-h-[90vh]">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Sparkles className="h-4 w-4" />
                        Transform Your Future with AI
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Accelerate Your{' '}
                        <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                            AI Career Journey
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                    >
                        Join Elevate and master cutting-edge AI skills through hands-on projects,
                        expert mentorship, and a supportive community of innovators.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                size="lg"
                                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                            >
                                Apply Now
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button 
                                variant="outline" 
                                size="lg"
                                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-6 text-lg transition-all duration-300"
                            >
                                Explore Programs
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Stats Cards */}
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        {[
                            { value: "95%", label: "Job placement rate for graduates", delay: 0.8 },
                            { value: "12", label: "Weeks of intensive AI training", delay: 0.9 },
                            { value: "30+", label: "Industry expert mentors", delay: 1.0 },
                            { value: "8", label: "Real-world AI projects", delay: 1.1 }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: stat.delay }}
                                whileHover={{ 
                                    scale: 1.05,
                                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                                }}
                                className="p-6 rounded-2xl backdrop-blur-sm bg-card/50 border border-border/50 hover:bg-card/80 transition-all duration-300 group cursor-pointer"
                            >
                                <motion.p 
                                    className="text-3xl font-bold text-primary mb-2"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {stat.value}
                                </motion.p>
                                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
            
            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden z-10">
                <motion.svg
                    viewBox="0 0 1200 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                >
                    <motion.path
                        d="M0 120L50 108C100 96 200 72 300 66C400 60 500 72 600 78C700 84 800 84 900 78C1000 72 1100 60 1150 54L1200 48V120H1150C1100 120 1000 120 900 120C800 120 700 120 600 120C500 120 400 120 300 120C200 120 100 120 50 120H0Z"
                        fill="currentColor"
                        className="text-background"
                        animate={{
                            d: [
                                "M0 120L50 108C100 96 200 72 300 66C400 60 500 72 600 78C700 84 800 84 900 78C1000 72 1100 60 1150 54L1200 48V120H1150C1100 120 1000 120 900 120C800 120 700 120 600 120C500 120 400 120 300 120C200 120 100 120 50 120H0Z",
                                "M0 120L50 112C100 104 200 88 300 82C400 76 500 80 600 84C700 88 800 92 900 88C1000 84 1100 72 1150 66L1200 60V120H1150C1100 120 1000 120 900 120C800 120 700 120 600 120C500 120 400 120 300 120C200 120 100 120 50 120H0Z",
                                "M0 120L50 108C100 96 200 72 300 66C400 60 500 72 600 78C700 84 800 84 900 78C1000 72 1100 60 1150 54L1200 48V120H1150C1100 120 1000 120 900 120C800 120 700 120 600 120C500 120 400 120 300 120C200 120 100 120 50 120H0Z"
                            ]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </motion.svg>
            </div>
        </section>
    );
}
