const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Lab", href: "#lab" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-concrete-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <a href="#top" data-cursor-hover className="font-display text-lg text-paper">
          PRIYANSHU MALIK
        </a>

        <ul className="flex flex-wrap justify-center gap-6 font-mono text-xs uppercase tracking-widest text-fog">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-cursor-hover
                className="transition-colors duration-300 hover:text-cyan"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <span className="font-mono text-[11px] text-fog/70">
          © {new Date().getFullYear()} — Design × Engineering
        </span>
      </div>
    </footer>
  );
}
