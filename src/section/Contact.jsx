import { Mail, Send } from "lucide-react";
import LinkedInIcon from "../component/LinkedInIcon";
import React from "react";

export default function Contact() {
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">
          Let’s build something better
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-white">
          Looking for a senior engineer who can ship and scale?
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-300">
          I’m open to strong engineering teams working on meaningful products,
          especially where product delivery, platform reliability, and backend
          depth actually matter.
        </p>

        <div className="mt-6 space-y-4 text-sm text-neutral-300">
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-cyan-300" />
            <a
              href="mailto:kchowdhurybd@gmail.com"
              className="hover:text-white"
            >
              kchowdhurybd@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <LinkedInIcon className="h-4 w-4 text-cyan-300" />
            <a
              href="https://www.linkedin.com/in/kaderchowdhury/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              linkedin.com/in/kaderchowdhury
            </a>
          </div>
        </div>
      </div>

      <form
        action="mailto:kchowdhurybd@gmail.com"
        method="post"
        encType="text/plain"
        className="rounded-[1.75rem] border border-white/10 bg-neutral-950/50 p-5"
      >
        <div className="grid gap-4">
          <div>
            <label className="mb-2 block text-sm text-neutral-300">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-500 focus:border-cyan-400/40"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-neutral-300">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-500 focus:border-cyan-400/40"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-neutral-300">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-500 focus:border-cyan-400/40"
              placeholder="Tell me about the role or project"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
          >
            <Send className="mr-2 h-4 w-4" />
            Send message
          </button>
        </div>
      </form>
    </div>
  );
}
