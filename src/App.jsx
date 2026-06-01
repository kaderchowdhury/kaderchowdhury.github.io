import React, { useMemo, useState } from "react";

// LinkedIn + Google inspired style direction:
// clean white cards, soft gray page background, blue primary actions,
// readable spacing, minimal shadows, and restrained accent colors.
const theme = {
  page: "bg-[#f3f2ef] text-[#202124] font-sans",
  card: "rounded-2xl border border-[#dadce0] bg-white shadow-sm",
  cardHover: "transition hover:-translate-y-0.5 hover:shadow-md",
  muted: "text-[#5f6368]",
  blue: "text-[#0a66c2]",
  blueBg: "bg-[#0a66c2]",
  paleBlue: "bg-[#e8f0fe]",
};

const projects = [
  {
    title: "Acourze Education Platform",
    company: "Acourze",
    category: "E-learning",
    type: "Education Platform",
    description:
      "A digital education platform helping students access flexible, affordable pathways to UK-accredited undergraduate, postgraduate, and doctoral qualifications.",
    impact:
      "Built around course discovery, programme exploration, student onboarding, application flows, and online learning support.",
    stack: ["React", "Node.js", "Express", "MongoDB", "AWS"],
    liveUrl: "https://acourze.com/",
    accent: "bg-[#4285f4]",
    accentSoft: "bg-[#e8f0fe]",
  },
  {
    title: "Merchant Bay Fashion Supply Chain",
    company: "Merchant Bay",
    category: "Supply Chain",
    type: "B2B Commerce Platform",
    description:
      "A fashion sourcing and supply-chain platform connecting global apparel buyers with Bangladesh-based production, design, vendor coordination, and order management workflows.",
    impact:
      "Focused on improving visibility, collaboration, sourcing speed, and operational control across buyers, manufacturers, merchandisers, and supply-chain teams.",
    stack: ["Django", "PostgreSQL", "React", "MongoDB", "AWS"],
    liveUrl: "https://merchantbay.com/",
    accent: "bg-[#0a66c2]",
    accentSoft: "bg-[#eef3f8]",
  },
  {
    title: "Quartzfire Business Platform",
    company: "Quartzfire",
    category: "Business Software",
    type: "Process Management System",
    description:
      "A business software platform designed to organize operational data, connect business processes, and help teams manage work through structured digital workflows.",
    impact:
      "Supported business process visibility by turning disconnected operational information into a more organized, trackable system.",
    stack: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
    liveUrl: "https://quartzfire.com/",
    accent: "bg-[#fbbc05]",
    accentSoft: "bg-[#fef7e0]",
  },
  {
    title: "OpenSRP Health Platform",
    company: "OpenSRP",
    category: "HealthTech",
    type: "Open-source Platform",
    description:
      "An open-source smart register platform that helps frontline health workers manage patients, collect data offline, and deliver healthcare services in communities and facilities.",
    impact:
      "Designed for real-world health systems, including FHIR-native workflows, offline data collection, patient management, and large-scale country implementations.",
    stack: ["React", "FHIR", "Open Source", "APIs", "Offline-first"],
    liveUrl: "https://opensrp.io/",
    accent: "bg-[#34a853]",
    accentSoft: "bg-[#e6f4ea]",
  },
];

const skills = [
  {
    icon: "TS",
    title: "Languages",
    items: ["TypeScript", "JavaScript ES6+", "Python", "SQL"],
  },
  {
    icon: "UI",
    title: "Frontend Engineering",
    items: ["React.js", "Next.js", "Redux Toolkit"],
  },
  {
    icon: "API",
    title: "Backend & APIs",
    items: [
      "Node.js",
      "Express.js",
      "Django",
      "FastAPI",
      "GraphQL",
      "WebSockets",
    ],
  },
  {
    icon: "DB",
    title: "Data, Search & ORM",
    items: [
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "MongoDB",
      "Elasticsearch",
      "Redis",
      "Prisma",
      "Sequelize",
      "Mongoose",
      "TypeORM",
    ],
  },
  {
    icon: "☁",
    title: "Cloud, DevOps & Systems",
    items: [
      "AWS EC2",
      "S3",
      "RDS",
      "Lambda",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Git",
      "Linux",
    ],
  },
  {
    icon: "QA",
    title: "Testing, Docs & Analytics",
    items: [
      "Jest",
      "Pytest",
      "OpenAPI/Swagger",
      "Tableau",
      "Pandas",
      "scikit-learn",
    ],
  },
];

