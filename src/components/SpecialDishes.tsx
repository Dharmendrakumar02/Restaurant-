import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

const specialDishes = [
  {
    name: "Lobster Thermidor",
    description: "Fresh Maine lobster baked in a rich cognac cream sauce, topped with Gruyère cheese and served with truffle asparagus.",
    price: "$85",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1559742811-822873691df8?q=80&w=1887&auto=format&fit=crop"
  },
  {
    name: "A5 Wagyu Ribeye",
    description: "8oz Kagoshima A5 Wagyu, delicately seared and served with smoked sea salt, black garlic purée, and roasted maitake mushrooms.",
    price: "$140",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?q=80&w=1887&auto=format&fit=crop"
  }
];

export function SpecialDishes() {
  return (
    <section id="specials" className="py-24 bg-card relative overflow-hidden">
      {/* Abstract background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] text-primary uppercase tracking-[0.2em] mb-2 block">Chef's Selection</span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">Signature Specials</h2>
          <p className="text-foreground/60 font-light text-sm">
            Experience our most celebrated creations, crafted with premium ingredients and unmatched technique.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {specialDishes.map((dish, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <Card className="overflow-hidden bg-[#1a1a1a] border-border rounded-none flex flex-col h-full hover:border-primary/30 transition-colors">
                <div className="relative h-64 overflow-hidden group">
                  <img 
                    src={dish.image} 
                    alt={dish.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Badge className="absolute top-4 left-4 bg-[#121212] text-primary hover:bg-[#121212] text-[8px] uppercase tracking-widest rounded-none border border-white/10 shadow-xl font-sans">
                    Chef Recommends
                  </Badge>
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-sm flex items-center gap-1 shadow-xl">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="font-bold text-sm">{dish.rating}</span>
                  </div>
                </div>
                
                <CardContent className="p-8 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-3xl font-playfair font-bold">{dish.name}</h3>
                    <span className="text-2xl font-playfair font-bold text-primary">{dish.price}</span>
                  </div>
                  
                  <p className="text-foreground/70 font-light leading-relaxed mb-8 flex-1">
                    {dish.description}
                  </p>
                  
                  <div className="flex gap-4 mt-auto">
                    <Button className="flex-1 rounded-sm font-semibold tracking-wider h-12">
                      Order Now
                    </Button>
                    <a href="#reservation" className="inline-flex items-center justify-center flex-1 rounded-sm font-semibold tracking-wider border border-border hover:bg-border/50 h-12 bg-transparent">
                      Reserve Table
                    </a>
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
