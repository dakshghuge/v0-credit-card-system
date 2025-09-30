export default function BenefitsPanel() {
  const benefits = [
    "Easy access to credit",
    "Building a line of credit",
    "EMI facility",
    "Incentives and offers",
    "Flexible credit",
    "Record of expenses",
    "Purchase protection",
    "Accepted widely",
    "Insurance coverage",
    "Make travel easy",
  ]
  return (
    <section className="backdrop-blur-sm bg-black/45 text-white rounded-md p-6 w-full max-w-2xl">
      <h3 className="text-xl font-semibold mb-3">Benefits of Credit Cards</h3>
      <p className="text-white/80 text-sm mb-4">
        A credit card has become an indispensable part of our lives with convenient payback options. Used wisely, it’s a
        valuable tool; used unwisely, it can lead to debt traps.
      </p>
      <ul className="grid gap-2 text-sm">
        {benefits.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-gold" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
