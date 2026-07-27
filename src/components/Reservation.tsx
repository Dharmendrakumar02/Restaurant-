import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export function Reservation() {
  return (
    <section id="reservation" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-card opacity-50 -skew-x-12 translate-x-32" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card border border-border p-8 md:p-12 rounded-sm shadow-2xl"
          >
            <div className="mb-8">
              <span className="text-[10px] text-primary uppercase tracking-[0.2em] mb-2 block">Book a Table</span>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">Make a Reservation</h2>
              <p className="text-foreground/60 font-light text-sm">Secure your spot for an unforgettable dining experience. For parties larger than 8, please contact us directly.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs uppercase tracking-wider text-muted-foreground">Full Name</Label>
                  <Input id="name" placeholder="John Doe" className="h-12 bg-background/50 border-border rounded-sm focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs uppercase tracking-wider text-muted-foreground">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="h-12 bg-background/50 border-border rounded-sm focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-xs uppercase tracking-wider text-muted-foreground">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="h-12 bg-background/50 border-border rounded-sm focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests" className="text-[9px] uppercase tracking-tighter text-foreground/40 block mb-1">Number of Guests</Label>
                  <select id="guests" className="flex h-12 w-full border border-border bg-[#121212] px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 appearance-none">
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6">6 People</option>
                    <option value="7">7 People</option>
                    <option value="8">8 People</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-xs uppercase tracking-wider text-muted-foreground">Date</Label>
                  <Input id="date" type="date" className="h-12 bg-background/50 border-border rounded-sm focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time" className="text-[9px] uppercase tracking-tighter text-foreground/40 block mb-1">Time</Label>
                  <select id="time" className="flex h-12 w-full border border-border bg-[#121212] px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 appearance-none">
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="21:00">9:00 PM</option>
                    <option value="22:00">10:00 PM</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="occasion" className="text-xs uppercase tracking-wider text-muted-foreground">Occasion (Optional)</Label>
                <select id="occasion" className="flex h-12 w-full rounded-sm border border-border bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none">
                  <option value="">Select an occasion...</option>
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="business">Business Meeting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes" className="text-xs uppercase tracking-wider text-muted-foreground">Special Requests</Label>
                <Textarea id="notes" placeholder="Any dietary requirements or special preferences?" className="min-h-[100px] bg-background/50 border-border rounded-sm focus-visible:ring-primary resize-none" />
              </div>

              <Button type="submit" size="lg" className="w-full h-12 rounded-none text-xs uppercase tracking-widest text-primary border border-primary/30 bg-transparent hover:bg-primary hover:text-background transition-all">
                Confirm Availability
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10 lg:pl-10"
          >
            <div>
              <h3 className="font-playfair text-2xl font-bold mb-4">Opening Hours</h3>
              <ul className="space-y-3 text-foreground/80 font-light">
                <li className="flex justify-between border-b border-border/50 pb-2">
                  <span>Monday - Thursday</span>
                  <span>5:00 PM - 10:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-border/50 pb-2">
                  <span>Friday - Saturday</span>
                  <span>5:00 PM - 11:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-border/50 pb-2">
                  <span>Sunday</span>
                  <span>4:00 PM - 9:00 PM</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-playfair text-2xl font-bold mb-4">Contact Information</h3>
              <ul className="space-y-4 text-foreground/80 font-light">
                <li>
                  <strong className="block text-foreground text-sm uppercase tracking-wider mb-1">Address</strong>
                  123 Culinary Avenue, Food District, NY 10001
                </li>
                <li>
                  <strong className="block text-foreground text-sm uppercase tracking-wider mb-1">Phone</strong>
                  +1 (555) 123-4567
                </li>
                <li>
                  <strong className="block text-foreground text-sm uppercase tracking-wider mb-1">Email</strong>
                  reservations@flavorhaven.com
                </li>
              </ul>
            </div>
            
            <div className="pt-6 border-t border-border">
              <p className="font-light italic text-foreground/60">
                * For private events and catering services, please email us directly with your requirements. We recommend booking at least 2 weeks in advance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
