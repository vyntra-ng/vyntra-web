import { Wallet, Swords, Trophy, ShieldCheck, HeadphonesIcon } from 'lucide-react';

export default function Home() {
  const supportedGames = [
    { name: 'Call of Duty Mobile', image: '/callofduty.jpeg' },
    { name: 'Free Fire', image: '/freefire.jpeg' },
    { name: 'PUBG Mobile', image: '/pubg.jpeg' },
    { name: 'Bloodstrike', image: '/bloodstrike.png' }
  ];

  return (
    <>
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-12 lg:pt-24 pb-24 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        <div className="flex-1 w-full max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-card border border-dark-border/20 text-dark-accent text-xs sm:text-sm font-semibold mb-8 uppercase tracking-widest shadow-[0_0_15px_rgba(46,196,182,0.15)] mx-auto lg:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dark-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-dark-accent"></span>
            </span>
            Mobile Esports Hub
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 mt-4 lg:mt-0">
            Game With <br className="hidden sm:block" />
            <span className="text-white" style={{ background: "linear-gradient(to right, #2EC4B6, #4CAF50)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", color: "transparent" }}>
              Value.
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-dark-subtext mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            The premier competitive platform for Nigerian gamers. Pay entry fees, join matches in CODM, Free Fire, and PUBG, stack kills, and earn real rewards.
          </p>
          <a href="#how-it-works" className="inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-bold text-dark-background bg-dark-accent rounded-full hover:bg-[#25a89c] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(46,196,182,0.4)]">
            See How It Works
          </a>
        </div>

        <div className="flex-1 w-full flex justify-center lg:justify-end shrink-0 relative">
          <div className="absolute inset-0 bg-dark-accent/10 blur-[80px] rounded-full hidden lg:block" />
          <div className="relative w-[280px] sm:w-[300px] lg:w-[320px] h-[560px] sm:h-[600px] lg:h-[640px] bg-dark-card rounded-[40px] border-[6px] border-[#2A2A40] p-2 shadow-2xl overflow-hidden lg:transform lg:rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
            <div className="absolute top-0 inset-x-0 h-6 bg-[#2A2A40] w-[120px] mx-auto rounded-b-2xl z-20" />
            <div className="w-full h-full bg-[#111122] rounded-[30px] overflow-hidden">
               <img src="/vyntramatchscreen.jpg" alt="Vyntra Matches Screen" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </main>

      {/* Supported Games */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <p className="text-center text-dark-subtext uppercase tracking-widest text-sm font-semibold mb-8">Supported Titles</p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {supportedGames.map((game) => (
             <div key={game.name} className="pr-6 pl-3 py-3 rounded-full bg-dark-card/50 border border-dark-border/20 text-white font-medium flex items-center gap-4 hover:border-dark-accent hover:bg-dark-card transition-all cursor-default shadow-lg backdrop-blur-sm">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-white/10 flex-shrink-0">
                <img src={game.image} alt={game.name} className="w-full h-full object-cover" />
              </div>
              {game.name}
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-[#16213E]/50 border-t border-dark-border/10 py-24 relative">
        <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-dark-accent/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">Your Path to <span className="text-dark-accent">Victory</span></h2>
            <p className="text-dark-subtext max-w-2xl mx-auto text-lg">Three simple steps to start earning real cash from your gaming skills.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-dark-background p-8 rounded-[32px] border border-dark-border/20 relative overflow-hidden group hover:border-dark-accent/60 hover:-translate-y-2 transition-all duration-300 shadow-xl">
              <div className="absolute -top-6 -right-2 text-[120px] font-black italic text-white/[0.03] select-none group-hover:text-dark-accent/[0.05] transition-colors">1</div>
              <div className="w-16 h-16 bg-dark-card rounded-2xl flex items-center justify-center border border-dark-accent/30 mb-8 text-dark-accent group-hover:scale-110 transition-all">
                <Wallet size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Sign Up & Fund</h3>
              <p className="text-dark-subtext leading-relaxed text-lg">Create your Vyntra profile and top up your coin wallet securely.</p>
            </div>
            
            <div className="bg-dark-background p-8 rounded-[32px] border border-dark-border/20 relative overflow-hidden group hover:border-dark-accent/60 hover:-translate-y-2 transition-all duration-300 shadow-xl">
              <div className="absolute -top-6 -right-2 text-[120px] font-black italic text-white/[0.03] select-none group-hover:text-dark-accent/[0.05] transition-colors">2</div>
              <div className="w-16 h-16 bg-dark-card rounded-2xl flex items-center justify-center border border-dark-accent/30 mb-8 text-dark-accent group-hover:scale-110 transition-all">
                <Swords size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Join a Match</h3>
              <p className="text-dark-subtext leading-relaxed text-lg">Browse active lobbies for your favorite games and secure your spot.</p>
            </div>
            
            <div className="bg-dark-background p-8 rounded-[32px] border border-dark-border/20 relative overflow-hidden group hover:border-dark-accent/60 hover:-translate-y-2 transition-all duration-300 shadow-xl">
              <div className="absolute -top-6 -right-2 text-[120px] font-black italic text-white/[0.03] select-none group-hover:text-dark-accent/[0.05] transition-colors">3</div>
              <div className="w-16 h-16 bg-dark-card rounded-2xl flex items-center justify-center border border-dark-accent/30 mb-8 text-dark-accent group-hover:scale-110 transition-all">
                <Trophy size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Stack Kills & Win</h3>
              <p className="text-dark-subtext leading-relaxed text-lg">Drop into the game. Earn coins for every confirmed kill, and withdraw instantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-dark-border/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start gap-6 p-8 rounded-3xl bg-dark-card/50 border border-dark-border/10">
            <div className="w-14 h-14 rounded-2xl bg-[#0EA5E9]/10 flex items-center justify-center flex-shrink-0 text-[#0EA5E9]">
               <ShieldCheck size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Secure Payments by Paystack</h3>
              <p className="text-dark-subtext">Your NGN transactions are encrypted and processed by Paystack, Africa's most trusted payment gateway. Seamlessly top up and withdraw your earnings directly to your bank account.</p>
            </div>
          </div>
          <div className="flex items-start gap-6 p-8 rounded-3xl bg-dark-card/50 border border-dark-border/10">
            <div className="w-14 h-14 rounded-2xl bg-dark-accent/10 flex items-center justify-center flex-shrink-0 text-dark-accent">
               <HeadphonesIcon size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Dedicated Email Support</h3>
              <p className="text-dark-subtext">Disputes? Account questions? Our customer success team is ready to assist. Reach out to our official support email anytime for fast resolution.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
