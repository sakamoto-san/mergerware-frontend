import React from 'react';
import { Linkedin, Twitter, Facebook, Instagram, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-canvas pt-24 pb-12 border-t border-hairline relative z-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

                    {/* Contact Info */}
                    <div className="lg:col-span-1">
                        <h4 className="text-ink font-mono font-semibold mb-6 uppercase tracking-widest text-[11px]">CONTACT</h4>
                        <div className="text-body text-sm space-y-4 leading-relaxed font-light">
                            <p className="font-medium text-ink">MergerWare Corporation</p>
                            <p>10 St James Ave, Flr. 11<br />Boston, MA 02116, USA.</p>
                            <div className="pt-2">
                                <p className="text-[10px] uppercase font-mono text-mute mb-1">Email</p>
                                <a href="mailto:contact@mergerware.com" className="hover:text-link transition-colors text-ink font-normal">contact@mergerware.com</a>
                            </div>
                        </div>
                    </div>

                    {/* Solution */}
                    <div className="lg:col-span-1">
                        <h4 className="text-ink font-mono font-semibold mb-6 uppercase tracking-widest text-[11px]">SOLUTION</h4>
                        <ul className="text-body text-sm space-y-3.5 font-light">
                            <li><a href="#" className="hover:text-ink transition-colors duration-200">Deal Flow Management</a></li>
                            <li><a href="#" className="hover:text-ink transition-colors duration-200">Due Diligence Engine</a></li>
                            <li><a href="#" className="hover:text-ink transition-colors duration-200">Post Merger Integration</a></li>
                            <li><a href="#" className="hover:text-ink transition-colors duration-200">Security</a></li>
                            <li><a href="#" className="hover:text-ink transition-colors duration-200">Request Demo</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="lg:col-span-1">
                        <h4 className="text-ink font-mono font-semibold mb-6 uppercase tracking-widest text-[11px]">COMPANY</h4>
                        <ul className="text-body text-sm space-y-3.5 font-light">
                            <li><a href="#" className="hover:text-ink transition-colors duration-200">About Us</a></li>
                            <li><a href="#" className="hover:text-ink transition-colors duration-200">Customers</a></li>
                            <li><a href="#" className="hover:text-ink transition-colors duration-200">Partners</a></li>
                            <li><a href="#" className="hover:text-ink transition-colors duration-200">Careers</a></li>
                            <li><a href="#" className="hover:text-ink transition-colors duration-200">Contact Us</a></li>
                            <li><a href="#" className="hover:text-ink transition-colors duration-200">Security FAQ</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="lg:col-span-1">
                        <h4 className="text-ink font-mono font-semibold mb-6 uppercase tracking-widest text-[11px]">RESOURCES</h4>
                        <ul className="text-body text-sm space-y-3.5 font-light">
                            <li><a href="#" className="hover:text-ink transition-colors duration-200">Resources</a></li>
                            <li><a href="#" className="hover:text-ink transition-colors duration-200">Blogs</a></li>
                            <li><a href="#" className="hover:text-ink transition-colors duration-200">Webinars</a></li>
                            <li><a href="#" className="hover:text-ink transition-colors duration-200">Podcasts</a></li>
                            <li><a href="#" className="hover:text-ink transition-colors duration-200">News & Events</a></li>
                            <li><a href="#" className="hover:text-ink transition-colors duration-200">M&A Best Practices</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="lg:col-span-1">
                        <h4 className="text-ink font-mono font-semibold mb-6 uppercase tracking-widest text-[11px]">NEWSLETTER</h4>
                        <div className="flex flex-col space-y-5">
                            <div className="flex flex-col space-y-2.5">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="bg-canvas border border-hairline text-ink text-sm px-4 py-2 rounded-sm w-full focus:outline-none focus:border-link focus:ring-1 focus:ring-link placeholder-mute h-10 transition-colors"
                                />
                                <button className="bg-primary text-on-primary text-sm font-medium px-4 py-2 rounded-sm hover:bg-black/90 transition-colors h-10 shadow-level-1 cursor-pointer">
                                    Subscribe
                                </button>
                            </div>

                            <div className="flex space-x-5 pt-1">
                                <a href="#" className="text-mute hover:text-ink transition-colors"><Linkedin size={18} /></a>
                                <a href="#" className="text-mute hover:text-ink transition-colors"><Twitter size={18} /></a>
                                <a href="#" className="text-mute hover:text-ink transition-colors"><Facebook size={18} /></a>
                                <a href="#" className="text-mute hover:text-ink transition-colors"><Instagram size={18} /></a>
                            </div>

                            <div className="flex items-center text-ink font-medium pt-2">
                                <div className="w-8 h-8 rounded-full bg-canvas-soft border border-hairline flex items-center justify-center mr-3 shadow-sm">
                                    <Phone size={14} className="text-body" />
                                </div>
                                <span className="font-mono text-sm tracking-tight">+1800-267-7167</span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="border-t border-hairline pt-8 flex flex-col md:flex-row justify-between items-center text-mute text-xs text-center md:text-left">
                    <div className="mb-4 md:mb-0 font-light">
                        &copy; {new Date().getFullYear()} MergerWare Corporation. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
