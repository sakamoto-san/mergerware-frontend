import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="demo" className="py-20 bg-midnight-navy">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Left Side Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Ready to Transform Your Deal Lifecycle?
                        </h2>
                        <p className="text-slate-400 text-lg md:text-xl max-w-md">
                            Contact our team to request a personalized demo of the platform.
                        </p>
                    </motion.div>

                    {/* Right Side Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-transparent"
                    >
                        <form className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full bg-white/10 border border-white/10 text-white px-4 py-3 rounded-md focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan placeholder-gray-500 transition-colors"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Company"
                                    className="w-full bg-white/10 border border-white/10 text-white px-4 py-3 rounded-md focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan placeholder-gray-500 transition-colors"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Work Email"
                                    className="w-full bg-white/10 border border-white/10 text-white px-4 py-3 rounded-md focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan placeholder-gray-500 transition-colors"
                                />
                            </div>
                            <div>
                                <select
                                    className="w-full bg-white/10 border border-white/10 text-gray-400 px-4 py-3 rounded-md focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan transition-colors appearance-none"
                                >
                                    <option value="" disabled selected>Country</option>
                                    <option value="us">United States</option>
                                    <option value="uk">United Kingdom</option>
                                    <option value="in">India</option>
                                    <option value="sg">Singapore</option>
                                    {/* Add more countries as needed */}
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#00D2FF] text-[#050A14] font-bold py-3 rounded-md hover:bg-[#33efff] transition-colors mt-2 shadow-[0_0_15px_rgba(0,210,255,0.3)] hover:shadow-[0_0_25px_rgba(0,210,255,0.5)] cursor-pointer"
                            >
                                Submit
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
