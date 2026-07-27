import { motion } from 'motion/react';
import { Award, Users, Utensils, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  { icon: Award, label: 'Years Experience', value: '20+' },
  { icon: Users, label: 'Happy Guests', value: '5000+' },
  { icon: Utensils, label: 'Signature Dishes', value: '100+' },
  { icon: Star, label: 'Google Rating', value: '4.9' },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="text-[10px] text-primary uppercase tracking-[0.2em] mb-2 block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
                A Culinary Legacy of <br/> Passion & Flavor
              </h2>
              <p className="text-foreground/60 leading-relaxed font-light mb-4 text-sm">
                Founded in 2004, Flavor Haven began with a simple mission: to bring extraordinary culinary experiences to our guests using only the freshest, locally sourced ingredients.
              </p>
              <p className="text-foreground/60 leading-relaxed font-light text-sm">
                Our vision is to continue pushing the boundaries of modern cuisine while staying true to the timeless traditions of fine dining. Every dish we serve is a testament to our dedication to quality, creativity, and impeccable service.
              </p>
            </div>
            
            <div className="pt-6 border-t border-white/10">
              <p className="font-playfair text-xl italic text-primary mb-2">"Cooking is an art, and every plate is a canvas."</p>
              <p className="text-[10px] uppercase tracking-widest text-foreground/40">— Executive Chef, Julian Rossi</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070&auto=format&fit=crop" 
                alt="Chef preparing a dish" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-4 border-primary/20 m-6 rounded-sm pointer-events-none"></div>
            </div>
            
            {/* Floating Award Badge */}
            <div className="absolute -bottom-10 -left-10 bg-card p-6 rounded-sm shadow-2xl border border-border hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <p className="font-playfair font-bold text-xl">Michelin Star</p>
                  <p className="text-xs text-foreground/60 uppercase tracking-wider">Excellence 2023</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center md:justify-between items-center gap-12 mt-24 px-4 md:px-12"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex gap-12 items-center">
              <div className="text-center md:text-left">
                <div className="text-3xl font-playfair text-primary mb-1">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40">{stat.label}</div>
              </div>
              {idx < stats.length - 1 && <div className="w-[1px] h-10 bg-white/10 hidden md:block"></div>}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
