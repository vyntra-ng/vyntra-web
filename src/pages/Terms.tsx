import { Info, Users, Swords, Wallet, Banknote, Crown, ShieldAlert, Gavel, FileWarning, Search, HelpCircle } from 'lucide-react';

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

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Terms of Service</h1>
        <p className="text-dark-accent font-medium">Last updated: April 2026</p>
      </div>

      <div className="bg-dark-accent/10 border border-dark-accent/30 rounded-2xl p-6 mb-12 text-dark-accent text-sm sm:text-base">
        <strong>Disclaimer:</strong> Vyntra is not affiliated with, endorsed by, partnered with, or sponsored by Garena, Activision, Blizzard, or any other game developer or publisher. All game names and trademarks are the property of their respective owners.
      </div>

      <Card title="1. About Vyntra" icon={Info}>
        <p>Vyntra is an independent skill-based competition platform that allows players to compete in online gaming matches for coin-based rewards. Vyntra is operated from Nigeria by <strong className="text-white">Vyntra Play Limited</strong>.</p>
      </Card>

      <Card title="2. Eligibility" icon={Users}>
        <ul className="list-disc pl-5 space-y-2">
          <li>Be at least 18 years of age</li>
          <li>Have a valid email address for account verification</li>
          <li>Have a verified in-game account for the game you wish to compete in</li>
          <li>Not be previously banned from Vyntra</li>
        </ul>
      </Card>

      <Card title="3. Skill-Based Competition" icon={Swords}>
        <p>Vyntra is a skill-based platform. Match payouts are determined entirely by player performance. Outcomes are not determined by chance. Vyntra is not a gambling platform.</p>
        <div className="bg-[#16213E] border border-dark-border/10 rounded-lg py-3 px-4 mt-4 font-mono text-dark-accent text-center font-bold">
          Payout formula: Entry Fee × Kills = Player Payout
        </div>
      </Card>

      <Card title="4. Entry Fees" icon={Banknote}>
        <ul className="list-disc pl-5 space-y-2">
          <li>Entry fees are deducted from your wallet when you join a match.</li>
          <li>Entry fees are non-refundable if you miss or fail to participate after joining.</li>
          <li>Refunds are only issued if a match is cancelled before it starts.</li>
        </ul>
      </Card>

      <Card title="5. Wallet and Coins" icon={Wallet}>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Vyntra uses an internal coin system for match participation and payouts.</li>
          <li>Coins can be topped up using real money via Paystack.</li>
          <li>Minimum withdrawal: 500 coins. Maximum: 50,000 coins per transaction.</li>
        </ul>
        <p>Vyntra Coins are a licensed digital token used solely for participation. They are not legal tender, have no real-world value outside Vyntra, and do not accrue interest.</p>
      </Card>

      <Card title="6. Premium Pass & Fees" icon={Crown}>
        <p><strong className="text-white">Withdrawal Fees:</strong> Regular users (2%). Premium users (0.5%). This covers payment processing costs.</p>
        <p className="mt-4"><strong className="text-white">Premium Pass:</strong> Premium Passes are prepaid, non-recurring consumable purchases valid for a specific duration. They do not renew automatically.</p>
      </Card>

      <Card title="7. Disputes" icon={Gavel}>
        <ul className="list-disc pl-5 space-y-2">
          <li>A 10-minute dispute window opens after payouts are distributed.</li>
          <li>You may submit a dispute with your claimed kill count and screenshot evidence.</li>
          <li>If approved by our staff, kills are adjusted. Submitting false disputes may result in a ban.</li>
        </ul>
      </Card>

      <Card title="8. Prohibited Conduct" icon={ShieldAlert}>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Cheating, hacking, or using any unfair advantage in matches.</li>
          <li>Creating multiple accounts or submitting false verification.</li>
          <li>Colluding with players or attempting to exploit bugs.</li>
          <li>Harassing or threatening other users or staff.</li>
        </ul>
        <p className="text-[#FF6B6B] font-medium">Violations may result in account suspension, permanent ban, and forfeiture of wallet balance.</p>
      </Card>

      <Card title="9. Anti-Money Laundering (AML)" icon={Search}>
        <p>To prevent money laundering, Vyntra enforces a continuous rollover requirement. Funds deposited into your Vyntra wallet must be used to participate in at least one match before they become eligible for withdrawal or gifting.</p>
      </Card>

      <Card title="10. Platform Earnings & Law" icon={FileWarning}>
        <p className="mb-4">Vyntra earns revenue through premium subscription fees, withdrawal fees, ads, and coins from absent players. We do not take a percentage cut from match payouts.</p>
        <p><strong>Governing Law:</strong> These Terms are governed by the laws of the Federal Republic of Nigeria.</p>
      </Card>

      <div className="text-center mt-12 mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-dark-accent/10 text-dark-accent mb-4">
          <HelpCircle size={24} />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Have Questions?</h3>
        <p className="text-dark-subtext">Contact legal support at <a href="mailto:support@vyntragg.com" className="text-dark-accent hover:underline">support@vyntragg.com</a></p>
      </div>
    </div>
  );
}
