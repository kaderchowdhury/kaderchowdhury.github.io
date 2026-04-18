function Button({ children, href = "#", variant = "solid" }) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium transition";
  const styles =
    variant === "outline"
      ? "border border-white/15 bg-transparent text-white hover:bg-white/5"
      : "bg-white text-neutral-950 hover:bg-neutral-200";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

export default Button;
