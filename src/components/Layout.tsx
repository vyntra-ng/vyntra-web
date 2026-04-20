import { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Smartphone } from 'lucide-react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function Layout() {
  return (
    <div className="min-h-screen bg-dark-background overflow-x-hidden font-sans relative flex flex-col">
      <ScrollToTop />
      
      {/* Background Glow Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-dark-accent/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-[#0F3460]/40 rounded-full blur-[100px] pointer-events-none" />

      {/* Navigation Bar */}
      <nav className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 lg:gap-4 hover:opacity-80 transition-opacity">
          <img src="/vyntra_logo-1.jpeg" alt="Vyntra Icon" className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-[12px] shadow-lg border border-dark-accent/30" />
          <img src="/vyntrawhitetext.png" alt="Vyntra" className="hidden sm:block h-6 sm:h-8 w-auto object-contain" />
        </Link>
        
        <button onClick={() => alert("The Play Store link will go here!")} className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-dark-card to-[#1d2d50] border border-dark-accent text-white font-bold cursor-pointer hover:scale-105 transition-all shadow-[0_0_15px_rgba(46,196,182,0.3)] text-sm sm:text-base">
          <Smartphone size={18} className="text-dark-accent" />
          <span className="hidden sm:inline">Get on Play Store</span>
          <span className="sm:hidden">Get App</span>
        </button>
      </nav>

      {/* Main Page Content */}
      <div className="flex-grow relative z-10">
        <Outlet />
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-dark-border/20 bg-[#0F172A] mt-auto pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" className="flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity">
              <img src="/vyntra_logo-1.jpeg" alt="Vyntra Icon" className="w-8 h-8 object-contain rounded-lg shadow-lg border border-dark-accent/30" />
              <img src="/vyntrawhitetext.png" alt="Vyntra" className="h-5 w-auto object-contain opacity-90" />
            </Link>
            <p className="text-dark-subtext text-sm max-w-xs">
              Esports for everyone. Play hard, earn harder.
            </p>
          </div>

          <div className="flex gap-12 text-center md:text-left">
             <div className="flex flex-col gap-3">
               <h4 className="text-white font-bold mb-1">Legal</h4>
               <Link to="/terms" className="text-dark-subtext hover:text-dark-accent text-sm transition-colors">Terms of Service</Link>
               <Link to="/privacy" className="text-dark-subtext hover:text-dark-accent text-sm transition-colors">Privacy Policy</Link>
             </div>
             <div className="flex flex-col gap-3">
               <h4 className="text-white font-bold mb-1">Connect</h4>
               <a href="mailto:support@vyntragg.com" className="text-dark-subtext hover:text-dark-accent text-sm transition-colors">support@vyntragg.com</a>
             </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-dark-border/10 text-center text-dark-subtext text-sm">
           © {new Date().getFullYear()} Vyntra Play Limited. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
