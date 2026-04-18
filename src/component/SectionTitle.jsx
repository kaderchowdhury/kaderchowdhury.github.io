function SectionTitle({ icon: Icon, title }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <Icon className="h-5 w-5 text-cyan-300" />
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
    </div>
  );
}

export default SectionTitle;
