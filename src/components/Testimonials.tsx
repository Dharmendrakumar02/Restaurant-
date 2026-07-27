import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Eleanor Vance',
    role: 'Food Critic',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop',
    text: 'An absolute revelation. The tasting menu takes you on a journey of textures and flavors that are both surprising and deeply comforting. Flavor Haven sets a new standard for fine dining.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Local Guide',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop',
    text: 'I celebrated my 10th anniversary here, and the staff made it unforgettable. The Wagyu beef was cooked to absolute perfection, and the wine pairing was exquisite.',
    rating: 5
  },
  {
    name: 'Sarah Jenkins',
    role: 'Frequent Guest',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop',
    text: 'The ambiance is sophisticated yet welcoming. You never feel rushed. It’s my go-to place when I want to impress clients or just treat myself to an extraordinary meal.',
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-card relative">
      {/* Decorative quotes */}
      <div className="absolute top-10 left-10 text-border/20 pointer-events-none">
        <Quote className="h-40 w-40" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] text-primary uppercase tracking-[0.2em] mb-2 block">Reviews</span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">Guest Experiences</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <Card className="h-full bg-background/50 border-white/10 rounded-none hover:border-primary/50 transition-colors">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <p className="text-foreground/60 font-light italic leading-relaxed mb-8 flex-1 text-sm">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-none object-cover border border-white/10"
                    />
                    <div>
                      <h4 className="font-playfair text-foreground">{testimonial.name}</h4>
                      <p className="text-[10px] uppercase tracking-widest text-foreground/40">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