const categories = [
  "All",
  ...Array.from(new Set(projects.map((project) => project.category))),
];

function Button({ children, href, variant = "primary", className = "" }) {
  const baseClass =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#0a66c2] focus:ring-offset-2";

  const variantClass =
    variant === "outline"
      ? "border border-[#dadce0] bg-white text-[#0a66c2] hover:bg-[#eef3f8]"
      : "bg-[#0a66c2] text-white hover:bg-[#004182]";

  return (
    <a href={href} className={`${baseClass} ${variantClass} ${className}`}>
      {children}
    </a>
  );
}

function Icon({ name, className = "" }) {
  const icons = {
    arrow: (
      <path
        d="M7 17L17 7M17 7H9M17 7V15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    github: (
      <path
        d="M12 2C6.48 2 2 6.58 2 12.25c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.38-3.37-1.38-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.36 1.11 2.93.85.09-.67.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0112 6.98c.85 0 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.49A10.15 10.15 0 0022 12.25C22 6.58 17.52 2 12 2z"
        fill="currentColor"
      />
    ),
    linkedin: (
      <path
        d="M6.94 8.75H3.75V20h3.19V8.75zM5.35 7.22A1.86 1.86 0 105.35 3.5a1.86 1.86 0 000 3.72zM20.25 13.55c0-3.02-1.61-4.43-3.76-4.43a3.24 3.24 0 00-2.94 1.62h-.04V8.75h-3.06V20h3.19v-5.56c0-1.47.28-2.89 2.1-2.89 1.79 0 1.82 1.68 1.82 2.98V20h3.19v-6.45z"
        fill="currentColor"
      />
    ),
    mail: (
      <path
        d="M4 6h16v12H4V6zm0 0l8 7 8-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    menu: (
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    ),
    close: (
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    ),
    external: (
      <path
        d="M8 6h10v10M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className || "h-5 w-5"}
    >
      {icons[name]}
    </svg>
  );
}

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-sm font-medium text-[#5f6368] transition hover:text-[#0a66c2]"
    >
      {children}
    </a>
  );
}

