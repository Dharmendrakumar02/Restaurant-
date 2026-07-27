import { Utensils, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Utensils className="h-6 w-6 text-primary" />
              <span className="font-playfair text-xl font-bold tracking-wider text-foreground">
                Flavor Haven
              </span>
            </div>
            <p className="text-foreground/60 font-light text-sm leading-relaxed">
              Experience the pinnacle of fine dining with our meticulously crafted dishes and exceptional hospitality in the heart of the city.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-playfair font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Menu', 'Special Dishes', 'Reservation', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-foreground/60 hover:text-primary transition-colors font-light text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-playfair font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4 text-foreground/60 font-light text-sm">
              <li>123 Culinary Avenue,<br/>Food District, NY 10001</li>
              <li>+1 (555) 123-4567</li>
              <li>info@flavorhaven.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-foreground/60 font-light text-sm mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-card border-border rounded-sm focus-visible:ring-primary h-12"
              />
              <Button type="submit" className="w-full rounded-none font-bold tracking-widest h-12 uppercase text-[10px] bg-primary text-primary-foreground hover:bg-primary/90">
                Subscribe
              </Button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-[10px] text-foreground/40 uppercase tracking-widest font-light">
          <p>&copy; {new Date().getFullYear()} Flavor Haven. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
