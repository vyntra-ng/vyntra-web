export default function Home() {
  return (
    <div className="flex flex-col items-center w-full pb-20">
      
      {/* Hero Section - Aggressive, high contrast, no gradients */}
      <section className="w-full max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        {/* The Overline (Replacing the glowing pill) */}
        <p className="text-[#10B981] font-bold uppercase tracking-[0.2em] text-sm mb-6">
          Mobile Esports Hub
        </p>
        
        {/* Solid white headline, no gradient text */}
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-wide">
          Game With Value.
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          The premier competitive platform for Nigerian gamers. Pay entry fees, join matches in CODM, Free Fire, and PUBG, stack kills, and earn real rewards.
        </p>

        <button className="bg-[#10B981] hover:bg-[#059669] text-black font-bold px-8 py-4 rounded text-base transition-colors uppercase tracking-widest">
          See How It Works
        </button>
      </section>

      {/* Supported Games Bento Grid - Replacing basic cards */}
      <section className="w-full max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-white mb-8 tracking-wide uppercase text-left border-l-4 border-[#10B981] pl-4">
          Supported Games
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* CODM Card */}
          <div className="relative h-48 md:h-64 rounded bg-[#111] border border-white/10 overflow-hidden group cursor-pointer">
            <img 
              src="/callofduty.jpeg" 
              alt="Call of Duty Mobile" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-105 transition-all duration-300" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-bold text-white tracking-wider mb-1 uppercase">CODM</h3>
            </div>
          </div>

          {/* Free Fire Card */}
          <div className="relative h-48 md:h-64 rounded bg-[#111] border border-white/10 overflow-hidden group cursor-pointer">
            <img 
              src="/freefire.jpeg" 
              alt="Free Fire" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-105 transition-all duration-300" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-bold text-white tracking-wider mb-1 uppercase">Free Fire</h3>
            </div>
          </div>

          {/* PUBG Card */}
          <div className="relative h-48 md:h-64 rounded bg-[#111] border border-white/10 overflow-hidden group cursor-pointer">
            <img 
              src="/pubg.jpeg" 
              alt="PUBG Mobile" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-105 transition-all duration-300" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-bold text-white tracking-wider mb-1 uppercase">PUBG Mobile</h3>
            </div>
          </div>

          {/* Bloodstrike Card */}
          <div className="relative h-48 md:h-64 rounded bg-[#111] border border-white/10 overflow-hidden group cursor-pointer">
            <img 
              src="/bloodstrike.png" 
              alt="Bloodstrike" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-105 transition-all duration-300" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-bold text-white tracking-wider mb-1 uppercase">Bloodstrike</h3>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
