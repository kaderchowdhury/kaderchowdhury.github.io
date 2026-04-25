import Card from "../component/Card";
import { Briefcase, Mail, MapPin } from "lucide-react";
import LinkedInIcon from "../component/LinkedInIcon";
export default function Profile() {
  return (
    <Card className="overflow-hidden bg-neutral-900/70 shadow-xl">
      <div className="p-6">
        <div className="mb-6 flex items-start gap-4">
          <img
            src="/imran.jpg"
            alt="Imran Kader Chowdhury"
            className="h-24 w-24 rounded-2xl object-cover ring-1 ring-white/10"
          />
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
              Profile
            </p>
            <p className="mt-2 text-2xl font-semibold">Imran Kader Chowdhury</p>
            <p className="mt-1 text-sm text-cyan-200">
              Senior Software Engineer
            </p>
          </div>
        </div>

        <div className="grid gap-4 text-sm text-neutral-300">
          <div className="flex items-center gap-3">
            <MapPin className="h-4 w-4 text-cyan-300" />
            <span>Dhaka, Bangladesh</span>
          </div>
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
          <div className="flex items-center gap-3">
            <Briefcase className="h-4 w-4 text-cyan-300" />
            <span>Full-stack engineering · Cloud · DevOps</span>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm text-neutral-400">Core stack</p>
          <p className="mt-2 text-sm leading-6 text-neutral-200">
            React, Next.js, Node.js, Django, PostgreSQL, MongoDB, AWS, Docker,
            Kubernetes
          </p>
        </div>
      </div>
    </Card>
  );
}
