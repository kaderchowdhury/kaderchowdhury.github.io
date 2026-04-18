function Card({ children, className = "", id }) {
  return (
    <div
      id={id}
      className={`rounded-[1.75rem] border border-white/10 bg-white/[0.03] text-neutral-100 ${className}`}
    >
      {children}
    </div>
  );
}
export default Card;
