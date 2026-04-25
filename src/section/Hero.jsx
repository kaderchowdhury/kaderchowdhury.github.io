import { Mail } from "lucide-react";
import Badge from "../component/Badge";
import Button from "../component/Button";
import Profile from "./Profile";
import LinkedInIcon from "../component/LinkedInIcon";

export default function Hero() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.35fr_0.9fr] lg:items-end">
      <div>
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <Badge>Senior Software Engineer</Badge>
          <Badge>8+ Years Experience</Badge>
        </div>

        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.05]">
          I build production-grade web platforms that teams can actually ship,
          scale, and rely on.
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-7 text-neutral-300 md:text-lg">
          I’m Imran Kader Chowdhury, a full-stack engineer based in Dhaka. I
          work across product delivery, backend systems, cloud deployment, and
          production support with experience spanning e-learning, e-commerce,
          supply chain, digital health, and analytics.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button href="mailto:kchowdhurybd@gmail.com">
            <Mail className="mr-2 h-4 w-4" />
            Get in touch
          </Button>
          <Button
            href="https://www.linkedin.com/in/kaderchowdhury/"
            variant="outline"
          >
            <LinkedInIcon className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
        </div>
      </div>

      <Profile />
    </div>
  );
}
