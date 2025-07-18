'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sparkles } from 'lucide-react';

export default function Navbar() {
    const pathname = usePathname();

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/programs', label: 'Programs' },
        { href: '/team', label: 'Mentors' },
        { href: '/help', label: 'Contact Us' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
            <div className="flex h-16 items-center justify-between px-4 md:px-6">
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

                <nav className="hidden md:flex items-center gap-4">
                    {navLinks.map(({ href, label }) => {
                        const isActive = pathname === href;
                        return (
                            <Link
                                key={href}
                                href={href}
                                className={`text-sm font-medium px-3 py-1 transition-colors ${isActive
                                    ? 'border-b-2 border-primary text-primary'
                                    : 'border-b-2 border-transparent hover:text-primary'
                                    }`}
                            >
                                {label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="flex items-center gap-4">
                    <Link
                        href="/apply"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                        Apply Now
                    </Link>
                </div>
            </div>
        </header>
    );
}