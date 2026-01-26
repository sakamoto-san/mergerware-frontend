import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { label: "Deal Success Rate", value: "50", suffix: "%", description: "Increase in deal success probability" },
    { label: "Faster Execution", value: "40", suffix: "%", description: "Reduction in deal cycle time" },
    { label: "Enterprises", value: "100", suffix: "+", description: "Global enterprises trust us" },
    { label: "Deal Value", value: "50", suffix: "B+", description: "Total deal value managed" }
];

const Stats = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric-cyan/5 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-royal-blue/5 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <div className="mb-2 flex justify-center items-baseline">
                                <motion.span
                                    className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:from-electric-cyan group-hover:to-royal-blue transition-all duration-300"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                                >
                                    {stat.value}
                                </motion.span>
                                <span className="text-2xl md:text-4xl font-bold text-electric-cyan ml-1">{stat.suffix}</span>
                            </div>
                            <h4 className="text-lg font-semibold text-white mb-2">{stat.label}</h4>
                            <p className="text-sm text-gray-400 max-w-[150px] mx-auto leading-relaxed">
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
