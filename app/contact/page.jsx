export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Let’s talk</h1>
      <p className="mt-2 text-gray-600">Tell me about your project and goals.</p>
      <form className="mt-6 grid gap-4">
        <input required name="name" placeholder="Your name" className="rounded-xl2 border border-gray-200 px-4 py-3" />
        <input required type="email" name="email" placeholder="Email" className="rounded-xl2 border border-gray-200 px-4 py-3" />
        <textarea required name="message" placeholder="Project details" rows={5} className="rounded-xl2 border border-gray-200 px-4 py-3"></textarea>
        <button className="rounded-xl2 bg-brand text-white px-5 py-3">Send</button>
      </form>
      <p className="text-xs text-gray-500 mt-2">Form is a static demo. Hook it to your email/API later.</p>
    </section>
  );
}
