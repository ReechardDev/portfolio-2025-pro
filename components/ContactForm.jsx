"use client";

import { useState } from "react";
import ButtonCTA from "./ui/ButtonCTA";
import { track } from "../lib/ga";

export default function ContactForm() {
  const [state, setState] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const onChange = (e) => setState({ ...state, [e.target.name]: e.target.value });

  const mailtoFallback = () => {
    const body = encodeURIComponent(`From: ${state.name} <${state.email}>\n\n${state.message}`);
    window.location.href = `mailto:inemesitdavid90@gmail.com?subject=${encodeURIComponent(
      "Portfolio inquiry"
    )}&body=${body}`;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        // Track & fallback to mailto
        track("contact_submit_error", { label: data?.error || `HTTP_${res.status}` });
        mailtoFallback();
        setError("Couldn’t send via server—opened your email app instead.");
        return;
      }

      setDone(true);
      track("contact_submit", { label: "contact_form" });
    } catch (err) {
      track("contact_submit_error", { label: "network_error" });
      mailtoFallback();
      setError("Network issue—opened your email app instead.");
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <div className="rounded-2xl border border-brand-cta-hover bg-sky-50 p-6">
        <div className="text-lg font-medium text-slate-900">Thanks! 🎉</div>
        <p className="mt-1 text-sm text-slate-600">
          Your message was sent. I'll get back to you within 24-48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-brand-cta-hover bg-sky-50 p-6 shadow-sm hover-card">
      <div className="text-lg font-medium text-slate-900">Email me directly</div>
      <p className="mt-1 text-sm text-slate-600">Fill this form and I'll reply shortly.</p>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm text-slate-700">Name</label>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={onChange}
            autoComplete="name"
            className="mt-1 w-full rounded-xl2 border border-gray-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-slate-700">Email</label>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={onChange}
            autoComplete="email"
            className="mt-1 w-full rounded-xl2 border border-gray-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
            placeholder="you@example.com"
            required
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-sm text-slate-700">Message</label>
        <textarea
          name="message"
          rows={5}
          value={state.message}
          onChange={onChange}
          className="mt-1 w-full rounded-xl2 border border-gray-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
          placeholder="Tell me a bit about your project…"
          required
        />
      </div>

      {error ? <p className="mt-2 text-sm text-amber-700">{error}</p> : null}

      <div className="mt-4">
        <ButtonCTA as="button" type="submit" disabled={loading} data-ga="cta_click" data-ga-label="contact_send">
          {loading ? "Sending…" : "Send"}
        </ButtonCTA>
      </div>
    </form>
  );
}
