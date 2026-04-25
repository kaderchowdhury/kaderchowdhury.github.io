import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Code2,
  GraduationCap,
  Mail,
  Sparkles,
  Wrench,
  Send,
} from "lucide-react";
import { skills } from "./content/skills";
import { experience } from "./content/experience";
import { featuredWork } from "./content/featuredWork";
import Badge from "./component/Badge";
import Card from "./component/Card";
import LinkedInIcon from "./component/LinkedInIcon";
import SectionTitle from "./component/SectionTitle";
import Header from "./section/Header";
import Hero from "./section/Hero";
import Featured from "./section/Featured";
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 top-32 h-[24rem] w-[24rem] rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[20rem] w-[20rem] rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <Header setMenuOpen={setMenuOpen} menuOpen={menuOpen} />

      <main id="top" className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur md:p-10"
        >
          <Hero />
        </motion.section>

        <motion.section
          id="featured"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mt-8 grid gap-6 lg:grid-cols-3"
        >
          {featuredWork.map((item, index) => (
            <Featured key={index} index={index} item={item} />
          ))}
        </motion.section>

        <div className="mt-8 grid items-stretch gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.section
            id="work"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8"
          >
            <SectionTitle icon={Briefcase} title="Experience" />

            <div className="space-y-6">
              {experience.map((item) => (
                <div
                  key={item.company}
                  className="rounded-[1.5rem] border border-white/10 bg-neutral-900/60 p-5"
                >
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {item.role}
                      </h3>
                      <p className="text-sm text-cyan-200">{item.company}</p>
                    </div>
                    <div className="text-sm text-neutral-400 md:text-right">
                      <p>{item.period}</p>
                      <p>{item.location}</p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-neutral-300">
                    {item.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          <div className="flex h-full flex-col gap-8">
            <motion.section
              id="skills"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="flex-1 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8"
            >
              <SectionTitle icon={Code2} title="Skills" />

              <div className="space-y-5">
                {Object.entries(skills).map(([group, items]) => (
                  <div key={group}>
                    <h3 className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                      {group}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((item) => (
                        <Badge key={item}>{item}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-1"
            >
              <Card id="education">
                <div className="p-6">
                  <SectionTitle icon={GraduationCap} title="Education" />
                  <div className="space-y-5 text-sm text-neutral-300">
                    <div>
                      <p className="font-medium text-white">
                        Master of Science
                      </p>
                      <p>Data Science & Computational Intelligence</p>
                      <p className="text-neutral-400">
                        Coventry University · United Kingdom
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-white">
                        Bachelor of Science
                      </p>
                      <p>Computer Science</p>
                      <p className="text-neutral-400">
                        BRAC University · Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="p-6">
                  <SectionTitle icon={Wrench} title="How I work" />
                  <p className="text-sm leading-7 text-neutral-300">
                    I like products that solve real problems and engineering
                    cultures that care about delivery, reliability, and clean
                    systems. I’m at my best when I can move between product
                    needs, backend logic, and deployment.
                  </p>
                </div>
              </Card>
            </motion.section>
          </div>
        </div>

        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mt-8 rounded-[2rem] border border-white/10 bg-gradient-to-r from-cyan-500/10 via-transparent to-violet-500/10 p-8"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">
                Let’s build something better
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                Looking for a senior engineer who can ship and scale?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-300">
                I’m open to strong engineering teams working on meaningful
                products, especially where product delivery, platform
                reliability, and backend depth actually matter.
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
                  <label className="mb-2 block text-sm text-neutral-300">
                    Name
                  </label>
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
                  <label className="mb-2 block text-sm text-neutral-300">
                    Email
                  </label>
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
        </motion.section>
      </main>
    </div>
  );
}
