import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { nav } from "@/lib/site-content";
import { Menu, X } from "lucide-react";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-xl leading-none">
          <span className="inline-block h-2 w-2 rounded-full bg-accent-warm" aria-hidden />
          <span>The Native AI Group</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-ink-muted lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-foreground" }}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full border border-accent-warm/60 bg-accent-warm px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-warm/90"
          >
            Partner With Us
          </Link>
        </div>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-hairline bg-background lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-ink-muted hover:bg-surface hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-accent-warm px-4 py-2 text-sm font-medium text-accent-foreground"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}