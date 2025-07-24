'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, HelpCircle, FileText, ArrowRight } from 'lucide-react';
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
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">How Can We Help You?</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Get in touch with our team for support, inquiries, or to learn more about our programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information and Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter mb-8">Contact Information</h2>

              <div className="space-y-8">
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email Us</h3>
                      <p className="text-muted-foreground mb-2">For general inquiries and support</p>
                      <a href="mailto:info@Elevate.com" className="text-primary hover:underline">
                        info@Elevate.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Call Us</h3>
                      <p className="text-muted-foreground mb-2">Monday-Friday, 9:00 AM - 5:00 PM</p>
                      <a href="tel:+2349082716744" className="text-primary hover:underline">
                        +234 908 271 6744
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Visit Us</h3>
                      <p className="text-muted-foreground mb-2">Our headquarters location</p>
                      <p>29 Usuma Street, Maitama, Nigeria</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-muted-foreground mb-2">When we&apos;re available</p>
                      <p className="mb-1"><strong>Monday-Friday:</strong> 9:00 AM - 5:00 PM</p>
                      <p><strong>Saturday-Sunday:</strong> Closed</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter mb-8">Send Us a Message</h2>

              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                        className="w-full px-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
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
                        className="w-full px-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
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
                        className="w-full px-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
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
                        className="w-full px-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      ></textarea>
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={formStatus === 'submitting'}
                    >
                      {formStatus === 'submitting' ? (
                        'Sending...'
                      ) : formStatus === 'success' ? (
                        <span className="flex items-center justify-center gap-2">
                          Message Sent Successfully
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          Send Message <Send className="h-4 w-4" />
                        </span>
                      )}
                    </Button>

                    {formStatus === 'error' && (
                      <p className="text-destructive text-sm mt-2">
                        There was an error sending your message. Please try again.
                      </p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Help Resources Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Help Resources</h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions and access helpful resources.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                    <HelpCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <CardDescription>
                    Find answers to common questions about our programs, application process, and more.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/#faq">
                      View FAQ <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Documentation & Tutorials</CardTitle>
                  <CardDescription>
                    Access comprehensive guides, tutorials, and documentation for our programs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/tutorials">
                      Browse Resources <ArrowRight className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Community Support</CardTitle>
                  <CardDescription>
                    Connect with our community of students, mentors, and alumni for peer support.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/community">
                      Join Community <ArrowRight className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}