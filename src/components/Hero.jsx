import React from 'react';
import { motion } from 'framer-motion';
import { Spotlight } from './ui/Spotlight';
import mLogo from '../assets/Gemini_Generated_Image_mqnn1jmqnn1jmqnn-Photoroom 1.svg';

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-[#050A14] antialiased">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#00D2FF" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-left"
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                            M&A Deal Execution Goes <br />
                            <span className="text-[#00D2FF]">
                                Beyond Identifying Deals
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-xl leading-relaxed font-light">
                            Accelerate each stage of your deal lifecycle by ensuring a deal success rate of up to 50%.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 210, 255, 0.5)" }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#00D2FF] text-[#050A14] px-10 py-4 rounded-md font-bold text-lg shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all duration-300 hover:bg-[#33efff]"
                            >
                                REQUEST DEMO
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Right Content - Glowing M Logo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative flex justify-center items-center h-full"
                    >
                        <motion.div
                            animate={{
                                y: [-15, 15, -15],
                                rotate: [0, 2, -2, 0],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative z-10 w-full max-w-lg"
                        >
                            <img
                                src={mLogo}
                                alt="MergerWare Logo Animation"
                                className="w-full h-auto drop-shadow-2xl brightness-110 contrast-125"
                            />
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
