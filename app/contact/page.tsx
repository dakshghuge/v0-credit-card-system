export default function ContactPage() {
  return (
    <main className="py-10">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-2xl font-semibold text-center mb-8">
          CREDIT CARD <span className="text-gold">Application Management System</span>
        </h1>

        <section className="bg-muted-2 rounded-md p-6">
          <h2 className="text-xl font-semibold text-center mb-6">Contact</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src="/images/contact-support.jpg"
              alt="Contact and support illustration with email and phone"
              className="w-full rounded-md object-cover"
            />
            <div className="grid gap-2">
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+919960483373" className="underline">
                  9960483373
                </a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:dakshghuge10@gmail.com" className="underline">
                  dakshghuge10@gmail.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
