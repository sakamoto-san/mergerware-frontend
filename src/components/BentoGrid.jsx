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
        <section id="solutions" className="py-24 bg-[#050A14] relative z-10 overflow-hidden">
            {/* Ambient Background Glow for depth */}
            <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-[#00D2FF]/5 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Solutions</h2>
                    <div className="w-20 h-1 bg-[#00D2FF] rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {solutions.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`${item.colSpan}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <GlowingCard className="group hover:shadow-[0_0_30px_rgba(0,210,255,0.15)] overflow-visible h-full">
                                <div className="flex flex-col items-center justify-center h-full w-full p-6 text-center gap-6 relative z-10">
                                    {/* Dynamic Background Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10" />

                                    {/* Icon / Illustration */}
                                    <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 ease-out py-2 relative">
                                        <div className="absolute inset-0 bg-electric-cyan/20 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <img src={item.icon} alt={item.title} className="w-full h-full object-contain drop-shadow-lg" />
                                    </div>

                                    {/* Text Content */}
                                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#00D2FF] transition-colors tracking-tight leading-tight">
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
