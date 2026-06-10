import React from 'react';

const partners = [
    "Microsoft", "AWS", "Deloitte", "KPMG", "PwC", "Accenture", "Oracle", "SAP"
];

const Partners = () => {
    return (
        <div className="py-8 bg-canvas border-y border-hairline overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-4">
                <p className="text-center text-mute font-mono text-[11px] font-medium tracking-widest uppercase">Trusted by Industry Leaders</p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="py-2 animate-marquee whitespace-nowrap flex items-center">
                    {partners.concat(partners).map((partner, index) => (
                        <span key={index} className="mx-12 text-lg font-bold text-mute hover:text-ink transition-colors duration-200 cursor-default uppercase tracking-wider font-sans">
                            {partner}
                        </span>
                    ))}
                </div>

                {/* Duplicate for seamless loop */}
                <div className="absolute top-0 py-2 animate-marquee2 whitespace-nowrap flex items-center">
                    {partners.concat(partners).map((partner, index) => (
                        <span key={index + 'dup'} className="mx-12 text-lg font-bold text-mute hover:text-ink transition-colors duration-200 cursor-default uppercase tracking-wider font-sans">
                            {partner}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Partners;
