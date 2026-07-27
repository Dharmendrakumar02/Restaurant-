import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';

export function Chef() {
  return (
    <section id="chef" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1884&auto=format&fit=crop" 
                alt="Executive Chef Julian Rossi" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-4 border-primary/20 m-4 rounded-sm pointer-events-none"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div>
              <span className="text-[10px] text-primary uppercase tracking-[0.2em] mb-2 block">The Mastermind</span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">Chef Julian Rossi</h2>
              <p className="text-[10px] uppercase tracking-widest text-foreground/40 font-medium mb-8">Executive Chef & Founder</p>
              
              <div className="space-y-4 text-foreground/60 font-light text-sm leading-relaxed">
                <p>
                  With over two decades of culinary experience across Europe and Asia, Chef Julian brings a unique global perspective to Flavor Haven. His philosophy is rooted in the deep respect for natural ingredients, transforming them into artful compositions.
                </p>
                <p>
                  "Food is an emotional experience. I want our guests to taste the passion, the history, and the innovation in every bite. We don't just serve meals; we craft memories."
                </p>
              </div>
            </div>
            
            <div className="pt-6 border-t border-white/10 flex items-center gap-6">
              <div className="font-playfair text-3xl italic text-primary opacity-80" style={{ fontFamily: '"Playfair Display", serif' }}>Julian Rossi</div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
