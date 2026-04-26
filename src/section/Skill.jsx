import { Badge } from "lucide-react";

export default function Skill({ group, items }) {
  <div key={group}>
    <h3 className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
      {group}
    </h3>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Badge key={item}>{item}</Badge>
      ))}
    </div>
  </div>;
}
