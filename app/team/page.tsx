'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Linkedin, Twitter, Globe, ChevronRight, Users, Sparkles, BookOpen, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function TeamPage() {
    // Team members data
    const leadershipTeam = [
        {
            name: "Chioma Okoro",
            role: "COO Wootlab Innovations",
            bio: "",
            image: "/chi.jpg",
            social: {
                linkedin: "https://linkedin.com/in/sarahjohnson",
                twitter: "https://twitter.com/sarahjohnson",
                website: "https://sarahjohnson.com"
            }
        },
        {
            name: "Chiamaka Jonathan",
            role: "General Manager",
            bio: "",
            image: "/chiamaka.png",
            social: {
                linkedin: "https://linkedin.com/in/michaelchen",
                twitter: "https://twitter.com/michaelchen"
            }
        },
        {
            name: "Benaiah Yusuf",
            role: "Engineering Team Lead (Wootlab Innovations)",
            bio: "Education innovator with experience developing AI curricula at MIT. PhD in Educational Technology with a focus on adaptive learning systems.",
            image: "/ben.jpg",
            social: {
                linkedin: "https://linkedin.com/in/amaraokafor",
                website: "https://amaraokafor.edu"
            }
        },
        {
            name: "Ayobami",
            role: "Business Development Team Lead - Wootlab Innovations",
            bio: "Former Business Development Director at IBM's AI division. Extensive experience in creating industry partnerships and placement programs.",
            image: "/ayo.jpg",
            social: {
                linkedin: "https://linkedin.com/in/jamesrodriguez",
                twitter: "https://twitter.com/jamesrodriguez"
            }
        }
    ];

    const mentors = [
        {
            name: "Benaiah Yusuf",
            expertise: "Natural Language Processing",
            company: "OpenAI",
            bio: "Senior Research Scientist specializing in large language models and their applications in education and healthcare.",
            image: "/ben.jpg"
        },
        {
            name: "Chimdidu Ozowolu",
            expertise: "Computer Vision",
            company: "Tesla",
            bio: "Lead Engineer working on autonomous driving systems with expertise in real-time image processing and neural networks.",
            image: "/wootlab.png"
        },
        {
            name: "Agaba Sylvester",
            expertise: "AI Ethics & Governance",
            company: "AI Ethics Institute",
            bio: "Policy advisor and researcher focused on creating ethical frameworks for AI deployment in critical sectors.",
            image: "/passport.jpg"
        },
        {
            name: "Dr. Carlos Mendez",
            expertise: "Reinforcement Learning",
            company: "DeepMind",
            bio: "Research scientist working on advanced reinforcement learning algorithms for complex decision-making systems.",
            image: "/wootlab.png"
        }
    ];

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
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Our Team & Mentors</h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-8">
                            Meet the experts and visionaries shaping the future of AI education at AI-Horizons.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Leadership Team Section */}
            {/* <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Leadership Team</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            The visionaries and experts leading AI-Horizons toward excellence in AI education.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {leadershipTeam.map((member, index) => (
                            <motion.div
                                key={member.name}
                                className="group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
                                    <div className="relative aspect-square overflow-hidden bg-muted">
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center gap-4">
                                            {member.social.linkedin && (
                                                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full text-primary hover:text-primary/80 transition-colors">
                                                    <Linkedin className="h-5 w-5" />
                                                </a>
                                            )}
                                            {member.social.twitter && (
                                                <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full text-primary hover:text-primary/80 transition-colors">
                                                    <Twitter className="h-5 w-5" />
                                                </a>
                                            )}
                                            {member.social.website && (
                                                <a href={member.social.website} target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full text-primary hover:text-primary/80 transition-colors">
                                                    <Globe className="h-5 w-5" />
                                                </a>
                                            )}
                                        </div>
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            width={300}
                                            height={300}
                                            className="h-full w-full object-cover transition-transform group-hover:scale-105"
                                        />
                                    </div>
                                    <CardContent className="p-6">
                                        <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                                        <p className="text-primary font-medium mb-3">{member.role}</p>
                                        <p className="text-muted-foreground text-sm">{member.bio}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Why Join Our Team Section */}
            <section className="py-16 md:py-24 bg-muted/50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold tracking-tighter mb-6">Why Join Our Team?</h2>
                            <p className="text-lg text-muted-foreground mb-6">
                                At AI-Horizons, we&apos;re building a community of passionate educators, researchers, and industry experts dedicated to shaping the future of AI education.
                            </p>
                            
                            <div className="space-y-4 mt-8">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                                        <Users className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Collaborative Environment</h3>
                                        <p className="text-muted-foreground">Work alongside leading experts in AI research, education, and industry application.</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                                        <Sparkles className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Innovation Focus</h3>
                                        <p className="text-muted-foreground">Contribute to cutting-edge educational approaches that are shaping the next generation of AI practitioners.</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                                        <BookOpen className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Continuous Learning</h3>
                                        <p className="text-muted-foreground">Access to professional development opportunities and the latest advancements in AI technology.</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                                        <Award className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Meaningful Impact</h3>
                                        <p className="text-muted-foreground">Help shape the future of AI by educating and mentoring the next generation of AI leaders.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-8">
                                <Link href="/careers">
                                    <Button className="group">
                                        View Open Positions
                                        <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                        
                        <motion.div
                            className="relative h-[400px] rounded-xl overflow-hidden shadow-xl"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Image
                                src="/team.jpg"
                                alt="AI-Horizons team collaboration"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                <p className="text-white text-lg font-medium">Our collaborative workspace fosters innovation and excellence</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mentors Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Our Industry Mentors</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Learn directly from industry professionals who are at the forefront of AI innovation.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {mentors.map((mentor, index) => (
                            <motion.div
                                key={mentor.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
                                    <div className="relative aspect-square overflow-hidden bg-muted">
                                        <Image
                                            src={mentor.image}
                                            alt={mentor.name}
                                            width={300}
                                            height={300}
                                            className="h-full w-full object-cover transition-transform hover:scale-105"
                                        />
                                    </div>
                                    <CardContent className="p-6">
                                        <h3 className="text-xl font-semibold mb-1">{mentor.name}</h3>
                                        <p className="text-primary font-medium mb-1">{mentor.expertise}</p>
                                        <p className="text-sm text-muted-foreground mb-3">{mentor.company}</p>
                                        <p className="text-muted-foreground text-sm">{mentor.bio}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

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
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">Interested in Becoming a Mentor?</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Share your expertise and help shape the next generation of AI professionals. Join our network of industry mentors.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/apply-mentor">
                                <Button size="lg" className="w-full sm:w-auto">
                                    Apply as a Mentor
                                </Button>
                            </Link>
                            <Link href="/help">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                    Contact Us
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}