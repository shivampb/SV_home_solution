import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
    return (
        <div className="bg-background-dark min-h-screen text-slate-300">

            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute inset-0 bg-background-dark">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-800/30 via-background-dark to-background-dark"></div>
                    {/* Subtle pattern or texture could go here */}
                </div>

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in-up">
                    <span className="block text-primary text-sm uppercase tracking-[0.3em] mb-4 font-bold">About Us</span>
                    <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight">
                        Design with <i className="font-light text-slate-400">Intention.</i>
                    </h1>
                    <p className="text-lg md:text-xl font-light text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        We are a collective of visionaries dedicated to redefining luxury living through bespoke architecture and meticulous interior design.
                    </p>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 px-6 relative">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <div className="relative group">
                        <div className="absolute -inset-4 border border-slate-700/50 rounded-sm translate-x-2 translate-y-2 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4"></div>
                        <div className="h-[500px] w-full bg-slate-800 overflow-hidden rounded-sm relative">
                            <img
                                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Minimalist design detail"
                                className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-4xl font-serif text-white">
                            Beyond Aesthetics:<br />
                            <span className="text-slate-500">The Art of Living.</span>
                        </h2>
                        <div className="space-y-6 text-slate-400 font-light leading-relaxed">
                            <p>
                                At SV Home Solution, we believe that true luxury lies in the unseen details. It is not merely about ornamentation, but about the seamless integration of form and function. Our philosophy is rooted in the belief that your environment shapes your consciousness.
                            </p>
                            <p>
                                From the initial concept sketches to the final material selection, every decision is guided by a commitment to excellence and a deep understanding of our clients' unique narratives. We don't just design spaces; we curate experiences that resonate with the soul.
                            </p>
                        </div>

                        <div className="pt-4">
                            <div className="grid grid-cols-2 gap-8 border-t border-slate-800 pt-8">
                                <div>
                                    <h4 className="text-3xl font-serif text-primary mb-1">15+</h4>
                                    <p className="text-xs uppercase tracking-widest text-slate-500">Years Experience</p>
                                </div>
                                <div>
                                    <h4 className="text-3xl font-serif text-primary mb-1">100+</h4>
                                    <p className="text-xs uppercase tracking-widest text-slate-500">Projects Completed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-surface-dark border-y border-slate-800 relative overflow-hidden">
                {/* Decorative Element */}
                <div className="absolute top-0 right-0 p-32 opacity-5 pointer-events-none">
                    <div className="w-96 h-96 border border-slate-500 rounded-full"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif text-white mb-4">Our Principles</h2>
                        <div className="w-24 h-1 bg-primary mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Value 1 */}
                        <div className="group p-8 border border-slate-800 hover:border-slate-600 transition-colors bg-background-dark/50">
                            <span className="material-icons text-4xl text-slate-600 group-hover:text-primary transition-colors mb-6">architecture</span>
                            <h3 className="text-xl font-serif text-white mb-4">Timeless Design</h3>
                            <p className="text-slate-400 font-light text-sm leading-relaxed">
                                We eschew fleeting trends in favor of enduring elegance. Our designs are crafted to stand the test of time, blending classic proportions with modern sensibilities.
                            </p>
                        </div>

                        {/* Value 2 */}
                        <div className="group p-8 border border-slate-800 hover:border-slate-600 transition-colors bg-background-dark/50">
                            <span className="material-icons text-4xl text-slate-600 group-hover:text-primary transition-colors mb-6">handyman</span>
                            <h3 className="text-xl font-serif text-white mb-4">Craftsmanship</h3>
                            <p className="text-slate-400 font-light text-sm leading-relaxed">
                                Quality is non-negotiable. We collaborate with master artisans and use only the finest materials to ensure that every texture and joinery is flawless.
                            </p>
                        </div>

                        {/* Value 3 */}
                        <div className="group p-8 border border-slate-800 hover:border-slate-600 transition-colors bg-background-dark/50">
                            <span className="material-icons text-4xl text-slate-600 group-hover:text-primary transition-colors mb-6">psychology</span>
                            <h3 className="text-xl font-serif text-white mb-4">Client-Centric</h3>
                            <p className="text-slate-400 font-light text-sm leading-relaxed">
                                Your vision is our blueprint. We listen deeply to understand your lifestyle, aspirations, and functional needs, translating them into a bespoke reality.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">
                        Ready to craft your legacy?
                    </h2>
                    <p className="text-slate-400 font-light mb-10 text-lg">
                        Let's discuss how we can transform your space into a masterpiece tailored to your life.
                    </p>
                    <Link to="/#contact" className="inline-flex items-center justify-center px-10 py-4 border border-slate-600 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-sm font-medium tracking-widest uppercase">
                        Get in Touch
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default About;
