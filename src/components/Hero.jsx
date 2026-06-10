import React from 'react';
import { motion } from 'framer-motion';
import mLogo from '../assets/Gemini_Generated_Image_mqnn1jmqnn1jmqnn-Photoroom 1.svg';

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-canvas-soft antialiased">
            {/* Vercel Mesh Gradient Backdrop */}
            <div className="absolute inset-0 top-0 left-0 w-full h-[75%] -z-10 bg-mesh-gradient opacity-90" />

            {/* Subtle hairline grid lines overlay */}
            <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-left"
                    >
                        <h1 className="text-display-xl md:text-5xl lg:text-[56px] font-semibold text-ink leading-[1.05] mb-6 tracking-tighter">
                            M&A deal execution goes{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gradient-develop-start to-gradient-develop-end">
                                beyond identifying deals.
                            </span>
                        </h1>
                        
                        <p className="text-body-lg text-body mb-10 max-w-xl leading-relaxed">
                            Accelerate each stage of your deal lifecycle by ensuring a deal success rate of up to 50%.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.a
                                href="#demo"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-primary text-on-primary hover:bg-black/90 px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-300 shadow-level-3 text-center"
                            >
                                Request Demo
                            </motion.a>
                            <motion.a
                                href="#solutions"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-canvas text-ink hover:bg-canvas-soft-2 px-8 py-3.5 border border-hairline rounded-full text-sm font-medium transition-all duration-300 shadow-level-2 text-center"
                            >
                                Explore Solutions
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Right Content - Glowing Logo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative flex justify-center items-center h-full"
                    >
                        {/* Soft Light Mode Glow behind logo */}
                        <div className="absolute w-[80%] h-[80%] bg-gradient-to-tr from-link/10 via-violet/5 to-cyan/10 blur-[80px] rounded-full" />
                        
                        <motion.div
                            animate={{
                                y: [-12, 12, -12],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative z-10 w-full max-w-md"
                        >
                            <img
                                src={mLogo}
                                alt="MergerWare Logo"
                                className="w-full h-auto drop-shadow-xl filter saturate-110"
                            />
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
