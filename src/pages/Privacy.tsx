import { ShieldCheck, Database, KeyRound, MonitorSmartphone, Share2, Trash2, HelpCircle } from 'lucide-react';

const Card = ({ title, icon: Icon, children }: any) => (
  <div className="bg-dark-card/30 border border-dark-border/10 rounded-[24px] p-6 md:p-8 mb-6 hover:border-dark-accent/30 transition-colors">
    <div className="flex items-center gap-4 mb-4 border-b border-dark-border/10 pb-4">
       <div className="w-12 h-12 rounded-xl bg-dark-accent/10 flex items-center justify-center text-dark-accent">
         <Icon size={24} />
       </div>
       <h2 className="text-xl sm:text-2xl font-bold text-white m-0">{title}</h2>
    </div>
    <div className="text-dark-subtext space-y-4 text-sm md:text-base leading-relaxed">
      {children}
    </div>
  </div>
);

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Privacy Policy</h1>
        <p className="text-dark-accent font-medium">Last updated: April 2026</p>
      </div>

      <p className="text-lg text-dark-subtext text-center max-w-2xl mx-auto mb-12 leading-relaxed">
        Vyntra is committed to protecting your personal information. This Privacy Policy explains what data we collect, how we use it, and your rights regarding your data.
      </p>

      <Card title="1. Who We Are" icon={ShieldCheck}>
        <p>Vyntra is an independent skill-based gaming competition platform operated from Nigeria by <strong className="text-white">Vyntra Play Limited</strong>. We are not affiliated with, endorsed by, or partnered with any game developer.</p>
        <p>Contact: <a href="mailto:support@vyntragg.com" className="text-dark-accent hover:underline">support@vyntragg.com</a></p>
      </Card>

      <Card title="2. Data We Collect" icon={Database}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-white font-bold mb-2">Account & Gaming</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Email address</li>
              <li>Username and profile info</li>
              <li>Encrypted Passwords & PINs</li>
              <li>In-game name & UID</li>
              <li>Match history & kills</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-2">Financial & Device</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Wallet & transaction history</li>
              <li>Bank details (purely for withdrawals)</li>
              <li>IP address & Device OS</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card title="3. How We Use Data" icon={MonitorSmartphone}>
        <ul className="list-disc pl-5 space-y-2">
          <li>Create and manage your account</li>
          <li>Verify your gaming identity before match participation</li>
          <li>Process match entry fees, payouts, and withdrawals</li>
          <li>Detect and prevent fraud, cheating, and multiple accounts</li>
          <li>Resolve disputes between participants</li>
        </ul>
      </Card>

      <Card title="4. Third-Party Sharing" icon={Share2}>
        <p>We share data only with essential third-party service providers needed to operate Vyntra:</p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li><strong className="text-white">Cloud Infrastructure</strong> — Secure hosting for our database.</li>
          <li><strong className="text-white">Payment Processors</strong> — Paystack for withdrawals and Play Store for Passes.</li>
          <li><strong className="text-white">Comms Services</strong> — Email delivery for OTPs and alerts.</li>
        </ul>
        <p className="mt-4 text-[#2EC4B6] font-medium">We do not sell your personal data to any third party.</p>
      </Card>

      <Card title="5. Security & Retention" icon={KeyRound}>
        <p>Your data is stored securely on encrypted, industry-standard cloud infrastructure. Your password and PIN are hashed and never stored in readable form.</p>
        <p>We retain your account data for as long as your account is active. If you delete your account, your personal data is removed within 30 days.</p>
      </Card>

      <Card title="6. Your Rights" icon={Trash2}>
         <ul className="list-disc pl-5 space-y-2">
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your account and associated data</li>
        </ul>
      </Card>

      <div className="text-center mt-12 mb-8">
         <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-dark-accent/10 text-dark-accent mb-4">
          <HelpCircle size={24} />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Need Help?</h3>
        <p className="text-dark-subtext">To exercise your rights, contact us at <a href="mailto:support@vyntragg.com" className="text-dark-accent hover:underline">support@vyntragg.com</a></p>
      </div>
    </div>
  );
}
