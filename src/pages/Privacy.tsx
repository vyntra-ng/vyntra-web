export default function Privacy() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-20">
      
      {/* Header */}
      <div className="mb-16 border-b border-white/10 pb-10">
        <p className="text-[#10B981] font-bold uppercase tracking-[0.3em] text-sm mb-4">
          Legal Information
        </p>
        <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 uppercase tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-gray-400 font-medium tracking-widest uppercase text-sm">
          Last updated: April 2026
        </p>
      </div>

      <div className="text-lg text-gray-300 mb-16 leading-relaxed font-medium">
        Vyntra is committed to protecting your personal information. This Privacy Policy explains what data we collect, how we use it, and your rights regarding your data.
      </div>

      <div className="space-y-16">
        {/* Section 1 */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-white/10 font-mono text-3xl font-black">01</span>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Who We Are</h2>
          </div>
          <div className="text-gray-400 space-y-4 leading-relaxed pl-12 border-l border-white/5">
            <p>Vyntra is an independent skill-based gaming competition platform operated from Nigeria by <strong className="text-white">Vyntra Play Limited</strong>. We are not affiliated with, endorsed by, or partnered with any game developer.</p>
            <p>Contact: <a href="mailto:support@vyntragg.com" className="text-[#10B981] hover:text-white transition-colors font-bold">support@vyntragg.com</a></p>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-white/10 font-mono text-3xl font-black">02</span>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Data We Collect</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-12 border-l border-white/5">
            <div>
              <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Account & Gaming</h3>
              <ul className="list-none space-y-3 text-gray-400">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#10B981] shrink-0"></span>Email address</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#10B981] shrink-0"></span>Username and profile info</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#10B981] shrink-0"></span>Encrypted Passwords & PINs</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#10B981] shrink-0"></span>In-game name & UID</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#10B981] shrink-0"></span>Match history & kills</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Financial & Device</h3>
              <ul className="list-none space-y-3 text-gray-400">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#10B981] shrink-0"></span>Wallet & transaction history</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#10B981] shrink-0"></span>Bank details (withdrawals)</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#10B981] shrink-0"></span>IP address & Device OS</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-white/10 font-mono text-3xl font-black">03</span>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider">How We Use Data</h2>
          </div>
          <div className="text-gray-400 pl-12 border-l border-white/5">
            <ul className="list-none space-y-4">
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#10B981] mt-2 shrink-0"></span>Create and manage your account</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#10B981] mt-2 shrink-0"></span>Verify your gaming identity before match participation</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#10B981] mt-2 shrink-0"></span>Process match entry fees, payouts, and withdrawals</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#10B981] mt-2 shrink-0"></span>Detect and prevent fraud, cheating, and multiple accounts</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#10B981] mt-2 shrink-0"></span>Resolve disputes between participants</li>
            </ul>
          </div>
        </section>

        {/* Section 4 */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-white/10 font-mono text-3xl font-black">04</span>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Third-Party Sharing</h2>
          </div>
          <div className="text-gray-400 space-y-6 pl-12 border-l border-white/5">
            <p>We share data only with essential third-party service providers needed to operate Vyntra:</p>
            <div className="grid gap-4">
              <div className="bg-[#111] border border-white/5 p-5 rounded">
                <strong className="text-white block mb-1 uppercase tracking-widest text-xs">Cloud Infrastructure</strong> 
                Secure hosting for our database.
              </div>
              <div className="bg-[#111] border border-white/5 p-5 rounded">
                <strong className="text-white block mb-1 uppercase tracking-widest text-xs">Payment Processors</strong> 
                Paystack for withdrawals and Play Store for Passes.
              </div>
              <div className="bg-[#111] border border-white/5 p-5 rounded">
                <strong className="text-white block mb-1 uppercase tracking-widest text-xs">Comms Services</strong> 
                Email delivery for OTPs and alerts.
              </div>
            </div>
            <p className="text-[#10B981] font-bold uppercase tracking-widest text-sm pt-2">We do not sell your personal data to any third party.</p>
          </div>
        </section>

        {/* Section 5 */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-white/10 font-mono text-3xl font-black">05</span>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Security & Retention</h2>
          </div>
          <div className="text-gray-400 space-y-4 leading-relaxed pl-12 border-l border-white/5">
            <p>Your data is stored securely on encrypted, industry-standard cloud infrastructure. Your password and PIN are hashed and never stored in readable form.</p>
            <p>We retain your account data for as long as your account is active. If you delete your account, your personal data is removed within 30 days.</p>
          </div>
        </section>

        {/* Section 6 */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-white/10 font-mono text-3xl font-black">06</span>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Your Rights</h2>
          </div>
          <div className="text-gray-400 pl-12 border-l border-white/5">
            <ul className="list-none space-y-4">
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#10B981] mt-2 shrink-0"></span>Access the personal data we hold about you</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#10B981] mt-2 shrink-0"></span>Request correction of inaccurate data</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#10B981] mt-2 shrink-0"></span>Request deletion of your account and associated data</li>
            </ul>
          </div>
        </section>
        
        {/* Footer / Need Help */}
        <div className="pt-16 mt-16 border-t border-white/10">
          <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-widest">Need Help?</h3>
          <p className="text-gray-400">To exercise your rights, contact us at <a href="mailto:support@vyntragg.com" className="text-[#10B981] hover:text-white transition-colors font-bold">support@vyntragg.com</a></p>
        </div>

      </div>
    </div>
  );
}
