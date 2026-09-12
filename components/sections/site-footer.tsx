"use client";

import { FooterColumn } from "@/types";

const footerColumns: FooterColumn[] = [
  {
    title: "Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "Join", href: "/join" },
      { label: "Ideas", href: "/ideas" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact Form", href: "https://forms.gle/HGtTCCVAbgL8BHu37", isExternal: true },
      { label: "X", href: "https://x.com/joinPSC_India", isExternal: true },
      { label: "Instagram", href: "https://www.instagram.com/psc_india/", isExternal: true },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer
      className="border-t border-black/10 bg-white pt-16 pb-12 text-sm text-black/70"
    >
      <div className="space-y-16">
        {/* Main Footer Content */}
        <div className="flex flex-col gap-12 sm:flex-row sm:justify-between">
          {/* Brand & Mission */}
          <div className="space-y-4 max-w-xs">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-sm font-semibold shadow-xs">
                PSC
              </span>
              <span className="text-sm font-semibold text-black">
                Public Service Covenant
              </span>
            </div>
            <p className="text-sm leading-relaxed text-black/70">
              Service, not power. Sacrifice, not accumulation.
            </p>
          </div>

          {/* Nav Columns */}
          <div className="flex flex-wrap gap-16">
            {footerColumns.map((column) => (
              <div key={column.title} className="space-y-4 min-w-[120px]">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-black/40">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.isExternal ? "_blank" : undefined}
                        rel={link.isExternal ? "noopener noreferrer" : undefined}
                        className="group inline-flex items-center gap-2 text-sm text-black/65 transition-colors hover:text-black focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black/10 rounded-xs"
                      >
                        <span>{link.label}</span>
                        {link.isBadge && (
                          <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-600">
                            {link.isBadge}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-black/10 pt-8 sm:flex-row sm:items-center text-xs text-black/50">
          <p>
            &copy; {new Date().getFullYear()} Public Service Covenant.
          </p>
        </div>

        {/* No donations warning */}
        <div className="border-t border-black/10 pt-6 mt-6">
          <p className="text-xs text-black/50 font-medium">
            ⚠️ PSC is not currently accepting donations. Do not give money to anyone claiming to collect on our behalf.
          </p>
        </div>
      </div>
    </footer>
  );
}
