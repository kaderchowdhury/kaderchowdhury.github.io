import Badge from "../component/Badge";
import Card from "../component/Card";
import { Sparkles } from "lucide-react";
export default function Featured({ index, item }) {
  return (
    <Card
      key={item.title}
      className="group transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
    >
      <div className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <Badge>0{index + 1}</Badge>
          <Sparkles className="h-4 w-4 text-cyan-300" />
        </div>
        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
        <p className="mt-3 text-sm leading-6 text-neutral-300">
          {item.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {item.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
