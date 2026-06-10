import React from 'react';
import { motion } from 'framer-motion';

const awards = [
    {
        title: "High Performer Spring 2024",
        org: "G2",
        color: "from-orange-500/10 to-red-500/10",
        iconColor: "text-red-500",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
        )
    },
    {
        title: "ISO 27001 Certified",
        org: "ISO",
        color: "from-blue-500/10 to-cyan-500/10",
        iconColor: "text-blue-500",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        )
    },
    {
        title: "Top M&A Software",
        org: "Capterra",
        color: "from-purple-500/10 to-pink-500/10",
        iconColor: "text-purple-500",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
            </svg>
        )
    },
    {
        title: "Microsoft Partner",
        org: "Microsoft",
        color: "from-green-500/10 to-emerald-500/10",
        iconColor: "text-green-500",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
            </svg>
        )
    }
];

const Awards = () => {
    return (
        <section className="py-24 bg-canvas border-t border-hairline">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="font-mono text-xs text-mute tracking-widest uppercase mb-2 block font-medium">Compliance & Recognition</span>
                    <h2 className="text-display-lg text-ink mb-3">Awards & certifications.</h2>
                    <p className="text-sm text-body font-light max-w-md mx-auto leading-relaxed">Recognized globally for excellence in product performance, user experience, and enterprise security.</p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {awards.map((award, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            className="bg-canvas border border-hairline rounded-md p-8 flex flex-col items-center justify-center shadow-level-2 hover:shadow-level-3 hover:border-hairline-strong transition-all duration-300 group"
                        >
                            <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${award.color} ${award.iconColor} flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                                {award.icon}
                            </div>
                            <h3 className="text-display-sm text-ink mb-2 leading-none">{award.org}</h3>
                            <p className="text-xs font-mono text-mute uppercase tracking-wider">{award.title}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Awards;
