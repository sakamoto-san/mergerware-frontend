import React from 'react';
import frame14 from '../assets/Frame 14.jpg';
import frame15 from '../assets/Frame 15.jpg';
import frame16 from '../assets/Frame 16.jpg';

const newsItems = [
    {
        id: 1,
        image: frame14,
        title: "The Future of Digital M&A Led Deal Strategies"
    },
    {
        id: 2,
        image: frame15,
        title: "HR M&A Roundtable National Conference"
    },
    {
        id: 3,
        image: frame16,
        title: "Latest M&A Trends in Packaging and Labeling"
    }
];

function NewsEvents() {
    return (
        <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
            <span className="font-mono text-xs text-mute tracking-widest uppercase mb-2 block font-medium">Updates & Insights</span>
            <h2 className="text-display-lg text-ink mb-12">
                News & events.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {newsItems.map((item) => (
                    <div key={item.id} className="group flex flex-col bg-canvas border border-hairline rounded-md overflow-hidden shadow-level-2 hover:shadow-level-3 hover:border-hairline-strong transition-all duration-300 cursor-pointer">
                        {/* Image Container */}
                        <div className="w-full h-52 overflow-hidden bg-canvas-soft-2 relative">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover scale-110 transition-transform duration-500 group-hover:scale-115"
                            />
                        </div>
                        {/* Content */}
                        <div className="p-6 flex flex-col flex-grow">
                            <span className="font-mono text-[10px] text-link mb-2 block uppercase font-medium tracking-wider">M&A Report</span>
                            <h3 className="text-display-sm text-ink group-hover:text-link transition-colors duration-200 leading-snug">
                                {item.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default NewsEvents;
