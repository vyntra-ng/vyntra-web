export default function Terms() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-20">
      
      {/* Header */}
      <div className="mb-10 border-b border-white/10 pb-10">
        <p className="text-[#10B981] font-bold uppercase tracking-[0.3em] text-sm mb-4">
          Legal Information
        </p>
        <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 uppercase tracking-tight">
          Terms of Service
        </h1>
        <p className="text-gray-400 font-medium tracking-widest uppercase text-sm">
          Last updated: April 2026
        </p>
      </div>

      {/* Disclaimer */}
      <div className="mb-16 bg-[#111] border-l-4 border-[#10B981] p-6 text-gray-300 text-sm sm:text-base leading-relaxed">
        <strong className="text-white uppercase tracking-wider text-xs block mb-2">Disclaimer</strong>
        Vyntra is not affiliated with, endorsed by, partnered with, or sponsored by Garena, Activision, Blizzard, or any other game developer or publisher. All game names and trademarks are the property of their respective owners.
      </div>

      <div className="space-y-16">
        
        {/* Section 1 */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-white/10 font-mono text-3xl font-black">01</span>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider">About Vyntra</h2>
          </div>
          <div className="text-gray-400 leading-relaxed pl-12 border-l border-white/5">
            <p>Vyntra is an independent skill-based competition platform that allows players to compete in online gaming matches for coin-based rewards. Vyntra is operated from Nigeria by <strong className="text-white">Vyntra Play Limited</strong>.</p>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-white/10 font-mono text-3xl font-black">02</span>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Eligibility</h2>
          </div>
          <div className="text-gray-400 pl-12 border-l border-white/5">
            <ul className="list-none space-y-4">
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#10B981] mt-2 shrink-0"></span>Be at least 18 years of age</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#10B981] mt-2 shrink-0"></span>Have a valid email address for account verification</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#10B981] mt-2 shrink-0"></span>Have a verified in-game account for the game you wish to compete in</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#10B981] mt-2 shrink-0"></span>Not be previously banned from Vyntra</li>
            </ul>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-white/10 font-mono text-3xl font-black">03</span>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Skill-Based Competition</h2>
          </div>
          <div className="text-gray-400 leading-relaxed pl-12 border-l border-white/5">
            <p className="mb-6">Vyntra is a skill-based platform. Match payouts are determined entirely by player performance. Outcomes are not determined by chance. Vyntra is not a gambling platform.</p>
            <div className="bg-[#111] border border-white/10 p-5 rounded font-mono text-[#10B981] text-sm text-center font-bold tracking-widest uppercase">
              Payout = Entry Fee × Kills
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-white/10 font-mono text-3xl font-black">04</span>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Entry Fees</h2>
          </div>
          <div className="text-gray-400 pl-12 border-l border-white/5">
            <ul className="list-none space-y-4">
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#10B981] mt-2 shrink-0"></span>Entry fees are deducted from your wallet when you join a match.</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#10B981] mt-2 shrink-0"></span>Entry fees are non-refundable if you miss or fail to participate after joining.</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#10B981] mt-2 shrink-0"></span>Refunds are only issued if a match is cancelled before it starts.</li>
            </ul>
          </div>
        </section>

        {/* Section 5 */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-white/10 font-mono text-3xl font-black">05</span>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Wallet and Coins</h2>
          </div>
          <div className="text-gray-400 leading-relaxed pl-12 border-l border-white/5">
            <ul className="list-none space-y-4 mb-6">
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#10B981] mt-2 shrink-0"></span>Vyntra uses an internal coin system for match participation and payouts.</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#10B981] mt-2 shrink-0"></span>Coins can be topped up using real money via Paystack.</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#10B981] mt-2 shrink-0"></span>Minimum withdrawal: 500 coins. Maximum: 50,000 coins per transaction.</li>
            </ul>
            <p className="text-sm">Vyntra Coins are a licensed digital token used solely for participation. They are not legal tender, have no real-world value outside Vyntra, and do not accrue interest.</p>
          </div>
        </section>

        {/* Section 6 */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-white/10 font-mono text-3xl font-black">06</span>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Premium Pass & Fees</h2>
          </div>
          <div className="text-gray-400 space-y-6 leading-relaxed pl-12 border-l border-white/5">
            <div className="bg-[#111] border border-white/5 p-5 rounded">
              <strong className="text-white block mb-1 uppercase tracking-widest text-xs">Withdrawal Fees</strong> 
              Regular users (2%). Premium users (0.5%). This covers payment processing costs.
            </div>
            <div className="bg-[#111] border border-white/5 p-5 rounded">
              <strong className="text-white block mb-1 uppercase tracking-widest text-xs">Premium Pass</strong> 
              Premium Passes are prepaid, non-recurring consumable purchases valid for a specific duration. They do not renew automatically.
            </div>
          </div>
        </section>

        {/* Section 7 */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-white/10 font-mono text-3xl font-black">07</span>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Disputes</h2>
          </div>
          <div className="text-gray-400 pl-12 border-l border-white/5">
            <ul className="list-none space-y-4">
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#10B981] mt-2 shrink-0"></span>A 10-minute dispute window opens after payouts are distributed.</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#10B981] mt-2 shrink-0"></span>You may submit a dispute with your claimed kill count and screenshot evidence.</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#10B981] mt-2 shrink-0"></span>If approved by our staff, kills are adjusted. Submitting false disputes may result in a ban.</li>
            </ul>
          </div>
        </section>

        {/* Section 8 */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-white/10 font-mono text-3xl font-black">08</span>
            <h2 className="text-2xl font-bold text-[#EF4444] uppercase tracking-wider">Prohibited Conduct</h2>
          </div>
          <div className="text-gray-400 pl-12 border-l border-[#EF4444]/30">
            <ul className="list-none space-y-4 mb-6">
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#EF4444] mt-2 shrink-0"></span>Cheating, hacking, or using any unfair advantage in matches.</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#EF4444] mt-2 shrink-0"></span>Creating multiple accounts or submitting false verification.</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#EF4444] mt-2 shrink-0"></span>Colluding with players or attempting to exploit bugs.</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#EF4444] mt-2 shrink-0"></span>Harassing or threatening other users or staff.</li>
            </ul>
            <p className="text-[#EF4444] font-bold text-sm tracking-wide uppercase">Violations may result in account suspension, permanent ban, and forfeiture of wallet balance.</p>
          </div>
        </section>

        {/* Section 9 */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-white/10 font-mono text-3xl font-black">09</span>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Anti-Money Laundering</h2>
          </div>
          <div className="text-gray-400 leading-relaxed pl-12 border-l border-white/5">
            <p>To prevent money laundering, Vyntra enforces a continuous rollover requirement. Funds deposited into your Vyntra wallet must be used to participate in at least one match before they become eligible for withdrawal or gifting.</p>
          </div>
        </section>

        {/* Section 10 */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-white/10 font-mono text-3xl font-black">10</span>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Platform Earnings & Law</h2>
          </div>
          <div className="text-gray-400 leading-relaxed pl-12 border-l border-white/5 space-y-4">
            <p>Vyntra earns revenue through premium subscription fees, withdrawal fees, ads, and coins from absent players. We do not take a percentage cut from match payouts.</p>
            <p><strong className="text-white">Governing Law:</strong> These Terms are governed by the laws of the Federal Republic of Nigeria.</p>
          </div>
        </section>
        
        {/* Footer / Need Help */}
        <div className="pt-16 mt-16 border-t border-white/10">
          <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-widest">Have Questions?</h3>
          <p className="text-gray-400">Contact legal support at <a href="mailto:support@vyntragg.com" className="text-[#10B981] hover:text-white transition-colors font-bold">support@vyntragg.com</a></p>
        </div>

      </div>
    </div>
  );
}
