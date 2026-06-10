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
        <section className="py-24 bg-primary text-on-primary relative overflow-hidden border-y border-hairline-strong/20">
            {/* Subtle mesh atmospheric backdrop inside the dark band */}
            <div className="absolute inset-0 top-0 left-0 w-full h-full -z-10 opacity-30 bg-gradient-to-br from-violet/20 via-transparent to-cyan/10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.08 }}
                            className="text-center group"
                        >
                            <div className="mb-3 flex justify-center items-baseline">
                                <motion.span
                                    className="text-5xl md:text-6xl font-semibold text-on-primary tracking-tighter"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.2 + (index * 0.08) }}
                                >
                                    {stat.value}
                                </motion.span>
                                <span className="text-2xl md:text-3xl font-mono text-cyan ml-0.5">{stat.suffix}</span>
                            </div>
                            <h4 className="text-xs font-mono uppercase tracking-wider text-mute mb-2">{stat.label}</h4>
                            <p className="text-xs text-mute max-w-[160px] mx-auto leading-relaxed font-light">
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
