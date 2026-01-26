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
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">
                News & Events
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {newsItems.map((item) => (
                    <div key={item.id} className="relative group overflow-hidden rounded-2xl cursor-pointer">
                        {/* Image Container */}
                        <div className="w-full h-80 relative">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transform scale-110 transition-transform duration-500 group-hover:scale-125"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-6">
                                <h3 className="text-white text-xl font-bold leading-tight drop-shadow-lg transform transition-transform duration-300 group-hover:translate-x-2">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default NewsEvents;
