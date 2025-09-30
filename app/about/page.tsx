export default function AboutPage() {
  return (
    <main className="py-10">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-2xl font-semibold text-center mb-8">
          CREDIT CARD <span className="text-gold">Application Management System</span>
        </h1>
        <p className="text-center leading-relaxed mb-6">
          This project streamlines the end-to-end credit card application process—from submission and review to decision
          and status tracking—so applicants and admins stay perfectly in sync.
        </p>
        {/* </CHANGE> */}

        <section className="bg-muted-2 rounded-md p-6">
          <h2 className="text-xl font-semibold text-center mb-6">About</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="grid gap-4">
              <img
                src="/images/credit-card-hero.jpg"
                alt="Credit card with EMV chip representing secure payments"
                className="w-full rounded-md object-cover"
              />
              <img
                src="/images/payment-terminal.jpg"
                alt="Contactless tap-to-pay on a POS terminal"
                className="w-full rounded-md object-cover"
              />
            </div>
            {/* </CHANGE> */}
            <p className="leading-relaxed">
              A credit card is a type of credit facility provided by banks that allows customers to borrow funds within
              a pre-approved limit. It enables convenient purchases of goods and services, and includes features like
              EMI, rewards, and purchase protection. Used responsibly, it helps build credit and manage expenses with
              ease.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