function ProjectVisual({ project }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#dadce0] bg-white">
      <div className="flex items-center justify-between border-b border-[#dadce0] bg-[#f8fafd] px-4 py-3">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ea4335]" />
          <span className="h-3 w-3 rounded-full bg-[#fbbc05]" />
          <span className="h-3 w-3 rounded-full bg-[#34a853]" />
        </div>
        <span className="max-w-[180px] truncate text-xs font-medium text-[#5f6368]">
          {project.liveUrl.replace("https://", "")}
        </span>
      </div>

      <div className="relative min-h-[220px] bg-[#f8fafd] p-5">
        <div className="absolute left-0 top-0 grid h-1 w-full grid-cols-4">
          <span className="bg-[#4285f4]" />
          <span className="bg-[#ea4335]" />
          <span className="bg-[#fbbc05]" />
          <span className="bg-[#34a853]" />
        </div>

        <div className="mb-5 flex items-center gap-3">
          <div
            className={`grid h-12 w-12 place-items-center rounded-full ${project.accentSoft} text-sm font-semibold text-[#0a66c2]`}
          >
            {project.company.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <p className="text-sm font-semibold text-[#202124]">
              {project.company}
            </p>
            <p className="text-xs font-medium text-[#5f6368]">{project.type}</p>
          </div>
        </div>

        <div className="space-y-3 rounded-2xl border border-[#dadce0] bg-white p-4 shadow-sm">
          <div className={`h-2 w-24 rounded-full ${project.accent}`} />
          <h3 className="max-w-sm text-2xl font-semibold tracking-tight text-[#202124]">
            {project.title}
          </h3>
          <div className="grid grid-cols-3 gap-2 pt-2">
            <div className="col-span-2 h-14 rounded-xl bg-[#f1f3f4]" />
            <div className="h-14 rounded-xl bg-[#f1f3f4]" />
            <div className="h-10 rounded-xl bg-[#f1f3f4]" />
            <div className="col-span-2 h-10 rounded-xl bg-[#f1f3f4]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="h-full animate-fade-up">
      <div
        className={`${theme.card} ${theme.cardHover} h-full overflow-hidden`}
      >
        <div className="grid h-full gap-5 p-5 md:p-6">
          <ProjectVisual project={project} />

          <div>
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[#e8f0fe] px-3 py-1 text-xs font-semibold text-[#0a66c2]">
                {project.category}
              </span>
              <span className="rounded-full bg-[#f1f3f4] px-3 py-1 text-xs font-medium text-[#5f6368]">
                {project.type}
              </span>
            </div>

            <h3 className="text-2xl font-semibold tracking-tight text-[#202124]">
              {project.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-[#5f6368]">
              {project.company}
            </p>
            <p className="mt-4 leading-7 text-[#5f6368]">
              {project.description}
            </p>
            <p className="mt-3 rounded-2xl bg-[#f8fafd] p-4 text-sm font-medium leading-6 text-[#3c4043]">
              <span className="font-semibold text-[#202124]">Impact:</span>{" "}
              {project.impact}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#dadce0] bg-white px-3 py-1 text-xs font-medium text-[#5f6368]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={project.liveUrl}>
                View Project <Icon name="arrow" className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function SectionLabel({ children }) {
  return (
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#0a66c2]">
      {children}
    </p>
  );
}

export default function PortfolioStylePlaygroundCopy() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className={`min-h-screen overflow-hidden ${theme.page}`}>
      <style>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-up {
          animation: fade-up 0.55s ease both;
        }
      `}</style>

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#e8f0fe]/80 blur-3xl" />
        <div className="absolute right-0 top-80 h-[320px] w-[320px] rounded-full bg-[#fef7e0]/80 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-[#dadce0] bg-white/95 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#0a66c2] text-sm font-semibold text-white">
              IK
            </span>
            <span className="font-semibold tracking-tight text-[#202124]">
              Imran.dev
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#process">Process</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Button href="#contact">Hire Me</Button>
          </div>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-[#dadce0] bg-white md:hidden"
            onClick={() => setMobileMenuOpen((value) => !value)}
            aria-label="Toggle navigation menu"
          >
            <Icon
              name={mobileMenuOpen ? "close" : "menu"}
              className="h-5 w-5"
            />
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="border-t border-[#dadce0] bg-white p-5 md:hidden">
            <div className="grid gap-4">
              <NavLink
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </NavLink>
              <NavLink href="#skills" onClick={() => setMobileMenuOpen(false)}>
                Skills
              </NavLink>
              <NavLink href="#process" onClick={() => setMobileMenuOpen(false)}>
                Process
              </NavLink>
              <NavLink href="#contact" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </header>

      <section
        id="home"
        className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1fr_0.88fr] lg:px-8 lg:py-24"
      >
        <div className="flex animate-fade-up flex-col justify-center">
          <div
            className={`${theme.card} mb-6 inline-flex w-fit items-center gap-2 px-4 py-2 text-sm font-semibold text-[#5f6368]`}
          >
            <span className="h-2 w-2 rounded-full bg-[#0a66c2]" />
            Senior Full-Stack Software Engineer
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-[#202124] md:text-7xl">
            Building reliable web products across frontend, backend, cloud, and
            data.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5f6368]">
            I turn complex product requirements into maintainable systems, with
            hands-on experience shipping platforms for learning, commerce,
            operations, and public health.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="#projects" className="px-7">
              See Projects <Icon name="arrow" className="ml-2 h-5 w-5" />
            </Button>
            <Button href="#contact" variant="outline" className="px-7">
              Contact Me
            </Button>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
            {[
              ["8+", "Years Experience"],
              ["4", "Featured Products"],
              ["4", "Business Domains"],
            ].map(([value, label]) => (
              <div key={label} className={`${theme.card} p-5`}>
                <div className="text-3xl font-semibold tracking-tight text-[#202124]">
                  {value}
                </div>
                <div className="mt-1 text-sm font-medium text-[#5f6368]">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[#e8f0fe] via-white to-[#fef7e0] opacity-90 blur-2xl" />
          <div className={`${theme.card} relative overflow-hidden p-4`}>
            <div className="rounded-2xl border border-[#dadce0] bg-white p-5">
              <div className="flex items-center justify-between border-b border-[#dadce0] pb-4">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#ea4335]" />
                  <span className="h-3 w-3 rounded-full bg-[#fbbc05]" />
                  <span className="h-3 w-3 rounded-full bg-[#34a853]" />
                </div>
                <span className="text-xs font-medium text-[#5f6368]">
                  portfolio.jsx
                </span>
              </div>

              <div className="space-y-4 py-6 font-mono text-sm leading-7 text-[#3c4043]">
                <p>
                  <span className="text-[#0a66c2]">const</span> developer =
                  &#123;
                </p>
                <p className="pl-5">
                  <span className="text-[#34a853]">focus</span>: "Product
                  engineering",
                </p>
                <p className="pl-5">
                  <span className="text-[#34a853]">strengths</span>: ["React",
                  "Backend", "Cloud"],
                </p>
                <p className="pl-5">
                  <span className="text-[#34a853]">proof</span>: "Real shipped
                  systems",
                </p>
                <p>&#125;</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {projects.slice(0, 4).map((project) => (
                  <div
                    key={project.title}
                    className="rounded-2xl border border-[#dadce0] bg-[#f8fafd] p-4"
                  >
                    <div
                      className={`mb-3 h-2 w-16 rounded-full ${project.accent}`}
                    />
                    <h3 className="font-semibold text-[#202124]">
                      {project.category}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-[#5f6368]">
                      {project.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel>Featured Work</SectionLabel>
            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-[#202124] md:text-5xl">
              Case studies that prove what I can actually build.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "bg-[#0a66c2] text-white shadow-sm"
                    : "border border-[#dadce0] bg-white text-[#5f6368] hover:bg-[#eef3f8] hover:text-[#0a66c2]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <SectionLabel>Technical Stack</SectionLabel>
            <h2 className="text-4xl font-semibold tracking-tight text-[#202124] md:text-5xl">
              A senior stack shaped by production systems, cloud delivery, and
              data-driven work.
            </h2>
            <p className="mt-5 leading-8 text-[#5f6368]">
              My technical work spans the full product lifecycle — building user
              interfaces, designing APIs, modeling databases, deploying cloud
              infrastructure, testing production systems, and turning data into
              useful business insights.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {skills.map((group) => (
              <div
                key={group.title}
                className={`${theme.card} ${theme.cardHover} animate-fade-up p-6`}
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-full bg-[#e8f0fe] text-sm font-semibold text-[#0a66c2]">
                  {group.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#202124]">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[#f1f3f4] px-3 py-1 text-xs font-medium text-[#5f6368]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className={`${theme.card} p-6 md:p-10`}>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#e8f0fe] px-4 py-2 text-sm font-semibold text-[#0a66c2]">
                <span>●</span>
                How I Work
              </div>
              <h2 className="text-4xl font-semibold tracking-tight text-[#202124] md:text-5xl">
                From rough idea to production-ready release.
              </h2>
              <p className="mt-5 leading-8 text-[#5f6368]">
                I approach software development with a focus on clear
                architecture, maintainable code, reliable delivery, and
                practical problem-solving across the full product lifecycle.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                ["01", "Understand the business problem before touching code."],
                [
                  "02",
                  "Design APIs, data models, and user flows that survive real usage.",
                ],
                [
                  "03",
                  "Ship in small releases with testing, monitoring, and rollback awareness.",
                ],
                [
                  "04",
                  "Refactor aggressively when complexity starts slowing the team down.",
                ],
              ].map(([step, text]) => (
                <div
                  key={step}
                  className="flex gap-4 rounded-2xl border border-[#dadce0] bg-[#f8fafd] p-5"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#0a66c2] text-sm font-semibold text-white">
                    {step}
                  </div>
                  <p className="self-center font-medium leading-7 text-[#3c4043]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className={`${theme.card} relative overflow-hidden p-8 md:p-12`}>
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#e8f0fe]/80 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#fef7e0]/80 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <SectionLabel>Available for Work</SectionLabel>
              <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-[#202124] md:text-5xl">
                Have a product, platform, or engineering problem worth solving?
              </h2>
              <p className="mt-5 max-w-2xl leading-8 text-[#5f6368]">
                Open to senior software engineering roles where product
                thinking, backend architecture, frontend delivery, and
                production ownership matter.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button href="mailto:kchowdhurybd@gmail.com" className="px-7">
                <Icon name="mail" className="mr-2 h-5 w-5" /> Email Me
              </Button>
              <Button
                href="https://linkedin.com/in/kaderchowdhury"
                variant="outline"
                className="px-7"
              >
                <Icon name="linkedin" className="mr-2 h-5 w-5" /> LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#dadce0] bg-white px-5 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm font-medium text-[#5f6368] md:flex-row md:items-center">
          <p>© 2026 Imran Kader Chowdhury. Built with React.</p>
          <div className="flex gap-4">
            <a
              href="https://github.com/kaderchowdhury"
              className="inline-flex items-center transition hover:text-[#0a66c2]"
            >
              GitHub <Icon name="external" className="ml-1 h-3 w-3" />
            </a>
            <a
              href="https://linkedin.com/in/kaderchowdhury"
              className="inline-flex items-center transition hover:text-[#0a66c2]"
            >
              LinkedIn <Icon name="external" className="ml-1 h-3 w-3" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
