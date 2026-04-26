export function Footer() {
  return (
    <footer className="border-t border-border bg-surface px-6 py-12 text-muted sm:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-wide text-primary font-semibold">SMARTRICH</p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            SMARTRICH connects US software opportunities with global engineering teams and delivers projects through disciplined, operator-led execution.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-primary">Company</p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>
                <a href="#services" className="transition hover:text-primary">
                  Services
                </a>
              </li>
              <li>
                <a href="#workflow" className="transition hover:text-primary">
                  Workflow
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-primary">Team</p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>
                <a href="#team" className="transition hover:text-primary">
                  Team model
                </a>
              </li>
              <li>
                <a href="#how-we-work" className="transition hover:text-primary">
                  How we work
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-primary">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>
                <a href="mailto:hello@smartrich.com" className="transition hover:text-primary">
                  hello@smartrich.com
                </a>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-primary">
                  Get in touch
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
