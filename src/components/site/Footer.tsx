import { Link } from "@tanstack/react-router";
import { footerNav, footerDisclaimer, site } from "@/lib/site-content";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-hairline bg-background">
      <div className="container-page grid gap-12 py-16 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display text-lg">
            <span className="inline-block h-2 w-2 rounded-full bg-accent-warm" aria-hidden />
            <span>{site.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-ink-muted">
            We acquire established service businesses, build new companies and equip each one with shared AI,
            automation and operating capabilities.
          </p>
          <p className="mt-6 text-xs uppercase tracking-widest text-ink-muted">{site.location}</p>
        </div>
        {Object.entries(footerNav).map(([heading, items]) => (
          <div key={heading}>
            <h3 className="text-xs font-medium uppercase tracking-widest text-ink-muted">{heading}</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {items.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-foreground/85 transition-colors hover:text-accent-warm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-hairline">
        <div className="container-page flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-ink-muted">© 2026 The Native AI Group. All rights reserved.</p>
          <p className="max-w-3xl text-xs leading-relaxed text-ink-muted">{footerDisclaimer}</p>
        </div>
      </div>
    </footer>
  );
}