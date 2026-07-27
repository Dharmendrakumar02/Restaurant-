import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Heart, Search, Clock, Flame } from 'lucide-react';

const menuData = [
  {
    id: 1, category: 'starters', name: 'Truffle Arancini', price: '$18',
    description: 'Crispy risotto balls stuffed with wild mushrooms and truffle cheese, served with garlic aioli.',
    calories: '450 kcal', time: '15 min', tags: ['Vegetarian', 'Popular'],
    image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 2, category: 'starters', name: 'Wagyu Beef Tartare', price: '$26',
    description: 'Hand-cut wagyu, quail egg, capers, shallots, and toasted brioche points.',
    calories: '320 kcal', time: '10 min', tags: ['Chef Special'],
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 3, category: 'main', name: 'Pan-Seared Scallops', price: '$42',
    description: 'Jumbo scallops, cauliflower purée, pancetta crisp, and brown butter caper sauce.',
    calories: '550 kcal', time: '25 min', tags: ['Popular'],
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 4, category: 'main', name: 'Herb-Crusted Rack of Lamb', price: '$58',
    description: 'New Zealand lamb, pistachio crust, root vegetable gratin, and rosemary jus.',
    calories: '850 kcal', time: '35 min', tags: ['Chef Special'],
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 5, category: 'desserts', name: 'Dark Chocolate Soufflé', price: '$16',
    description: 'Valrhona chocolate, molten center, vanilla bean ice cream.',
    calories: '600 kcal', time: '20 min', tags: ['Popular', 'Vegetarian'],
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 6, category: 'drinks', name: 'Smoked Old Fashioned', price: '$18',
    description: 'Bourbon, orange bitters, smoked with cherry wood.',
    calories: '180 kcal', time: '5 min', tags: ['Popular'],
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop'
  }
];

const categories = [
  { value: 'all', label: 'All Menu' },
  { value: 'starters', label: 'Starters' },
  { value: 'main', label: 'Main Course' },
  { value: 'desserts', label: 'Desserts' },
  { value: 'drinks', label: 'Drinks' },
];

export function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMenu = menuData.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] text-primary uppercase tracking-[0.2em] mb-2 block">Our Menu</span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">Culinary Masterpieces</h2>
          <p className="text-foreground/60 font-light text-sm">
            Discover our carefully curated selection of dishes, prepared with the finest ingredients and culinary expertise.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={setActiveCategory}>
            <TabsList className="bg-background/50 border border-border rounded-sm h-14 p-1">
              {categories.map(cat => (
                <TabsTrigger 
                  key={cat.value} 
                  value={cat.value}
                  className="rounded-sm px-6 font-medium tracking-wide uppercase text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search menu..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 bg-background/50 border-border rounded-sm focus-visible:ring-primary"
            />
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredMenu.map(item => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="group flex flex-col sm:flex-row gap-6 p-4 rounded-sm border border-transparent hover:border-border hover:bg-background/30 transition-all"
              >
                <div className="relative w-full sm:w-24 sm:h-24 shrink-0 overflow-hidden rounded-none border border-white/10 bg-[#252525]">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                
                <div className="flex-1 flex flex-col justify-center">
                  <div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">{item.name}</h3>
                      <span className="text-sm text-primary">{item.price}</span>
                    </div>
                    <p className="text-foreground/40 text-xs italic leading-relaxed mb-2 font-light">
                      {item.description}
                    </p>
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {item.tags.map(tag => (
                        <span key={tag} className="text-[8px] border border-white/10 px-2 py-0.5 uppercase opacity-60 text-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredMenu.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <p>No dishes found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
}
