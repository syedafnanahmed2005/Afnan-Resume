import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-edge bg-ink py-10">
      <div className="shell flex flex-col items-start justify-between gap-4 text-sm text-muted sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <a href="#top" className="font-medium text-white transition hover:text-brand">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
