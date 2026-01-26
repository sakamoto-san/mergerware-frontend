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
            description: "Transforming the way deals are done globally."
        },
        {
            title: "Information Security",
            image: securityImg,
            description: "Enterprise-grade security for your most sensitive data."
        },
        {
            title: "Digital M&A Strategies",
            image: strategiesImg,
            description: "Data-driven insights to guide your strategy."
        }
    ];

    return (
        <section className="py-20 bg-midnight-navy">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Enterprises Choose MergerWare</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {innovations.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-glass-slate backdrop-blur-glass border border-white/10 rounded-2xl overflow-hidden hover:border-electric-cyan/50 transition-colors duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="h-48 pt-8 flex items-center justify-center bg-white/5 relative overflow-hidden group">
                                <motion.img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-32 w-auto object-contain z-10 relative"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                />
                                {/* Glow behind image */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-electric-cyan/20 blur-[40px] rounded-full" />
                            </div>
                            <div className="p-8 text-center">
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                {/* Assuming user might want description or just title, adding implied description logic or empty if not in design explicitly, but spacing looks good with simple title */}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
