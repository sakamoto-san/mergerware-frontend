import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="demo" className="py-24 bg-canvas-soft border-t border-hairline">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

                    {/* Left Side Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="font-mono text-xs text-mute tracking-widest uppercase mb-2 block font-medium">Request Demo</span>
                        <h2 className="text-display-lg md:text-[40px] text-ink mb-6 leading-tight">
                            Ready to transform your deal lifecycle?
                        </h2>
                        <p className="text-body-lg text-body max-w-md leading-relaxed font-light">
                            Contact our team to request a personalized demonstration and see how MergerWare fits into your organization's workflow.
                        </p>
                    </motion.div>

                    {/* Right Side Form (Sleek Auth-Form Card style) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-canvas border border-hairline rounded-lg p-8 sm:p-10 shadow-level-4"
                    >
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full bg-canvas border border-hairline text-ink px-4 py-2 rounded-sm text-sm font-light focus:outline-none focus:border-link focus:ring-1 focus:ring-link placeholder-mute transition-colors h-10"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Company"
                                    className="w-full bg-canvas border border-hairline text-ink px-4 py-2 rounded-sm text-sm font-light focus:outline-none focus:border-link focus:ring-1 focus:ring-link placeholder-mute transition-colors h-10"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Work Email"
                                    className="w-full bg-canvas border border-hairline text-ink px-4 py-2 rounded-sm text-sm font-light focus:outline-none focus:border-link focus:ring-1 focus:ring-link placeholder-mute transition-colors h-10"
                                />
                            </div>
                            <div>
                                <div className="relative">
                                    <select
                                        className="w-full bg-canvas border border-hairline text-body px-4 py-2 rounded-sm text-sm font-light focus:outline-none focus:border-link focus:ring-1 focus:ring-link transition-colors h-10 appearance-none cursor-pointer"
                                    >
                                        <option value="" disabled selected>Country</option>
                                        <option value="us">United States</option>
                                        <option value="uk">United Kingdom</option>
                                        <option value="in">India</option>
                                        <option value="sg">Singapore</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-body">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-on-primary font-medium rounded-sm hover:bg-primary/90 transition-colors mt-6 shadow-level-2 cursor-pointer h-10 text-sm"
                            >
                                Submit Request
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
