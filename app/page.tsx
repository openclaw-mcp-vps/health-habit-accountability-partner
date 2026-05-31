export default function Home() {
  const faqs = [
    {
      q: "How does the AI coaching work?",
      a: "Our AI analyzes your habit streaks and completion patterns, then sends personalized encouragement and actionable suggestions tailored to your goals."
    },
    {
      q: "Can I cancel my subscription anytime?",
      a: "Yes. Cancel anytime from your billing portal with no questions asked. You keep access until the end of your billing period."
    },
    {
      q: "What habits can I track?",
      a: "Any health or fitness habit — workouts, hydration, sleep, meditation, nutrition, and more. You define the habits that matter to you."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6">
          AI-Powered Health Coaching
        </span>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Your Personal AI<br />Health Accountability Partner
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Track habits, analyze your streaks, and receive personalized AI encouragement that keeps you consistent — day after day.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Start for $7/mo
        </a>
        <div className="mt-10 grid grid-cols-3 gap-6 text-center">
          {[
            ["Habit Tracking", "Log daily habits with one tap"],
            ["Streak Analysis", "AI spots your patterns"],
            ["AI Coaching", "Personalized encouragement"]
          ].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <p className="text-white font-semibold text-sm mb-1">{title}</p>
              <p className="text-[#8b949e] text-xs">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$7</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited habit tracking",
              "AI-powered streak analysis",
              "Daily personalized coaching",
              "Progress reports & insights",
              "Cancel anytime"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="text-white font-semibold mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-20 text-center text-[#8b949e] text-xs">
        © {new Date().getFullYear()} HabitCoach AI. All rights reserved.
      </footer>
    </main>
  );
}
