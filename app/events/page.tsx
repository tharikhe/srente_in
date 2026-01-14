
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Serente Electronics HK - Semiconductor Companies in Hong Kong",
    description: "Trusted distributor partners Such as Firstohm, Isocom and many more for BOM sourcing and electronics supply. Shop our extensive inventory here.",
};

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, MapPin, Clock, ArrowRight, Ticket, Share2, Users, Star } from 'lucide-react';

const events = [
    {
        id: 1,
        title: "Global Electronics Sourcing Expo 2025",
        date: "March 15-18, 2025",
        time: "09:00 AM - 06:00 PM",
        location: "Hong Kong Convention Center",
        description: "Join over 5,000 industry leaders for the premier electronics sourcing event in Asia. Discover the latest in semiconductors, passives, and supply chain innovation.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2070",
        type: "Expo",
        attendees: "5000+"
    },
    {
        id: 2,
        title: "Future of EV Components Summit",
        date: "April 22, 2025",
        time: "10:00 AM - 04:00 PM",
        location: "Shanghai Grand Hyatt, China",
        description: "An exclusive deep dive into the evolving landscape of Electric Vehicle electronics. Learn about high-voltage connectors, power management ICs, and battery tech.",
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=2072",
        type: "Summit",
        attendees: "800+"
    },
    {
        id: 3,
        title: "Serente Tech Workshop: Supply Chain Resilience",
        date: "May 10, 2025",
        time: "02:00 PM - 05:00 PM",
        location: "Webinar (Online)",
        description: "Our quarterly workshop focusing on strategies to mitigate shortage risks. Expert panel discussions on inventory forecasting and alternative part sourcing.",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=2070",
        type: "Webinar",
        attendees: "1200+"
    },
    {
        id: 4,
        title: "Shenzhen Electronics Fair",
        date: "June 05-08, 2025",
        time: "09:00 AM - 05:00 PM",
        location: "Shenzhen Exhibition Center",
        description: "Explore the heart of the electronics world. Meet our team at Booth 4A-12 to discuss your component needs and see our latest stock arrivals.",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2664",
        type: "Fair",
        attendees: "10000+"
    }
];

export default function EventsPage() {
    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Hero Section */}
            <div className="relative bg-[#0F172A] py-24 sm:py-32 overflow-hidden">
                {/* Abstract Background Shapes */}
                <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-brand-gold/20 rounded-full blur-3xl" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-sm font-semibold mb-6">
                            <Calendar className="w-4 h-4" />
                            <span>Upcoming Industry Events</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                            Connect with <span className="text-brand-teal">Serente</span> <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">Around the World</span>
                        </h1>
                        <p className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
                            Stay updated with the latest expos, summits, and workshops. Join us to explore new technologies, discuss supply chain strategies, and build lasting partnerships.
                        </p>
                    </div>
                </div>
            </div>

            {/* Events Grid */}
            <div className="container mx-auto px-4 -mt-16 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {events.map((event) => (
                        <div key={event.id} className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full hover:-translate-y-1">
                            {/* Image Section */}
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-gray-900 text-xs font-bold rounded-full shadow-lg uppercase tracking-wider">
                                        {event.type}
                                    </span>
                                </div>
                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                    <h3 className="text-2xl font-bold leading-tight mb-2 group-hover:text-brand-gold transition-colors">{event.title}</h3>
                                    <div className="flex items-center gap-4 text-sm text-gray-200">
                                        <div className="flex items-center gap-1.5">
                                            <MapPin className="w-4 h-4 text-brand-teal" />
                                            <span>{event.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 text-gray-600">
                                            <div className="p-2 bg-brand-teal/10 rounded-lg text-brand-teal">
                                                <Calendar className="w-5 h-5" />
                                            </div>
                                            <span className="font-semibold">{event.date}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-600">
                                            <div className="p-2 bg-brand-gold/10 rounded-lg text-brand-gold">
                                                <Clock className="w-5 h-5" />
                                            </div>
                                            <span className="font-medium">{event.time}</span>
                                        </div>
                                    </div>
                                    <div className="text-center bg-gray-50 p-3 rounded-xl border border-gray-100 min-w-[80px]">
                                        <p className="text-xs text-gray-400 uppercase font-bold tracking-wide mb-1">Attendees</p>
                                        <div className="flex items-center justify-center gap-1 text-gray-900 font-bold">
                                            <Users className="w-3.5 h-3.5 text-brand-teal" />
                                            <span>{event.attendees}</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-600 leading-relaxed mb-6 flex-grow border-t border-gray-100 pt-6">
                                    {event.description}
                                </p>

                                <div className="flex items-center gap-4 pt-4 mt-auto">
                                    <button className="flex-grow bg-gray-900 text-white py-3.5 px-6 rounded-xl font-semibold hover:bg-brand-teal transition-colors flex items-center justify-center gap-2 group/btn">
                                        <span>Register Now</span>
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                    <button className="p-3.5 rounded-xl border-2 border-gray-100 text-gray-400 hover:text-brand-gold hover:border-brand-gold transition-all duration-300">
                                        <Share2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 mb-10 p-12 rounded-3xl bg-gradient-to-r from-brand-teal to-brand-teal-dark text-white text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-12 translate-x-12" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/20 rounded-full blur-3xl translate-y-12 -translate-x-12" />

                    <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium">
                            <Star className="w-4 h-4 text-brand-gold" />
                            <span>Host Your Own Event?</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold">Partner with Serente Electronics</h2>
                        <p className="text-brand-surface/90 text-lg">
                            Looking for a sponsor or a keynote speaker for your next electronics conference? we'd love to collaborate.
                        </p>
                        <Link href="/contact" className="inline-block bg-white text-brand-teal font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover:bg-brand-gold hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
