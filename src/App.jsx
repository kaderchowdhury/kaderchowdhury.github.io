import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Code2, GraduationCap, Wrench } from "lucide-react";
import { skills } from "./content/skills";
import { experience } from "./content/experience";
import { featuredWork } from "./content/featuredWork";
import Card from "./component/Card";
import SectionTitle from "./component/SectionTitle";
import Header from "./section/Header";
import Hero from "./section/Hero";
import Featured from "./section/Featured";
import Experience from "./section/Experience";
import Contact from "./section/Contact";
import Skill from "./section/Skill";
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

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
                <Experience item={item} key={item.company} />
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
                  <Skill group={group} items={items} />
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
                  <Education />
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
          <Contact />
        </motion.section>
      </main>
    </div>
  );
}
