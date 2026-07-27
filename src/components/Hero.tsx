import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-primary text-[10px] uppercase tracking-[0.3em] mb-4 block">Welcome to Flavor Haven</span>
          <h1 className="text-5xl md:text-7xl lg:text-7xl font-playfair text-foreground leading-[1.1] mb-6">
            Experience <span className="text-primary italic">Fine Dining</span> <br/> Like Never Before
          </h1>
          <p className="text-lg text-foreground/60 max-w-lg mx-auto mb-10 leading-relaxed font-light">
            Fresh ingredients, unforgettable flavors, and exceptional hospitality. Embark on a culinary journey that tantalizes your senses.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#reservation" className="inline-flex items-center justify-center text-xs px-8 py-6 rounded-none font-bold uppercase tracking-widest bg-primary text-primary-foreground hover:bg-primary/90">
            Reserve Your Table
          </a>
          <a href="#menu" className="inline-flex items-center justify-center text-xs px-8 py-6 rounded-none font-bold uppercase tracking-widest border border-border text-foreground hover:border-primary transition-colors bg-transparent hover:bg-muted">
            Explore Menu
          </a>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a href="#about" className="text-primary/70 hover:text-primary transition-colors flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest mb-2 font-medium">Scroll Discover</span>
          <ChevronDown className="h-6 w-6" />
        </a>
      </motion.div>
    </section>
  );
}
