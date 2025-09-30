import BenefitsPanel from "@/components/benefits-panel"

export default function HomePage() {
  return (
    <main>
      {/* Hero section with background image and single panel */}
      <section
        className="w-full"
        style={{
          backgroundImage: "url('/images/hero-credit-card.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid md:grid-cols-1 gap-8 items-start">
            <BenefitsPanel />
          </div>
        </div>
      </section>
    </main>
  )
}
