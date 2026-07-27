/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { SpecialDishes } from './components/SpecialDishes';
import { Testimonials } from './components/Testimonials';
import { Chef } from './components/Chef';
import { Reservation } from './components/Reservation';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background font-poppins text-foreground selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <SpecialDishes />
        <Reservation />
        <Testimonials />
        <Chef />
      </main>
      <Footer />
    </div>
  );
}
