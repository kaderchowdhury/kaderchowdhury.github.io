import Badge from "../component/Badge";

export default function Experience({ item }) {
  return (
    <div
      key={item.company}
      className="rounded-[1.5rem] border border-white/10 bg-neutral-900/60 p-5"
    >
      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">{item.role}</h3>
          <p className="text-sm text-cyan-200">{item.company}</p>
        </div>
        <div className="text-sm text-neutral-400 md:text-right">
          <p>{item.period}</p>
          <p>{item.location}</p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-7 text-neutral-300">{item.summary}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </div>
  );
}
