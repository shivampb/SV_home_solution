import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-background-light dark:bg-background-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-6 block">
              Our Ethos
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 leading-tight">
              Architecture is not just about structure, but about how a space{' '}
              <span className="italic text-slate-400">feels</span>.
            </h2>
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg font-light">
              <p>
                At SV Home Solution, we reject the superfluous. Every line drawn and every
                material selected serves a purpose. We believe in the quiet power
                of negative space and the warmth of natural materials.
              </p>
              <p>
                Our approach is deeply collaborative. We listen to the unspoken
                desires of our clients to craft environments that are not only
                visually stunning but emotionally resonant. It is a dialogue
                between the inhabitant and the habitat.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-slate-800 pt-8">
              <div>
                <h4 className="text-4xl font-light text-white mb-1">15+</h4>
                <p className="text-xs text-slate-500 uppercase tracking-wider">
                  Years of Experience
                </p>
              </div>
              <div>
                <h4 className="text-4xl font-light text-white mb-1">42</h4>
                <p className="text-xs text-slate-500 uppercase tracking-wider">
                  Design Awards
                </p>
              </div>
            </div>
          </div>

          {/* Image Composition */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5REV-eKAwjtZP3q9cOLf74ayPyfk54Zekg15bt1HCLnFMkG0RQc4HlPwyuz-5jjXkm9wSqbtooLTgwSPVU8UQi9H2O_uZgjoUcN6MeBioGrjwYGXJFgqXZJpC08t_J5HgSTCUEGzA_V0n3R-ZN_jSs3OPVURbvSUG6wOD-OitPgATLoQzYHeCCEyVUfGct9QBS3lva9XAYzbpI-7L6gNcvzMCDUgUkDfSip9RXpyw7bhoOd898auNcbu4_1q_A9DAgV6d9mWCwGw"
                alt="Minimalist beige interior"
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-1000 ease-out"
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l border-b border-primary/30 hidden lg:block pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;