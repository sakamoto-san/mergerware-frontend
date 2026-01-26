import React from 'react';
import { Linkedin, Twitter, Facebook, Instagram, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#050A14] pt-20 pb-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

                    {/* Contact Info */}
                    <div className="lg:col-span-1">
                        <h4 className="text-white font-bold mb-8 uppercase tracking-wider text-sm">CONTACT</h4>
                        <div className="text-gray-400 text-sm space-y-4 leading-relaxed">
                            <p className="font-semibold text-white">MergerWare Corporation</p>
                            <p>10 St James Ave, Flr. 11<br />Boston, MA 02116, USA.</p>
                            <div className="pt-2">
                                <p className="text-xs uppercase text-gray-500 mb-1">Email</p>
                                <a href="mailto:contact@mergerware.com" className="hover:text-[#00D2FF] transition-colors text-white">contact@mergerware.com</a>
                            </div>
                        </div>
                    </div>

                    {/* Solution */}
                    <div className="lg:col-span-1">
                        <h4 className="text-white font-bold mb-8 uppercase tracking-wider text-sm">SOLUTION</h4>
                        <ul className="text-gray-400 text-sm space-y-4">
                            <li><a href="#" className="hover:text-[#00D2FF] transition-colors hover:translate-x-1 inline-block duration-200">Deal Flow Management</a></li>
                            <li><a href="#" className="hover:text-[#00D2FF] transition-colors hover:translate-x-1 inline-block duration-200">Due Diligence Engine</a></li>
                            <li><a href="#" className="hover:text-[#00D2FF] transition-colors hover:translate-x-1 inline-block duration-200">Post Merger Integration</a></li>
                            <li><a href="#" className="hover:text-[#00D2FF] transition-colors hover:translate-x-1 inline-block duration-200">Security</a></li>
                            <li><a href="#" className="hover:text-[#00D2FF] transition-colors hover:translate-x-1 inline-block duration-200">Request Demo</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="lg:col-span-1">
                        <h4 className="text-white font-bold mb-8 uppercase tracking-wider text-sm">COMPANY</h4>
                        <ul className="text-gray-400 text-sm space-y-4">
                            <li><a href="#" className="hover:text-[#00D2FF] transition-colors hover:translate-x-1 inline-block duration-200">About Us</a></li>
                            <li><a href="#" className="hover:text-[#00D2FF] transition-colors hover:translate-x-1 inline-block duration-200">Customers</a></li>
                            <li><a href="#" className="hover:text-[#00D2FF] transition-colors hover:translate-x-1 inline-block duration-200">Partners</a></li>
                            <li><a href="#" className="hover:text-[#00D2FF] transition-colors hover:translate-x-1 inline-block duration-200">Careers</a></li>
                            <li><a href="#" className="hover:text-[#00D2FF] transition-colors hover:translate-x-1 inline-block duration-200">Contact Us</a></li>
                            <li><a href="#" className="hover:text-[#00D2FF] transition-colors hover:translate-x-1 inline-block duration-200">Security FAQ</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="lg:col-span-1">
                        <h4 className="text-white font-bold mb-8 uppercase tracking-wider text-sm">RESOURCES</h4>
                        <ul className="text-gray-400 text-sm space-y-4">
                            <li><a href="#" className="hover:text-[#00D2FF] transition-colors hover:translate-x-1 inline-block duration-200">Resources</a></li>
                            <li><a href="#" className="hover:text-[#00D2FF] transition-colors hover:translate-x-1 inline-block duration-200">Blogs</a></li>
                            <li><a href="#" className="hover:text-[#00D2FF] transition-colors hover:translate-x-1 inline-block duration-200">Webinars</a></li>
                            <li><a href="#" className="hover:text-[#00D2FF] transition-colors hover:translate-x-1 inline-block duration-200">Podcasts</a></li>
                            <li><a href="#" className="hover:text-[#00D2FF] transition-colors hover:translate-x-1 inline-block duration-200">News & Events</a></li>
                            <li><a href="#" className="hover:text-[#00D2FF] transition-colors hover:translate-x-1 inline-block duration-200">M&A Best Practices</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="lg:col-span-1">
                        <h4 className="text-white font-bold mb-8 uppercase tracking-wider text-sm">NEWSLETTER SIGN UP</h4>
                        <div className="flex flex-col space-y-6">
                            <div className="flex group">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="bg-white/5 border border-white/10 text-white text-sm px-4 py-3 rounded-l-md w-full focus:outline-none focus:border-[#00D2FF] transition-colors placeholder-gray-600"
                                />
                                <button className="bg-[#00D2FF] text-[#050A14] text-sm font-bold px-4 py-3 rounded-r-md hover:bg-[#33efff] transition-colors">
                                    Sign Up
                                </button>
                            </div>

                            <div className="flex space-x-6 pt-2">
                                <a href="#" className="text-gray-400 hover:text-[#00D2FF] transition-colors transform hover:scale-110"><Linkedin size={20} /></a>
                                <a href="#" className="text-gray-400 hover:text-[#00D2FF] transition-colors transform hover:scale-110"><Twitter size={20} /></a>
                                <a href="#" className="text-gray-400 hover:text-[#00D2FF] transition-colors transform hover:scale-110"><Facebook size={20} /></a>
                                <a href="#" className="text-gray-400 hover:text-[#00D2FF] transition-colors transform hover:scale-110"><Instagram size={20} /></a>
                            </div>

                            <div className="flex items-center text-white font-bold pt-4">
                                <div className="w-8 h-8 rounded-full bg-[#00D2FF]/10 flex items-center justify-center mr-3">
                                    <Phone size={16} className="text-[#00D2FF]" />
                                </div>
                                <span>+1800-267-7167</span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs text-center md:text-left">
                    <div className="mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} MergerWare. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
