'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, HelpCircle, FileText, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function HelpPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Reset form status after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-full blur-3xl" />
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Sparkles className="h-4 w-4" />
              We&apos;re here to help
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Have questions about our programs? Need support? We&apos;d love to hear from you.
            </p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={scrollToForm}
              >
                <Mail className="h-5 w-5 mr-2" />
                Send us a message
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 hover:bg-muted/50 transition-all duration-300"
                asChild
              >
                <a href="tel:+2349082716744">
                  <Phone className="h-5 w-5 mr-2" />
                  Schedule a call
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information and Form Section */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-4xl font-bold tracking-tighter mb-4">Let&apos;s Connect</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Choose the best way to reach us. We&apos;re committed to responding within 24 hours.
                </p>
              </motion.div>

              <div className="space-y-6">
                <motion.div variants={itemVariants}>
                  <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50 overflow-hidden">
                    <CardContent className="p-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Email */}
                        <div className="flex items-start gap-4">
                          <div className="bg-blue-500/10 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                            <Mail className="h-6 w-6 text-blue-500" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                            <p className="text-muted-foreground mb-3">For general inquiries and support</p>
                            <a href="mailto:info@Elevate.com" className="text-blue-500 hover:text-blue-600 font-medium transition-colors duration-200">
                              info@Elevate.com
                            </a>
                          </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-4">
                          <div className="bg-green-500/10 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                            <Phone className="h-6 w-6 text-green-500" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                            <p className="text-muted-foreground mb-3">Monday-Friday, 9:00 AM - 5:00 PM</p>
                            <a href="tel:+2349082716744" className="text-green-500 hover:text-green-600 font-medium transition-colors duration-200">
                              +234 908 271 6744
                            </a>
                          </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-start gap-4">
                          <div className="bg-purple-500/10 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                            <MapPin className="h-6 w-6 text-purple-500" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
                            <p className="text-muted-foreground mb-3">Our headquarters location</p>
                            <p className="text-purple-500 font-medium">29 Usuma Street, Maitama, Nigeria</p>
                          </div>
                        </div>

                        {/* Business Hours */}
                        <div className="flex items-start gap-4">
                          <div className="bg-orange-500/10 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                            <Clock className="h-6 w-6 text-orange-500" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                            <p className="text-muted-foreground mb-3">When we&apos;re available</p>
                            <div className="space-y-1">
                              <p className="text-sm"><span className="font-medium">Monday-Friday:</span> 9:00 AM - 5:00 PM</p>
                              <p className="text-sm"><span className="font-medium">Saturday-Sunday:</span> Closed</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:sticky lg:top-8"
              id="contact-form"
            >
              <div className="bg-gradient-to-br from-card to-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-border/50">
                <h2 className="text-3xl font-bold tracking-tighter mb-2">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8">We&apos;ll get back to you as soon as possible.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-xl bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-xl bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-xl bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="programs">Program Information</option>
                      <option value="mentorship">Mentorship</option>
                      <option value="technical">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-xl bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us how we can help you..."
                      required
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    className="w-full py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                    disabled={formStatus === 'submitting'}
                  >
                    {formStatus === 'submitting' ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : formStatus === 'success' ? (
                      <span className="flex items-center justify-center gap-2">
                        <CheckCircle2 className="h-5 w-5" />
                        Message Sent Successfully
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Send Message <Send className="h-5 w-5" />
                      </span>
                    )}
                  </Button>

                  {formStatus === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-destructive text-sm mt-2 p-3 bg-destructive/10 rounded-lg"
                    >
                      There was an error sending your message. Please try again.
                    </motion.p>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Help Resources Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-muted/30 to-muted/10 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Help Resources</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Find answers to common questions and access helpful resources to get the most out of your experience.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Card className="h-full group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50 overflow-hidden transform hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 p-4 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                    <HelpCircle className="h-8 w-8 text-blue-500" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">Frequently Asked Questions</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Find answers to common questions about our programs, application process, and more.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300" asChild>
                    <Link href="/#faq">
                      View FAQ <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50 overflow-hidden transform hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 p-4 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FileText className="h-8 w-8 text-green-500" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">Documentation & Tutorials</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Access comprehensive guides, tutorials, and documentation for our programs.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300" asChild>
                    <a href="/tutorials">
                      Browse Resources <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50 overflow-hidden transform hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 p-4 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MessageSquare className="h-8 w-8 text-purple-500" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">Community Support</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Connect with our community of students, mentors, and alumni for peer support.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300" asChild>
                    <a href="/community">
                      Join Community <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}