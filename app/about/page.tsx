'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Award, BookOpen, Users, Lightbulb, Target, Globe, ChevronRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-16 md:py-24 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        className="text-center max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">About Elevate</h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-8">
                            Building tomorrow&apos;s AI leaders through education, mentorship, and hands-on experience.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold tracking-tighter mb-6">Our Mission</h2>
                            <p className="text-lg text-muted-foreground mb-6">
                                At Elevate, we&apos;re dedicated to empowering the next generation of AI leaders through comprehensive education, practical experience, and industry mentorship.
                            </p>
                            <p className="text-lg text-muted-foreground mb-6">
                                We believe that AI technology has the potential to solve some of humanity&apos;s most pressing challenges, but only if we develop diverse, ethical, and skilled practitioners who can guide its evolution.
                            </p>
                            <p className="text-lg text-muted-foreground">
                                Our programs bridge the gap between theoretical knowledge and practical application, preparing students for meaningful careers in AI across various industries and disciplines.
                            </p>
                        </motion.div>

                        <motion.div
                            className="relative rounded-xl overflow-hidden shadow-xl"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Image
                                width={1000}
                                height={1000}
                                src="/comp.jpg"
                                alt="Elevate students collaborating"
                                className="w-full object-cover rounded-xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                <p className="text-white text-lg font-medium">Empowering students through collaborative learning</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 md:py-24 bg-muted/50">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Our Core Values</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">These principles guide everything we do at Elevate, from curriculum development to mentorship approaches.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <motion.div
                            className="flex flex-col items-center text-center space-y-3"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="p-3 rounded-full bg-primary/10 text-primary">
                                <Target className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-semibold">Excellence</h3>
                            <p className="text-muted-foreground">We strive for excellence in all aspects of our programs, from curriculum design to mentorship quality.</p>
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
                            <h3 className="text-xl font-semibold">Inclusivity</h3>
                            <p className="text-muted-foreground">We believe diverse perspectives lead to better AI solutions and actively work to create an inclusive learning environment.</p>
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
                            <h3 className="text-xl font-semibold">Ethical Practice</h3>
                            <p className="text-muted-foreground">We emphasize responsible AI development and ethical considerations throughout our curriculum.</p>
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
                            <h3 className="text-xl font-semibold">Innovation</h3>
                            <p className="text-muted-foreground">We encourage creative problem-solving and innovative approaches to AI challenges.</p>
                        </motion.div>

                        <motion.div
                            className="flex flex-col items-center text-center space-y-3"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <div className="p-3 rounded-full bg-secondary/10 text-secondary">
                                <BookOpen className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-semibold">Lifelong Learning</h3>
                            <p className="text-muted-foreground">We foster a mindset of continuous learning and adaptation in the rapidly evolving field of AI.</p>
                        </motion.div>

                        <motion.div
                            className="flex flex-col items-center text-center space-y-3"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <div className="p-3 rounded-full bg-purple-500/10 text-purple-500">
                                <Globe className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-semibold">Global Impact</h3>
                            <p className="text-muted-foreground">We aim to create AI solutions and leaders that address challenges on a global scale.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Our Story</h2>
                        <p className="text-xl text-muted-foreground">The journey of Elevate from concept to leading AI education platform.</p>
                    </motion.div>

                    <div className="space-y-12">
                        {/* <motion.div
                            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="md:col-span-1 flex justify-center">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1</div>
                            </div>
                            <div className="md:col-span-3">
                                <h3 className="text-xl font-semibold mb-2">2020: The Beginning</h3>
                                <p className="text-muted-foreground">Founded by a team of AI researchers and educators who saw the need for more practical, hands-on AI education.</p>
                            </div>
                            <div className="md:col-span-8">
                                <Card>
                                    <CardContent className="p-6">
                                        <p className="italic text-muted-foreground">
                                            &apos;We started Elevate with a simple mission: to make AI education more accessible, practical, and aligned with industry needs. We saw too many students graduating with theoretical knowledge but lacking the practical skills to succeed in AI careers.&apos;
                                        </p>
                                        <p className="mt-4 font-semibold">— Dr. Sarah Johnson, Co-founder</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="md:col-span-1 flex justify-center">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">2</div>
                            </div>
                            <div className="md:col-span-3">
                                <h3 className="text-xl font-semibold mb-2">2021: First Cohort</h3>
                                <p className="text-muted-foreground">Launched our first program with 50 students and 10 industry mentors, focusing on machine learning applications.</p>
                            </div>
                            <div className="md:col-span-8">
                                <Card>
                                    <CardContent className="p-6">
                                        <p className="italic text-muted-foreground">
                                            &apos;Our first cohort exceeded all expectations. The projects they developed and the growth they demonstrated convinced us that our approach to AI education was filling a critical gap in the market.&apos;
                                        </p>
                                        <p className="mt-4 font-semibold">— Michael Chen, Program Director</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <div className="md:col-span-1 flex justify-center">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">3</div>
                            </div>
                            <div className="md:col-span-3">
                                <h3 className="text-xl font-semibold mb-2">2022: Expansion</h3>
                                <p className="text-muted-foreground">Expanded our programs to include specialized tracks for different AI applications and career paths.</p>
                            </div>
                            <div className="md:col-span-8">
                                <Card>
                                    <CardContent className="p-6">
                                        <p className="italic text-muted-foreground">
                                            &apos;We recognized that AI careers were diversifying rapidly. Some students wanted to focus on technical implementation, others on strategic applications, and others on creative uses of AI. Our specialized tracks were designed to address these different career paths.&apos;
                                        </p>
                                        <p className="mt-4 font-semibold">— Dr. Aisha Patel, Curriculum Director</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </motion.div> */}

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <div className="md:col-span-1 flex justify-center">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1</div>
                            </div>
                            <div className="md:col-span-3">
                                <h3 className="text-xl font-semibold mb-2">2025 - Today</h3>
                                <p className="text-muted-foreground">Now serving over 500 students annually with a network of 100+ industry mentors from leading AI companies.</p>
                            </div>
                            <div className="md:col-span-8">
                                <Card>
                                    <CardContent className="p-6">
                                        <p className="italic text-muted-foreground">
                                            &apos;What makes Elevate special is our community. We&apos;ve created an ecosystem where students, alumni, mentors, and industry partners collaborate to push the boundaries of what&apos;s possible with AI while ensuring it&apos;s developed responsibly.&apos;
                                        </p>
                                        <p className="mt-4 font-semibold">— Benaiah Yusuf, Engineering Team Lead (Wootlab Innovations)</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            {/* <section className="py-16 md:py-24 bg-muted/50">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Our Leadership Team</h2>
                        <p className="text-xl text-muted-foreground">Meet the experienced professionals guiding Elevate.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <Card className="overflow-hidden h-full">
                                <div className="aspect-[4/3] relative">
                                    <Image
                                        width={100}
                                        height={100}
                                        src="/director.jpg"
                                        alt="Chioma Okoro"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-1">Chioma Okoro</h3>
                                    <p className="text-primary mb-4">Chief Operating Officer</p>
                                    <p className="text-muted-foreground mb-4">Former AI Research Lead at Google with 15+ years of experience in machine learning and AI education.</p>
                                    <div className="flex space-x-3">
                                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                        </a>
                                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Card className="overflow-hidden h-full">
                                <div className="aspect-[4/3] relative">
                                    <Image
                                        width={100}
                                        height={100}
                                        src="/director.jpg"
                                        alt="Chiamaka Jonathan"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-1">Chiamaka Jonathan</h3>
                                    <p className="text-primary mb-4">General Manager</p>
                                    <p className="text-muted-foreground mb-4">PhD in Computer Science with specialization in deep learning. Previously led AI research teams at MIT and Stanford.</p>
                                    <div className="flex space-x-3">
                                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                        </a>
                                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <Card className="overflow-hidden h-full">
                                <div className="aspect-[4/3] relative">
                                    <Image
                                        width={100}
                                        height={100}
                                        src="/director.jpg"
                                        alt="Michael Chen"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-1">Michael Chen</h3>
                                    <p className="text-primary mb-4">Program Director</p>
                                    <p className="text-muted-foreground mb-4">Former education lead at OpenAI with expertise in curriculum development and AI education methodologies.</p>
                                    <div className="flex space-x-3">
                                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                        </a>
                                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>

                    <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button asChild>
              <Link href="/team">
                View Full Team <ChevronRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
                </div>
            </section> */}

            {/* Call to Action Section */}
            <section className="py-16 md:py-24 bg-primary/5">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        className="text-center max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Join the Elevate Community</h2>
                        <p className="text-lg md:text-xl text-muted-foreground mb-8">
                            Ready to start your journey in AI? Explore our programs and take the first step toward a transformative career.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg">
                                <Link href="/programs">
                                    Explore Programs <Sparkles className="h-4 w-4 ml-2" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" asChild>
                                <Link href="/apply">
                                    Apply Now <ChevronRight className="h-4 w-4 ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}