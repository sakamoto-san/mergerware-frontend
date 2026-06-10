import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Solution', href: '#solutions' },
        { name: 'Customers', href: '#customers' },
        { name: 'Partners', href: '#partners' },
        { name: 'Resources', href: '#resources' },
        { name: 'Company', href: '#company' },
        { name: 'About Us', href: '#about' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-canvas/90 backdrop-blur-md border-b border-hairline py-3 shadow-level-2' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-10">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <span className="text-ink text-xl font-semibold tracking-tight">Merger<span className="text-link">Ware</span></span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden xl:block">
                        <div className="ml-10 flex items-center space-x-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-body hover:text-ink hover:bg-canvas-soft-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <span className="h-4 w-px bg-hairline mx-2" />
                            <a
                                href="#demo"
                                className="bg-primary text-on-primary hover:bg-black/90 px-4 py-1.5 rounded-sm text-sm font-medium transition-colors duration-200 shadow-level-1 inline-flex items-center justify-center h-8"
                            >
                                Request Demo
                            </a>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="-mr-2 flex xl:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-sm text-body hover:text-ink hover:bg-canvas-soft-2 focus:outline-none"
                        >
                            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="xl:hidden bg-canvas border-b border-hairline shadow-level-3 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-body hover:text-ink hover:bg-canvas-soft-2 block px-3 py-2.5 rounded-sm text-base font-medium border-l-2 border-transparent hover:border-link transition-all"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#demo"
                                className="w-full text-center block bg-primary text-on-primary px-5 py-3 rounded-sm text-sm font-semibold mt-6 shadow-level-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Request Demo
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
