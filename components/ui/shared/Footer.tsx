"use client";

import Link from 'next/link';
import { Sparkles, Github, Linkedin, Twitter, Youtube, Instagram, ArrowRight, Globe, BookOpen, Lightbulb, Code } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../button';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Subscribed with:', email);
    setEmail('');
  };

  return (
    <footer className="w-full border-t bg-primary/20 py-12 md:py-16">
      {/* Main footer content */}
      <div className="container mx-auto px-4 md:px-6">
        {/* Top section with logo and newsletter */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12 mb-12">
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                AI-Horizons
              </span>
            </Link>
            <p className="max-w-md text-sm">
              Empowering the next generation of AI leaders through education, mentorship, and hands-on experience with cutting-edge technologies.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="https://twitter.com" className=" hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com" className=" hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://github.com" className=" hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://youtube.com" className=" hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com" className=" hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className=" mb-4 text-sm">Subscribe to our newsletter for the latest updates, AI trends, and program announcements.</p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <div className="flex-grow">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <Button type="submit" className="shrink-0">
                Subscribe <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Middle section with links */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 mb-12 pt-8 border-t">
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <span className=" hover:text-primary transition-colors flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  <span>AI Fundamentals</span>
                </span>
              </li>
              <li>
                <span className=" hover:text-primary transition-colors flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" />
                  <span>Machine Learning</span>
                </span>
              </li>
              <li>
                <span className=" hover:text-primary transition-colors flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>Deep Learning</span>
                </span>
              </li>
              <li>
                <span className=" hover:text-primary transition-colors flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  <span>Natural Language Processing</span>
                </span>
              </li>
              <li>
                <span className=" hover:text-primary transition-colors flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  <span>Computer Vision</span>
                </span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/blog" className=" hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className=" hover:text-primary transition-colors">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className=" hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/webinars" className=" hover:text-primary transition-colors">
                  Webinars
                </Link>
              </li>
              <li>
                <Link href="#faq" className=" hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className=" hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className=" hover:text-primary transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className=" hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#partner" className=" hover:text-primary transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/help" className=" hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/help" className=" hover:text-primary transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/terms" className=" hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className=" hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className=" hover:text-primary transition-colors">
                  Accessibility
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className=" hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 pt-8 border-t text-sm">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className=" mb-2">Have questions or need assistance?</p>
            <p className=" mb-2">Email us at: <a href="mailto:info@ai-horizons.com" className="text-primary hover:underline">info@ai-horizons.com</a></p>
            <p className="">Call us: <a href="tel:+2349082716744" className="text-primary hover:underline">+2349082716744</a></p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Locations</h3>
            <p className=" mb-2"><strong>Headquarters:</strong> 29 Usuma Street, Maitama, Nigeria</p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <p className=" mb-2"><strong>Monday-Friday:</strong> 9:00 AM - 5:00 PM</p>
            <p className=""><strong>Saturday-Sunday:</strong> Closed</p>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="pt-8 border-t border-black">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col items-center md:items-start gap-1">
              <p className="text-center text-sm md:text-left">
                © {new Date().getFullYear()} AI-Horizons. All rights reserved.
              </p>

            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                Powered by <Link href="https://wootlab.ng" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4 text-primary">Wootlab Innovations</Link>
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:justify-end">
              <Link href="/terms" className="text-xs hover:underline underline-offset-4">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-xs hover:underline underline-offset-4">
                Privacy Policy
              </Link>
              <Link href="/cookie-policy" className="text-xs hover:underline underline-offset-4">
                Cookie Policy
              </Link>
              <Link href="/sitemap" className="text-xs hover:underline underline-offset-4">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}