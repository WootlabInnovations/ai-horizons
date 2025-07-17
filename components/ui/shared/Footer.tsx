import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t bg-card py-6 md:py-12">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 md:items-start md:gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-lg font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              AI-Horizons
            </span>
          </Link>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            Empowering the next generation of AI leaders through education and mentorship.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 md:items-end md:justify-end">
          <nav className="flex gap-4 sm:gap-6">
            <Link href="/terms" className="text-xs hover:underline underline-offset-4">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-xs hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/contact" className="text-xs hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <p className="text-center text-sm text-muted-foreground md:text-right">
            © {new Date().getFullYear()} AI-Horizons. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}