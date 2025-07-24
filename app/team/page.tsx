'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { ChevronRight, Users, Sparkles, BookOpen, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function TeamPage() {
    const mentors = [
        {
            name: "Benaiah Yusuf",
            expertise: "Senior Software Engineer",
            company: "Wootlab Innovations",
            bio: "Passionate about building robust, scalable systems that solve real-world problems. With a decade of experience architecting enterprise solutions, Benaiah specializes in full-stack development and mentoring the next generation of developers.",
            image: "/ben.jpg",
            linkedin: "https://linkedin.com/in/benaiah-yusuf",
            twitter: "https://x.com/benaiah_yusuf"
        },
        {
            name: "Ayobami Oluwarotimi",
            expertise: "Business Expert",
            company: "Wootlab Innovations",
            bio: "Strategic visionary who transforms innovative ideas into market-ready solutions. With extensive experience in product management and business development, Ayobami bridges the gap between technology and business success.",
            image: "/partner/ayo.jpg",
            linkedin: "https://linkedin.com/in/ayobami-oluwarotimi",
            twitter: "https://twitter.com/ayobami_o"
        },
        {
            name: "Chimdidu Ozowolu",
            expertise: "Software Engineer",
            company: "Wootlab Innovations",
            bio: "Creative problem-solver with a passion for clean code and user-centric design. Specializes in modern web technologies and API development, bringing fresh perspectives to complex technical challenges.",
            image: "/chimdi.jpg",
            linkedin: "https://linkedin.com/in/chimdidu-ozowolu",
            twitter: "https://twitter.com/chimdidu_oz"
        },
        {
            name: "Agaba Sylvester",
            expertise: "Software Engineer",
            company: "Wootlab Innovations",
            bio: "Detail-oriented engineer who thrives on creating seamless digital experiences. Combines technical expertise with a keen eye for performance optimization and innovative solution design.",
            image: "/passport.jpg",
            linkedin: "https://linkedin.com/in/agaba-sylvester",
            twitter: "https://twitter.com/agaba_sylvester"
        },
        {
            name: "James Ogbodo",
            expertise: "Media & Creative Director",
            company: "Wootlab Innovations",
            bio: "Experienced media and creative director with a strong background in digital marketing, content strategy, and brand management. Specializes in developing engaging content that resonates with target audiences and drives business growth.",
            image: "/james.jpg",
            linkedin: "https://linkedin.com/in/james-ogbodo",
            twitter: "https://twitter.com/james_ogbodo"
        },
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
                            Meet the experts and visionaries shaping the future of AI education at Elevate.
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
                            The visionaries and experts leading Elevate toward excellence in AI education.
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
                                At Elevate, we&apos;re building a community of passionate educators, researchers, and industry experts dedicated to shaping the future of AI education.
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
                                alt="Elevate team collaboration"
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

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                        {mentors.map((mentor, index) => (
                            <motion.div
                                key={mentor.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -4 }}
                                className="group"
                            >
                                <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 border border-gray-200/50">
                                    <div className="relative aspect-square overflow-hidden">
                                        <Image
                                            src={mentor.image}
                                            alt={mentor.name}
                                            width={300}
                                            height={300}
                                            className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    <CardContent className="p-4">
                                        <div className="space-y-2">
                                            <div>
                                                <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300 line-clamp-1">
                                                    {mentor.name}
                                                </h3>
                                                <p className="text-primary font-medium text-xs uppercase tracking-wide line-clamp-1">
                                                    {mentor.expertise}
                                                </p>
                                                <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                                                    {mentor.company}
                                                </p>
                                            </div>
                                            
                                            <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3">
                                                {mentor.bio}
                                            </p>
                                            
                                            <div className="flex gap-2 pt-1">
                                                <a
                                                    href={mentor.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-1.5 rounded-full bg-blue-50 hover:bg-blue-100 transition-all duration-200 hover:scale-105"
                                                >
                                                    <Image
                                                        src="/icons8-linkedin.svg"
                                                        alt="LinkedIn"
                                                        width={14}
                                                        height={14}
                                                        className="h-3.5 w-3.5"
                                                    />
                                                </a>
                                                <a
                                                    href={mentor.twitter}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-1.5 rounded-full bg-gray-50 hover:bg-gray-100 transition-all duration-200 hover:scale-105"
                                                >
                                                    <Image
                                                        src="/icons8-x-logo.svg"
                                                        alt="X (Twitter)"
                                                        width={14}
                                                        height={14}
                                                        className="h-3.5 w-3.5"
                                                    />
                                                </a>
                                            </div>
                                        </div>
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