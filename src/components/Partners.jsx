import React from 'react';

const partners = [
    "Microsoft", "AWS", "Deloitte", "KPMG", "PwC", "Accenture", "Oracle", "SAP"
];

const Partners = () => {
    return (
        <div className="py-10 bg-midnight-navy border-y border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-6">
                <p className="text-center text-gray-400 text-sm font-medium tracking-widest uppercase">Trusted by Industry Leaders</p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="py-2 animate-marquee whitespace-nowrap flex items-center">
                    {partners.concat(partners).map((partner, index) => (
                        <span key={index} className="mx-12 text-2xl font-bold text-white/30 hover:text-white/80 transition-colors cursor-default uppercase tracking-wider">
                            {partner}
                        </span>
                    ))}
                </div>

                {/* Duplicate for seamless loop */}
                <div className="absolute top-0 py-2 animate-marquee2 whitespace-nowrap flex items-center">
                    {partners.concat(partners).map((partner, index) => (
                        <span key={index + 'dup'} className="mx-12 text-2xl font-bold text-white/30 hover:text-white/80 transition-colors cursor-default uppercase tracking-wider">
                            {partner}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Partners;
