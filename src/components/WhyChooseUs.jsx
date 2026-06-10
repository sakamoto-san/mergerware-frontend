import React from 'react';
import { motion } from 'framer-motion';

// Illustrations for Why Choose Us
import revolutionizingImg from '../assets/undraw_fast-changing-world_3ee6 1.svg'; // World map / revolution
import securityImg from '../assets/undraw_secure-password_9qv4 1.svg'; // Shield/Security
import strategiesImg from '../assets/undraw_pie-chart_eo9h 1.svg'; // Chart

const WhyChooseUs = () => {
    const innovations = [
        {
            title: "Revolutionizing M&A",
            image: revolutionizingImg,
            description: "Transforming the way deals are done globally with automated workflows."
        },
        {
            title: "Information Security",
            image: securityImg,
            description: "Enterprise-grade security, access logs, and compliance for your most sensitive data."
        },
        {
            title: "Digital M&A Strategies",
            image: strategiesImg,
            description: "Data-driven insights and playbooks to structure and guide your strategy."
        }
    ];

    return (
        <section id="about" className="py-24 bg-canvas-soft">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <span className="font-mono text-xs text-mute tracking-widest uppercase mb-2 block">Security & Performance</span>
                    <h2 className="text-display-lg text-ink mb-4">Why enterprises choose MergerWare.</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {innovations.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-canvas border border-hairline rounded-md overflow-hidden shadow-level-2 hover:shadow-level-3 hover:border-hairline-strong transition-all duration-300 flex flex-col"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="h-48 pt-8 flex items-center justify-center bg-canvas-soft-2/40 relative overflow-hidden group">
                                <motion.img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-32 w-auto object-contain z-10 relative"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                />
                                {/* Soft Light Glow behind image */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-link/5 blur-[30px] rounded-full" />
                            </div>
                            <div className="p-8 text-center flex-grow flex flex-col justify-start">
                                <h3 className="text-display-sm text-ink mb-3">{item.title}</h3>
                                <p className="text-sm text-body leading-relaxed font-light">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
