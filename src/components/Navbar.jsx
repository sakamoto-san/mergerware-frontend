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
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#050A14]/90 backdrop-blur-lg border-b border-white/5 py-2' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <span className="text-white text-2xl font-bold tracking-tight">Merger<span className="text-[#00D2FF]">Ware</span></span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden xl:block">
                        <div className="ml-10 flex items-center space-x-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 uppercase tracking-wide text-[11px] lg:text-xs"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#demo"
                                className="bg-[#00D2FF] text-[#050A14] hover:bg-[#33efff] px-6 py-2.5 rounded-md text-xs font-extrabold tracking-wider uppercase transition-colors duration-200 shadow-[0_0_15px_rgba(0,210,255,0.4)]"
                            >
                                REQUEST DEMO
                            </a>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="-mr-2 flex xl:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
                        className="xl:hidden bg-[#050A14] border-b border-white/10 shadow-xl overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-300 hover:text-white hover:bg-white/5 block px-3 py-3 rounded-md text-base font-medium border-l-2 border-transparent hover:border-[#00D2FF] transition-all"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#demo"
                                className="w-full text-center block bg-[#00D2FF] text-[#050A14] px-5 py-4 rounded-md text-sm font-bold mt-6 tracking-wider uppercase"
                                onClick={() => setIsOpen(false)}
                            >
                                REQUEST DEMO
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
