import { Menu, X } from "lucide-react";
export default function Header({ setMenuOpen, menuOpen }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-neutral-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-12">
        <a
          href="#top"
          className="text-sm font-semibold tracking-wide text-white"
        >
          IMRAN KADER CHOWDHURY
        </a>

        <nav className="hidden items-center gap-6 text-sm text-neutral-300 md:flex">
          <a href="#work" className="hover:text-white">
            Work
          </a>
          <a href="#skills" className="hover:text-white">
            Skills
          </a>
          <a href="#education" className="hover:text-white">
            Education
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/5 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4 text-sm text-neutral-300">
            <a
              href="#work"
              onClick={() => setMenuOpen(false)}
              className="hover:text-white"
            >
              Work
            </a>
            <a
              href="#skills"
              onClick={() => setMenuOpen(false)}
              className="hover:text-white"
            >
              Skills
            </a>
            <a
              href="#education"
              onClick={() => setMenuOpen(false)}
              className="hover:text-white"
            >
              Education
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-white"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
