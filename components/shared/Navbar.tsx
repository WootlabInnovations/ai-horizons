import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative flex items-center">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                AI-Horizons
              </span>
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/programs" className="text-sm font-medium hover:text-primary transition-colors">
            Programs
          </Link>
          <Link href="/mentors" className="text-sm font-medium hover:text-primary transition-colors">
            Mentors
          </Link>
          <Link href="/apply" className="text-sm font-medium hover:text-primary transition-colors">
            Apply
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link 
            href="/register" 
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}