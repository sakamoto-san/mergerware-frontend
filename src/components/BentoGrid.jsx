import React from 'react';
import { motion } from 'framer-motion';
import { GlowingCard } from './ui/GlowingCard';

// Illustrations
import dealFlowImg from '../assets/undraw_handshake-deal_nwk6 1.svg';
import dueDiligenceImg from '../assets/undraw_version-control_e4yu 1.svg';
import integrationImg from '../assets/undraw_mcp-server_7kvc 1.svg';
import securityImg from '../assets/undraw_secure-server_lz9x 1.svg';
import playbookImg from '../assets/undraw_books_wxzz 1.svg';
import customerSuccessImg from '../assets/undraw_success_288d 1.svg';

const BentoGrid = () => {
    const solutions = [
        {
            title: "Deal Flow Management",
            icon: dealFlowImg,
            colSpan: "md:col-span-4",
        },
        {
            title: "Due Diligence Engine",
            icon: dueDiligenceImg,
            colSpan: "md:col-span-4",
        },
        {
            title: "Post Merger Integration",
            icon: integrationImg,
            colSpan: "md:col-span-4",
        },
        {
            title: "Platform Security",
            icon: securityImg,
            colSpan: "md:col-span-4",
        },
        {
            title: "M&A Playbook",
            icon: playbookImg,
            colSpan: "md:col-span-4",
        },
        {
            title: "Customer Success",
            icon: customerSuccessImg,
            colSpan: "md:col-span-4",
        }
    ];

    return (
        <section id="solutions" className="py-24 bg-canvas-soft relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <span className="font-mono text-xs text-mute tracking-widest uppercase mb-2 block">Enterprise Capabilities</span>
                    <h2 className="text-display-lg text-ink mb-4 tracking-tight">Solutions.</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {solutions.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`${item.colSpan}`}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                        >
                            <GlowingCard className="group overflow-visible h-full">
                                <div className="flex flex-col items-center justify-between h-full w-full p-8 text-center gap-8 relative z-10 min-h-[300px]">
                                    {/* Clean Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-canvas-soft-2/50 to-transparent opacity-85 group-hover:opacity-100 transition-opacity duration-500 rounded-md -z-10" />

                                    {/* Illustration Container */}
                                    <div className="w-32 h-32 md:w-36 md:h-36 flex-shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-500 ease-out relative">
                                        <div className="absolute inset-0 bg-link/5 blur-[25px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <img src={item.icon} alt={item.title} className="w-full h-full object-contain filter drop-shadow-sm" />
                                    </div>

                                    {/* Card Header */}
                                    <h3 className="text-display-sm text-ink group-hover:text-link transition-colors duration-200 tracking-tight leading-tight">
                                        {item.title}
                                    </h3>
                                </div>
                            </GlowingCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BentoGrid;
