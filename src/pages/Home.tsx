export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-12 lg:pt-24 pb-24 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        <div className="flex-1 w-full max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
          
          {/* Replaced Glowing Pill with Premium Overline */}
          <p className="text-dark-accent font-bold uppercase tracking-[0.3em] text-sm mb-6">
            Mobile Esports Hub
          </p>

          {/* Solid, sharp typography. Removed gradient text. */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-8 uppercase">
            Game With <br className="hidden sm:block" />
            <span className="text-dark-accent">Value.</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-dark-subtext mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
            The premier competitive platform for Nigerian gamers. Pay entry fees, join matches, stack kills, and earn real rewards.
          </p>
          
          {/* Snappy button, removed bouncy animations and soft drop shadows */}
          <a href="#how-it-works" className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-dark-background bg-dark-accent rounded hover:bg-white transition-colors duration-200 uppercase tracking-[0.15em]">
            See How It Works
          </a>
        </div>

        {/* Hero Image / Phone Mockup */}
        <div className="flex-1 w-full flex justify-center lg:justify-end shrink-0 relative">
          {/* Removed soft blur glow from behind the phone */}
          <div className="relative w-[280px] sm:w-[300px] lg:w-[320px] h-[560px] sm:h-[600px] lg:h-[640px] bg-dark-card rounded-[40px] border-4 border-white/5 p-2 overflow-hidden shadow-2xl">
            <div className="absolute top-0 inset-x-0 h-6 bg-[#0A0A0A] w-[120px] mx-auto rounded-b-2xl z-20" />
            <div className="w-full h-full bg-[#111122] rounded-[30px] overflow-hidden">
               <img src="/vyntramatchscreen.jpg" alt="Vyntra Matches Screen" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </main>

      {/* Supported Games - Premium Bento Grid replacing pill cards */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <h2 className="text-3xl font-black text-white mb-10 tracking-widest uppercase border-l-4 border-dark-accent pl-5">
          Supported Games
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* CODM Card */}
          <div className="relative h-48 md:h-64 rounded bg-[#0A0A0A] border border-white/10 overflow-hidden group cursor-pointer">
            <img src="/callofduty.jpeg" alt="Call of Duty Mobile" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-opacity duration-200" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-bold text-white tracking-widest uppercase mb-1">CODM</h3>
              <p className="text-dark-accent text-xs font-bold tracking-[0.2em] uppercase">Open Lobbies</p>
            </div>
          </div>

          {/* Free Fire Card */}
          <div className="relative h-48 md:h-64 rounded bg-[#0A0A0A] border border-white/10 overflow-hidden group cursor-pointer">
            <img src="/freefire.jpeg" alt="Free Fire" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-opacity duration-200" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-bold text-white tracking-widest uppercase mb-1">Free Fire</h3>
              <p className="text-dark-accent text-xs font-bold tracking-[0.2em] uppercase">Open Lobbies</p>
            </div>
          </div>

          {/* PUBG Card */}
          <div className="relative h-48 md:h-64 rounded bg-[#0A0A0A] border border-white/10 overflow-hidden group cursor-pointer">
            <img src="/pubg.jpeg" alt="PUBG Mobile" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-opacity duration-200" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-bold text-white tracking-widest uppercase mb-1">PUBG Mobile</h3>
              <p className="text-dark-accent text-xs font-bold tracking-[0.2em] uppercase">Open Lobbies</p>
            </div>
          </div>

          {/* Bloodstrike Card */}
          <div className="relative h-48 md:h-64 rounded bg-[#0A0A0A] border border-white/10 overflow-hidden group cursor-pointer">
            <img src="/bloodstrike.png" alt="Bloodstrike" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-opacity duration-200" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-bold text-white tracking-widest uppercase mb-1">Bloodstrike</h3>
              <p className="text-dark-accent text-xs font-bold tracking-[0.2em] uppercase">Open Lobbies</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works - Sharper layout, removed Lucide icons */}
      <section id="how-it-works" className="bg-[#050505] border-t border-white/5 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 uppercase tracking-tight">Your Path to <span className="text-dark-accent">Victory</span></h2>
            <p className="text-dark-subtext text-xl max-w-2xl font-medium leading-relaxed">Three simple steps to start earning real cash from your gaming skills.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 rounded bg-[#0A0A0A] border border-white/5 hover:border-dark-accent transition-colors duration-200">
              <div className="text-5xl font-black text-white/20 mb-8 font-mono">01</div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">Sign Up & Fund</h3>
              <p className="text-dark-subtext leading-relaxed text-lg">Create your Vyntra profile and top up your wallet securely.</p>
            </div>

            <div className="p-10 rounded bg-[#0A0A0A] border border-white/5 hover:border-dark-accent transition-colors duration-200">
              <div className="text-5xl font-black text-white/20 mb-8 font-mono">02</div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">Join a Match</h3>
              <p className="text-dark-subtext leading-relaxed text-lg">Browse active lobbies for your favorite games and secure your spot.</p>
            </div>

            <div className="p-10 rounded bg-[#0A0A0A] border border-white/5 hover:border-dark-accent transition-colors duration-200">
              <div className="text-5xl font-black text-dark-accent/40 mb-8 font-mono">03</div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">Stack Kills</h3>
              <p className="text-dark-subtext leading-relaxed text-lg">Drop into the game. Earn coins for every confirmed kill, and withdraw instantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Security - Minimal text block, no big icons */}
      <section className="bg-[#0A0A0A] py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <div>
            <p className="text-white/40 font-bold uppercase tracking-widest text-sm mb-4">Payments</p>
            <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-wide">Secure by Paystack</h3>
            <p className="text-dark-subtext text-lg leading-relaxed">Your NGN transactions are encrypted and processed by Paystack, Africa's most trusted payment gateway. Seamlessly top up and withdraw your earnings directly to your bank account.</p>
          </div>
          <div>
            <p className="text-white/40 font-bold uppercase tracking-widest text-sm mb-4">Support</p>
            <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-wide">Dedicated Support</h3>
            <p className="text-dark-subtext text-lg leading-relaxed">Disputes? Account questions? Our customer success team is ready to assist. Reach out to our official support email anytime for fast resolution.</p>
          </div>
        </div>
      </section>
    </>
  );
}
