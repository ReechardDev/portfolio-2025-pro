import SectionHeader from "@/components/SectionHeader";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeader eyebrow="Let’s work together" title="Contact" text="" />

      {/* Simple form shell (hook to your handler later) */}
      <form className="mt-6 grid gap-4 max-w-xl">
        <input className="rounded-xl2 border border-gray-200 p-3" placeholder="Name" name="name" />
        <input className="rounded-xl2 border border-gray-200 p-3" placeholder="Email" type="email" name="email" />
        <textarea className="rounded-xl2 border border-gray-200 p-3" placeholder="Message" rows={5} name="message" />
        <button className="rounded-xl2 bg-brand text-white px-5 py-3">Send</button>
      </form>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 p-6 bg-white">
          <h3 className="font-semibold">Other ways</h3>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>Email: <a className="text-brand" href="mailto:inemesitdavid90@gmail.com">inemesitdavid90@gmail.com</a></li>
            <li>Phone: <a className="text-brand" href="tel:+2330595633424">+233 05956-33424</a></li>
            <li>WhatsApp: <a className="text-brand" href="https://wa.me/">Chat</a></li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 p-6 bg-white">
          <h3 className="font-semibold">Profiles</h3>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li><a className="text-brand" href="https://www.linkedin.com/">LinkedIn</a></li>
            <li><a className="text-brand" href="https://github.com/ReechardDev">GitHub</a></li>
            <li><a className="text-brand" href="https://x.com/">X</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
