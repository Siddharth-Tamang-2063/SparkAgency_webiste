import { Toaster } from 'react-hot-toast';
import Navbar       from './components/Navbar';
import Hero         from './pages/Hero';
import Marquee      from './components/Marquee';
import Services     from './pages/Services';
import About        from './pages/About';
import Process      from './pages/Process';
import Contact      from './pages/Contact';
import Footer       from './components/Footer';

export default function App() {
  return (
    <div className="overflow-x-hidden bg-[#080808] text-[#F0EDE8]">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#0E0E0E',
            color: '#F0EDE8',
            border: '1px solid rgba(240,237,232,0.08)',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '14px',
          },
        }}
      />

      {/* Custom cursor — hidden on touch devices */}
  

      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <Services />
        <About />
        <Process />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}